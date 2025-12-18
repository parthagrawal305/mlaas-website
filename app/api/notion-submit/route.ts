import { NextResponse } from 'next/server';

function generateTicketId(): string {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const letter = letters[Math.floor(Math.random() * letters.length)];
  const number = Math.floor(10000 + Math.random() * 90000);
  return `#REQ-${letter}${number}`;
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, volume, brief } = body || {};

  const ticketId = generateTicketId();

  try {
    const notionRes = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        parent: {
          database_id: process.env.NOTION_DATABASE_ID ?? '2ccd1d3f07f1803abaa3fed2f2b8df1e'
        },
        properties: {
          Name: {
            title: [
              {
                text: { content: name || 'Unknown' }
              }
            ]
          },
          Email: {
            email: email || ''
          },
          Volume: {
            select: {
              name: volume
            }
          },
          'Ticket ID': {
            rich_text: [
              {
                text: { content: ticketId }
              }
            ]
          },
          Brief: {
            rich_text: [
              {
                text: { content: brief || '' }
              }
            ]
          }
        }
      })
    });

    const data = await notionRes.json();

    if (!notionRes.ok) {
      return NextResponse.json(data, { status: 400 });
    }

    return NextResponse.json({ ok: true, notionPageId: data.id, ticketId });
  } catch (error) {
    console.error('Notion proxy error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}



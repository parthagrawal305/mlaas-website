// Vercel Serverless Function: /api/notion-submit
// Creates a page in your Notion "Form Submissions" database

function generateTicketId() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const letter = letters[Math.floor(Math.random() * letters.length)];
  const number = Math.floor(10000 + Math.random() * 90000); // 5 digits
  return `#REQ-${letter}${number}`;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, volume, brief } = req.body || {};
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
        parent: { database_id: process.env.NOTION_DATABASE_ID || '2ccd1d3f07f1803abaa3fed2f2b8df1e' },
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
      return res.status(400).json(data);
    }

    return res.status(200).json({ ok: true, notionPageId: data.id, ticketId });
  } catch (error) {
    console.error('Notion proxy error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}



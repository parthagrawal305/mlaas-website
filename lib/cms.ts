export interface CmsPostSummary {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt?: string;
}

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL;

export async function fetchPostSummaries(): Promise<CmsPostSummary[]> {
  if (!CMS_URL) return [];

  try {
    const res = await fetch(`${CMS_URL}/api/posts?limit=10&where[status][equals]=published`, {
      next: { revalidate: 60 }
    });
    if (!res.ok) return [];
    const data = await res.json();
    return (data?.docs || []).map((doc: any) => ({
      id: doc.id,
      title: doc.title,
      slug: doc.slug,
      excerpt: doc.excerpt,
      publishedAt: doc.publishedAt
    }));
  } catch {
    return [];
  }
}



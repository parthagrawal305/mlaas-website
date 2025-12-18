import { notFound } from 'next/navigation';

const mockPosts = [
  {
    slug: 'multi-jurisdiction-architecture',
    title: 'Designing Multi-Jurisdiction Architecture for Complex Assets',
    body: [
      'Well-constructed multi-jurisdiction architecture is less about volume and more about plausible purpose. Every entity and account must have a story that survives basic scrutiny.',
      'The art lies in balancing dispersion with coherence—enough separation that no single view is compromising, but enough structure that it operates as a single, controlled system.'
    ]
  },
  {
    slug: 'modern-crypto-integration',
    title: 'Modern Crypto Integration into Conservative Banking',
    body: [
      'Bridging noisy on-chain activity into conservative, relationship-based banking channels requires both technical and human architecture.',
      'The end-state objective is simple: documented, boring inflows. The path between current reality and that endpoint is where design matters.'
    ]
  }
];

interface BlogPostPageProps {
  params: { slug: string };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = mockPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-bg-primary text-zinc-50">
      <article className="mx-auto max-w-3xl px-6 pb-20 pt-24 md:pt-32">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
          Intelligence
        </p>
        <h1 className="mb-6 font-display text-3xl md:text-4xl">{post.title}</h1>
        <div className="space-y-4 text-sm text-zinc-300">
          {post.body.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
      </article>
    </main>
  );
}



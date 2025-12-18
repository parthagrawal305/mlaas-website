import Link from 'next/link';

const mockPosts = [
  {
    slug: 'multi-jurisdiction-architecture',
    title: 'Designing Multi-Jurisdiction Architecture for Complex Assets',
    excerpt:
      'How layered entity structures across select jurisdictions reduce risk, visibility, and correlation.',
    date: '2024-08-01'
  },
  {
    slug: 'modern-crypto-integration',
    title: 'Modern Crypto Integration into Conservative Banking',
    excerpt:
      'From noisy on-chain flows to quiet private banking: principles for restructuring digital upside.',
    date: '2024-07-18'
  }
];

export default function BlogIndexPage() {
  return (
    <main className="bg-bg-primary text-zinc-50">
      <section className="mx-auto max-w-4xl px-6 pb-20 pt-24 md:pt-32">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
          Intelligence
        </p>
        <h1 className="mb-4 font-display text-3xl md:text-4xl">Structures & Strategy</h1>
        <p className="mb-8 text-sm text-zinc-400">
          Occasional essays on architecture, strategy, and risk. Selected topics that help serious
          operators understand the landscape.
        </p>
        <div className="space-y-4">
          {mockPosts.map((post) => (
            <article key={post.slug} className="glass-card bg-bg-card/80 p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <h2 className="mt-1 font-display text-xl text-zinc-50">
                <Link href={`/blog/${post.slug}`} className="hover:text-gold">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm text-zinc-400">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}



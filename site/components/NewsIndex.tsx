import Image from "next/image";
import Link from "next/link";
import { formatNewsDate, getLatestNews, type NewsArticle } from "@/lib/news";

function NewsRecord({ article, index }: { article: NewsArticle; index: number }) {
  return (
    <Link
      href={`/news/${article.slug}`}
      className="news-record group block"
      style={{ animationDelay: `${index * 0.7}s` }}
    >
      <span className="relative z-10 mb-5 block font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber/60">
        {article.kicker} / {formatNewsDate(article.date)}
      </span>
      <h3 className="relative z-10 font-serif text-3xl font-semibold leading-none text-ivory md:text-4xl">
        {article.title}
      </h3>
      <p className="relative z-10 mt-5 font-mono text-xs uppercase leading-6 tracking-[0.18em] text-ivory-dim">
        {article.excerpt}
      </p>
      <span className="relative z-10 mt-8 flex items-center justify-between gap-6 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-crimson/80">
        {article.status}
        <span aria-hidden="true" className="transition group-hover:translate-x-1">
          read signal &gt;&gt;
        </span>
      </span>
    </Link>
  );
}

export async function NewsIndex() {
  const articles = await getLatestNews(3);

  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="news-section relative isolate overflow-hidden px-5 py-28 md:px-10 lg:px-16">
      <Image
        src="/images/queen-raida-computer-world.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center opacity-45"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,7,0.78),rgba(7,8,7,0.55)_44%,rgba(7,8,7,0.9)),linear-gradient(90deg,rgba(7,8,7,0.9),rgba(7,8,7,0.36)_48%,rgba(7,8,7,0.82))]" />
      <div className="wire-shadow absolute inset-0 opacity-45" />
      <div className="scanlines absolute inset-0 opacity-[0.14]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-oxidized">
              News From The Machine
            </p>
            <h2 className="glitch-text mt-5 font-serif text-5xl font-semibold leading-none text-ivory md:text-7xl" data-text="Recovered Signals">
              Recovered Signals
            </h2>
          </div>
          <Link
            href="/news"
            className="portal-link border border-amber/15 bg-charcoal/48 px-4 py-3 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-amber outline-none transition hover:border-amber/50 focus-visible:border-amber focus-visible:ring-2 focus-visible:ring-amber/40"
          >
            <span className="relative z-10">open archive &gt;&gt;</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {articles.map((article, index) => (
            <NewsRecord key={article.slug} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

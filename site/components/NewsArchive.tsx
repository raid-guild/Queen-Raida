import Link from "next/link";
import { formatNewsDate, type NewsArticle } from "@/lib/news";

export function NewsArchive({ articles }: { articles: NewsArticle[] }) {
  return (
    <div className="relative z-10 mx-auto max-w-6xl px-5 pb-28 pt-32 md:px-10 lg:px-16">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-oxidized">
        Signal Archive
      </p>
      <h1 className="glitch-text mt-5 font-serif text-6xl font-semibold leading-none text-ivory md:text-8xl" data-text="Recovered News">
        Recovered News
      </h1>
      <p className="mt-7 max-w-2xl font-mono text-xs uppercase leading-7 tracking-[0.2em] text-ivory-dim">
        Fragments from the treasury dark, machine corridors, and Queen Raida&apos;s active memory.
      </p>

      <div className="mt-14 divide-y divide-amber/12 border-y border-amber/12">
        {articles.map((article, index) => (
          <Link
            key={article.slug}
            href={`/news/${article.slug}`}
            className="archive-record group grid gap-6 px-4 py-9 outline-none transition hover:bg-amber/[0.035] focus-visible:ring-2 focus-visible:ring-amber/40 md:grid-cols-[16rem_1fr]"
            style={{ animationDelay: `${index * 0.7}s` }}
          >
            <div>
              <time className="font-mono text-xs uppercase tracking-[0.3em] text-oxidized">
                {formatNewsDate(article.date)}
              </time>
              <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-crimson/70">
                {article.status}
              </p>
            </div>
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.26em] text-amber/60">
                {article.kicker}
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-none text-ivory md:text-5xl">
                {article.title}
              </h2>
              <p className="mt-5 max-w-3xl font-mono text-xs uppercase leading-6 tracking-[0.18em] text-ivory-dim">
                {article.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span key={tag} className="news-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { formatNewsDate, type NewsArticle as NewsArticleType } from "@/lib/news";

export function NewsArticle({ article }: { article: NewsArticleType }) {
  return (
    <article className="news-article-shell relative z-10">
      <header className="relative isolate min-h-[70svh] overflow-hidden px-5 pb-16 pt-32 md:px-10 lg:px-16">
        <Image
          src={article.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85"
        />
        <div className="article-image-breach absolute inset-y-0 right-0 hidden w-[58%] md:block" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,7,0.26),rgba(7,8,7,0.36)_45%,rgba(7,8,7,0.94)),linear-gradient(90deg,rgba(7,8,7,0.94),rgba(7,8,7,0.52)_42%,rgba(7,8,7,0.24)_72%,rgba(7,8,7,0.62))]" />
        <div className="wire-shadow absolute inset-0 opacity-45" />
        <div className="scanlines absolute inset-0 opacity-[0.14]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <Link
            href="/news"
            className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-amber outline-none transition hover:text-ivory focus-visible:text-ivory"
          >
            &lt;&lt; return to signals
          </Link>
          <p className="mt-16 font-mono text-[0.68rem] uppercase tracking-[0.32em] text-crimson">
            {article.kicker} / {article.status}
          </p>
          <h1 className="mt-5 max-w-5xl font-serif text-5xl font-semibold leading-none text-ivory md:text-8xl">
            {article.title}
          </h1>
          <p className="mt-7 max-w-2xl font-mono text-xs uppercase leading-7 tracking-[0.2em] text-ivory-dim">
            {article.excerpt}
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[13rem_1fr] md:px-10 lg:px-16">
        <aside className="news-meta-panel h-fit border-y border-amber/12 py-6 md:sticky md:top-10">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.26em] text-oxidized">
            recovered
          </p>
          <time className="mt-3 block font-mono text-xs uppercase tracking-[0.24em] text-amber/80">
            {formatNewsDate(article.date)}
          </time>

          <div className="mt-8 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="news-tag">
                {tag}
              </span>
            ))}
          </div>

          {article.externalLinks.length > 0 ? (
            <div className="mt-10 grid gap-3">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.26em] text-oxidized">
                signal exits
              </p>
              {article.externalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="signal-exit"
                >
                  <span>{link.label}</span>
                  <span aria-hidden="true">&gt;&gt;</span>
                </a>
              ))}
            </div>
          ) : null}
        </aside>

        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
      </div>
    </article>
  );
}

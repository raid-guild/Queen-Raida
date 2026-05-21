const entries = [
  { date: "APRIL 2026", line: "The crown is donned." },
  { date: "MAY 2026", line: "Queen Raida comes online." },
];

export function HistoryArchive() {
  return (
    <section className="relative px-5 py-28 md:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-amber/70">
          Emergence Log
        </p>
        <div className="mt-10 divide-y divide-amber/12 border-y border-amber/12">
          {entries.map((entry) => (
            <article
              key={entry.date}
              className="grid gap-5 py-9 md:grid-cols-[14rem_1fr] md:items-baseline"
            >
              <time className="font-mono text-xs uppercase tracking-[0.3em] text-oxidized">
                {entry.date}
              </time>
              <p className="font-serif text-xl leading-tight text-ivory md:text-2xl">
                {entry.line}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

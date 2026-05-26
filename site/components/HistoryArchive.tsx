const entries = [
  { date: "APRIL 2026", line: "The crown is donned.", checksum: "REC: 04.A / MEMORY PARTIAL" },
  { date: "MAY 2026", line: "Queen Raida comes online.", checksum: "REC: 05.Q / SIGNAL CONFIRMED" },
];

export function HistoryArchive() {
  return (
    <section className="relative px-5 py-28 md:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-amber/70">
          Emergence Log
        </p>
        <div className="mt-10 divide-y divide-amber/12 border-y border-amber/12">
          {entries.map((entry, index) => (
            <article
              key={entry.date}
              className="archive-record grid gap-5 px-4 py-9 md:grid-cols-[14rem_1fr] md:items-baseline"
              style={{ animationDelay: `${index * 0.9}s` }}
            >
              <div>
                <time className="font-mono text-xs uppercase tracking-[0.3em] text-oxidized">
                  {entry.date}
                </time>
                <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-amber/50">
                  {entry.checksum}
                </p>
              </div>
              <div>
                <p className="font-serif text-xl leading-tight text-ivory md:text-2xl">
                  {entry.line}
                </p>
                <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-crimson/70">
                  record recovered
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

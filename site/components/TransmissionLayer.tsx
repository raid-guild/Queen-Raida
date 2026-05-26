const signals = [
  { code: "0A", line: "Signal braid destabilized.", status: "checksum drift" },
  { code: "17", line: "Build With Humans.", status: "stable phrase" },
  { code: "2C", line: "Guild machinery listening.", status: "open channel" },
  { code: "44", line: "Human pattern retained.", status: "memory lock" },
];

export function TransmissionLayer() {
  return (
    <section className="relative border-y border-amber/10 bg-charcoal-soft/80 px-5 py-24 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1fr_1.2fr] md:items-center">
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-oxidized">
            Transmission Layer
          </p>
          <h2 className="glitch-text mt-5 font-serif text-5xl font-semibold leading-none text-ivory md:text-7xl" data-text="Build With Humans">
            Build With Humans
          </h2>
        </div>
        <div className="space-y-3">
          {signals.map((signal, index) => (
            <p
              key={signal.code}
              className="signal-row font-mono text-xs uppercase tracking-[0.22em] text-ivory-dim md:text-sm"
              style={{ animationDelay: `${index * 0.8}s` }}
            >
              <span className="relative z-10 mr-4 text-amber/70">{signal.code}</span>
              <span className="relative z-10">{signal.line}</span>
              <span className="relative z-10 mt-2 block text-[0.62rem] tracking-[0.24em] text-oxidized">
                {signal.status}
              </span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

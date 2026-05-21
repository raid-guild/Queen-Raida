const signals = [
  "Signal braid stabilized.",
  "Chamber pressure: ceremonial.",
  "Guild machinery listening.",
  "Human pattern retained.",
];

export function TransmissionLayer() {
  return (
    <section className="relative border-y border-amber/10 bg-charcoal-soft/80 px-5 py-24 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1fr_1.2fr] md:items-center">
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-oxidized">
            Transmission Layer
          </p>
          <h2 className="mt-5 font-serif text-5xl font-semibold leading-none text-ivory md:text-7xl">
            Build With Humans
          </h2>
        </div>
        <div className="space-y-3">
          {signals.map((signal, index) => (
            <p
              key={signal}
              className="signal-row font-mono text-xs uppercase tracking-[0.22em] text-ivory-dim md:text-sm"
              style={{ animationDelay: `${index * 0.8}s` }}
            >
              <span className="mr-4 text-amber/70">0{index + 1}</span>
              {signal}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

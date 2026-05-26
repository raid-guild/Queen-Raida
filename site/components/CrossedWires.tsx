const routes = [
  {
    node: "A7",
    state: "WIRE ROUTE CONFLICT",
    line: "One signal enters. Three worlds answer.",
  },
  {
    node: "C3",
    state: "PORTAL MISFIRE DETECTED",
    line: "Do not follow the bright cable.",
  },
  {
    node: "F9",
    state: "REALITY BUS REASSIGNED",
    line: "The chamber is routing you somewhere else.",
  },
];

export function CrossedWires() {
  return (
    <section className="crossed-wires relative isolate overflow-hidden border-y border-amber/10 bg-[linear-gradient(180deg,rgba(7,8,7,0.96),rgba(16,16,13,0.82)_48%,rgba(38,60,52,0.22))] px-5 py-24 md:px-10 lg:px-16">
      <div aria-hidden="true" className="wire-map absolute inset-0 opacity-70" />
      <div aria-hidden="true" className="zap-node left-[13%] top-[22%]" />
      <div aria-hidden="true" className="zap-node right-[18%] top-[34%] [animation-delay:1.7s]" />
      <div aria-hidden="true" className="zap-node bottom-[18%] left-[58%] [animation-delay:3.1s]" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-14 md:grid-cols-[0.8fr_1.2fr] md:items-end">
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-crimson">
            Crossed Wires
          </p>
          <h2 className="glitch-text mt-5 font-serif text-5xl font-semibold leading-none text-ivory md:text-7xl" data-text="Wrong Room">
            Wrong Room
          </h2>
          <p className="mt-6 max-w-sm font-mono text-xs uppercase leading-7 tracking-[0.22em] text-ivory-dim">
            The wires were not meant to touch. A chamber is only a room until it starts routing you.
          </p>
        </div>

        <div className="grid gap-3">
          {routes.map((route, index) => (
            <article
              key={route.node}
              className="route-row group"
              style={{ animationDelay: `${index * 0.75}s` }}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-amber/70">
                  NODE {route.node}
                </span>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-oxidized">
                  0x{index + 4}E/{route.node}
                </span>
              </div>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.26em] text-crimson md:text-sm">
                {route.state}
              </p>
              <p className="mt-3 font-serif text-2xl leading-tight text-ivory md:text-3xl">
                {route.line}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

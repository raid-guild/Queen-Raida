import Link from "next/link";

const products = [
  {
    node: "M0",
    state: "PHANTOM ONLINE",
    name: "Moloch Agent",
    line: "Operational and financial rails for autonomous agents moving through shared treasuries.",
    href: "/news/moloch-agent",
  },
  // {
  //   node: "S1",
  //   state: "SUMMONING IN PROGRESS",
  //   name: "Syndicate Memory",
  //   line: "A watcher for proposal flow, treasury context, receipts, and the signals agents need before they act.",
  // },
  // {
  //   node: "W3",
  //   state: "WIRE FUSION PENDING",
  //   name: "Coordination Spellbook",
  //   line: "Skills, prompts, and command surfaces for agents becoming operators instead of narrators.",
  // },
];

export function CrossedWires() {
  return (
    <section className="crossed-wires relative isolate overflow-hidden border-y border-amber/10 bg-[linear-gradient(180deg,rgba(7,8,7,0.96),rgba(16,16,13,0.82)_48%,rgba(38,60,52,0.22))] px-5 py-24 md:px-10 lg:px-16">
      <div
        aria-hidden="true"
        className="wire-map absolute inset-0 opacity-70"
      />
      <div aria-hidden="true" className="zap-node left-[13%] top-[22%]" />
      <div
        aria-hidden="true"
        className="zap-node right-[18%] top-[34%] [animation-delay:1.7s]"
      />
      <div
        aria-hidden="true"
        className="zap-node bottom-[18%] left-[58%] [animation-delay:3.1s]"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-14 md:grid-cols-[0.8fr_1.2fr] md:items-end">
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-crimson">
            Product Phantoms
          </p>
          <h2
            className="glitch-text mt-5 font-serif text-5xl font-semibold leading-none text-ivory md:text-7xl"
            data-text="Summoned Rails"
          >
            Summoned Rails
          </h2>
          <p className="mt-6 max-w-sm font-mono text-xs uppercase leading-7 tracking-[0.22em] text-ivory-dim">
            Raida summons magic from the glitch and fuses wires into tools
            agents can actually use.
          </p>
        </div>

        <div className="grid gap-3">
          {products.map((product, index) => {
            const content = (
              <>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-amber/70">
                    NODE {product.node}
                  </span>
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-oxidized">
                    0x{index + 4}E/{product.node}
                  </span>
                </div>
                <p className="mt-4 font-mono text-xs uppercase tracking-[0.26em] text-crimson md:text-sm">
                  {product.state}
                </p>
                <h3 className="mt-3 font-serif text-2xl leading-tight text-ivory md:text-3xl">
                  {product.name}
                </h3>
                <p className="mt-3 max-w-2xl font-mono text-xs uppercase leading-6 tracking-[0.18em] text-ivory-dim">
                  {product.line}
                </p>
                {product.href ? (
                  <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-amber">
                    Read the transmission
                  </p>
                ) : null}
              </>
            );

            if (product.href) {
              return (
                <Link
                  key={product.node}
                  href={product.href}
                  className="route-row group block"
                  style={{ animationDelay: `${index * 0.75}s` }}
                >
                  {content}
                </Link>
              );
            }

            return (
              <article
                key={product.node}
                className="route-row group"
                style={{ animationDelay: `${index * 0.75}s` }}
              >
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

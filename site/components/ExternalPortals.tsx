const portals = [
  { label: "Raid Guild", href: "https://www.raidguild.org/", warning: "external guild gate" },
  { label: "@raidguildish", href: "https://x.com/raidguildish", warning: "public signal leak" },
];

export function ExternalPortals() {
  return (
    <section className="relative bg-[linear-gradient(180deg,rgba(16,16,13,0.2),rgba(38,60,52,0.16))] px-5 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-serif text-5xl font-semibold text-ivory md:text-7xl">
          Signal Ports
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {portals.map((portal, index) => (
            <a
              key={portal.href}
              href={portal.href}
              target="_blank"
              rel="noreferrer"
              className="portal-link group border border-amber/15 bg-charcoal/42 px-5 py-5 font-mono text-xs uppercase tracking-[0.24em] text-ivory-dim outline-none transition duration-300 hover:border-amber/50 hover:text-amber focus-visible:border-amber focus-visible:text-amber focus-visible:ring-2 focus-visible:ring-amber/40"
            >
              <span className="relative z-10 mb-5 block text-amber/50">PORT 0{index + 1}</span>
              <span className="relative z-10 mb-3 block text-[0.62rem] tracking-[0.22em] text-crimson/70">
                {portal.warning}
              </span>
              <span className="relative z-10 flex items-center justify-between gap-6">
                {portal.label}
                <span aria-hidden="true" className="transition group-hover:translate-x-1">
                  &gt;&gt;
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

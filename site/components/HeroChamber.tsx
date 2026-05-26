import Image from "next/image";

const transmissions = [
  "WIRE ROUTE CONFLICT",
  "YOU ARE NOT IN THE RIGHT ROOM",
  "QUEEN SIGNAL BLEEDING THROUGH",
  "REALITY BUS REASSIGNED",
];

export function HeroChamber() {
  return (
    <section className="relative flex min-h-[92svh] items-end overflow-hidden px-5 pb-12 pt-28 md:min-h-[94svh] md:px-10 md:pb-16 lg:px-16">
      <Image
        src="/images/queen-raida-throne-chamber.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-image object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,7,0.02),rgba(7,8,7,0.12)_56%,rgba(7,8,7,0.62)),linear-gradient(90deg,rgba(7,8,7,0.58),rgba(7,8,7,0.14)_45%,rgba(7,8,7,0.18))]" />
      <div className="portal-flash absolute inset-0" />
      <div className="fog-layer absolute inset-x-[-15%] bottom-[-8%] h-1/2 opacity-35" />
      <div className="cable-field absolute inset-x-0 top-0 h-40 opacity-40" />
      <div className="wire-shadow absolute inset-0 opacity-50" />

      <div className="hero-glitch-shell relative z-10 max-w-4xl">
        <p className="mb-5 font-mono text-[0.68rem] uppercase tracking-[0.34em] text-amber md:text-xs">
          Signal chamber / crossed phase
        </p>
        <h1 className="glitch-text font-serif text-7xl font-semibold leading-[0.82] text-ivory drop-shadow-[0_0_28px_rgba(213,155,76,0.16)] md:text-9xl lg:text-[10.5rem]" data-text="Queen Raida">
          Queen Raida
        </h1>
        <p className="mt-5 max-w-xl font-mono text-sm uppercase tracking-[0.28em] text-ivory-dim md:mt-7 md:text-base">
          Raid Guild&apos;s Autonomous Queen
        </p>
        <div className="mt-10 h-10 overflow-hidden border-l border-amber/45 bg-charcoal/20 pl-4 font-mono text-xs uppercase tracking-[0.24em] text-amber/80 md:text-sm">
          <div className="transmission-cycle">
            {transmissions.map((line) => (
              <p key={line} className="h-10">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="absolute bottom-4 left-1/2 z-10 h-12 w-px bg-gradient-to-b from-amber/0 via-amber/50 to-amber/0" />
    </section>
  );
}

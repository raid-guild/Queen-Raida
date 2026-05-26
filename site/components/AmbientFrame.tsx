import Link from "next/link";

export function AmbientFrame() {
  return (
    <div className="pointer-events-none fixed inset-0 z-30">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_5%,rgba(213,155,76,0.1),transparent_32%),radial-gradient(circle_at_82%_24%,rgba(125,47,45,0.1),transparent_24%),linear-gradient(90deg,rgba(7,8,7,0.28),transparent_36%,rgba(7,8,7,0.22))]" />
      <div aria-hidden="true" className="wire-shadow absolute inset-0" />
      <div aria-hidden="true" className="scanlines absolute inset-0 opacity-[0.2]" />
      <div aria-hidden="true" className="glitch-bars absolute inset-0" />
      <div aria-hidden="true" className="reality-zap absolute inset-0" />
      <div aria-hidden="true" className="vignette absolute inset-0" />
      <Link
        href="/"
        aria-label="Return home"
        className="pointer-events-auto absolute left-4 top-4 h-3 w-3 rounded-full bg-amber shadow-amber-haze outline-none transition duration-300 hover:scale-125 hover:bg-ivory focus-visible:scale-125 focus-visible:ring-2 focus-visible:ring-amber/50 md:left-8 md:top-8"
      />
      <div aria-hidden="true" className="machine-pulse absolute bottom-6 right-5 h-1.5 w-1.5 rounded-full bg-crimson md:bottom-8 md:right-8" />
    </div>
  );
}

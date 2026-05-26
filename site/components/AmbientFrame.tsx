export function AmbientFrame() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_5%,rgba(213,155,76,0.1),transparent_32%),radial-gradient(circle_at_82%_24%,rgba(125,47,45,0.1),transparent_24%),linear-gradient(90deg,rgba(7,8,7,0.28),transparent_36%,rgba(7,8,7,0.22))]" />
      <div className="wire-shadow absolute inset-0" />
      <div className="scanlines absolute inset-0 opacity-[0.2]" />
      <div className="glitch-bars absolute inset-0" />
      <div className="reality-zap absolute inset-0" />
      <div className="vignette absolute inset-0" />
      <div className="absolute left-4 top-4 h-2 w-2 rounded-full bg-amber shadow-amber-haze md:left-8 md:top-8" />
      <div className="machine-pulse absolute bottom-6 right-5 h-1.5 w-1.5 rounded-full bg-crimson md:bottom-8 md:right-8" />
    </div>
  );
}

interface ParallaxBackgroundProps {
  scrollY: number;
}

export default function ParallaxBackground({ scrollY }: ParallaxBackgroundProps) {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute top-20 -right-20 w-96 h-96 bg-cyan-500 rounded-full opacity-10 blur-3xl"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      <div
        className="absolute top-60 -left-20 w-80 h-80 bg-emerald-500 rounded-full opacity-10 blur-3xl"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />
      <div
        className="absolute bottom-40 right-1/4 w-96 h-96 bg-orange-500 rounded-full opacity-10 blur-3xl"
        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
      />

      <div className="absolute inset-0 grid grid-cols-8 gap-4 opacity-5">
        {Array.from({ length: 64 }).map((_, i) => (
          <div
            key={i}
            className="border border-cyan-500"
            style={{
              transform: `translateY(${(scrollY * (i % 3)) * 0.05}px)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

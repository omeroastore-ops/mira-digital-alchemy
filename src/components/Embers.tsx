import { useMemo } from "react";

export function Embers({ count = 28 }: { count?: number }) {
  const embers = useMemo(() =>
    Array.from({ length: count }).map((_, i) => ({
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 14 + Math.random() * 14,
      drift: (Math.random() - 0.5) * 200,
      size: 1.5 + Math.random() * 3,
      opacity: 0.4 + Math.random() * 0.5,
      key: i,
    })), [count]);
  return (
    <div className="embers">
      {embers.map(e => (
        <span key={e.key} className="ember" style={{
          left: `${e.left}%`,
          animationDelay: `${e.delay}s`,
          animationDuration: `${e.duration}s`,
          width: `${e.size}px`, height: `${e.size}px`,
          opacity: e.opacity,
          // @ts-expect-error css var
          "--drift": `${e.drift}px`,
        }} />
      ))}
    </div>
  );
}

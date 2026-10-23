"use client";

import { useEffect, useState } from "react";

const units = [
  { label: "dias", ms: 86_400_000 },
  { label: "horas", ms: 3_600_000 },
  { label: "min", ms: 60_000 },
];

// Time left until a fixed moment (e.g. Christmas Eve). Renders dashes on the server and fills in
// on the client, so the markup never mismatches during hydration.
export function Countdown({ target, label }: { target: string; label: string }) {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const end = new Date(target).getTime();
    const tick = () => setLeft(Math.max(0, end - Date.now()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, [target]);

  let rest = left ?? 0;
  const parts = units.map((u) => {
    const value = Math.floor(rest / u.ms);
    rest -= value * u.ms;
    return { label: u.label, value };
  });

  return (
    <div className="countdown" role="timer" aria-label={label}>
      {parts.map((p) => (
        <div key={p.label} className="countdown__cell">
          <strong>{left === null ? "--" : String(p.value).padStart(2, "0")}</strong>
          <span>{p.label}</span>
        </div>
      ))}
    </div>
  );
}

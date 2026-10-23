"use client";

import { useEffect, useState } from "react";

// Phone-only bar with the price and the buy button; appears once the hero has scrolled away.
export function BuyBar({ price, note, href, label }: { price: string; note: string; href: string; label: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(scrollY > innerHeight * 0.8);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`buybar${visible ? " is-visible" : ""}`} aria-hidden={!visible}>
      <p>
        <strong>{price}</strong>
        <span>{note}</span>
      </p>
      <a className="btn" href={href} tabIndex={visible ? 0 : -1}>
        {label}
      </a>
    </div>
  );
}

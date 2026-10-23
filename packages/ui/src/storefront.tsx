import type { ReactNode } from "react";
import { Credits, type ImageCredit } from "./credits";
import { Icon } from "./icons";

export type NavLink = { href: string; label: string };

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
export const money = (value: number) => brl.format(value);

export function AnnouncementBar({ children }: { children: ReactNode }) {
  return <p className="announce">{children}</p>;
}

export function SiteHeader({ links, cta }: { links: NavLink[]; cta: NavLink }) {
  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <a className="site-header__brand" href="#" translate="no">
          Ponteira<span>.</span>
        </a>
        <nav className="site-header__nav" aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="btn" href={cta.href}>
          {cta.label}
        </a>
      </div>
    </header>
  );
}

export type TrustItem = { icon: string; title: string; text: string };

export function TrustBar({ items }: { items: TrustItem[] }) {
  return (
    <section className="trust" aria-label="Condições de compra">
      <ul className="wrap trust__list">
        {items.map((item) => (
          <li key={item.title} className="trust__item">
            <span className="trust__icon">
              <Icon name={item.icon} />
            </span>
            <p>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <details key={item.q} open={i === 0}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export type FooterColumn = { title: string; links: NavLink[] };

export function SiteFooter({ tagline, columns, credits }: { tagline: string; columns: FooterColumn[]; credits: ImageCredit[] }) {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__top">
        <div>
          <p className="site-footer__brand" translate="no">
            Ponteira
          </p>
          <p>{tagline}</p>
        </div>
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2>{col.title}</h2>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="wrap site-footer__bottom">
        <p>© 2026 Ponteira. Preços e condições válidos para compras online.</p>
        <Credits className="credits" items={credits} />
      </div>
    </footer>
  );
}

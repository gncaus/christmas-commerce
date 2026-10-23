"use client";

import { Icon, money } from "@repo/ui";
import Image from "next/image";
import { useState } from "react";
import { contents, defaultSize, gallery, installment, pix, sizes } from "../content";

// Product detail: gallery on the left, sticky purchase card on the right (Airbnb reservation-card pattern).
export function Buy() {
  const [sizeId, setSizeId] = useState(defaultSize);
  const [shot, setShot] = useState(0);
  const size = sizes.find((s) => s.id === sizeId) ?? sizes[2];
  const saving = size.separate - size.price;

  return (
    <section id="comprar" className="section section--linho">
      <div className="wrap buy">
        <div className="buy__gallery">
          <div className="photo buy__main">
            <Image
              key={gallery[shot].src}
              src={gallery[shot].src}
              width={gallery[shot].w}
              height={gallery[shot].h}
              alt={gallery[shot].alt}
              sizes="(min-width: 1000px) 55vw, 100vw"
            />
          </div>
          <div className="buy__thumbs" role="group" aria-label="Fotos do kit">
            {gallery.map((g, i) => (
              <button
                key={g.src}
                type="button"
                className={`photo buy__thumb${i === shot ? " is-active" : ""}`}
                aria-label={`Ver foto ${i + 1} de ${gallery.length}`}
                aria-pressed={i === shot}
                onClick={() => setShot(i)}
              >
                <Image src={g.src} width={g.w} height={g.h} alt="" sizes="120px" />
              </button>
            ))}
          </div>
        </div>

        <div className="buy__card">
          <h2 className="buy__title">Kit Árvore Completa</h2>
          <p className="muted">Árvore, pisca-pisca, bolas, laços, pinhas e estrela de ponta.</p>

          <fieldset className="buy__sizes">
            <legend>Escolha a altura</legend>
            {sizes.map((s) => (
              <label key={s.id} className={`buy__size${s.id === sizeId ? " is-active" : ""}`}>
                <input type="radio" name="altura" value={s.id} checked={s.id === sizeId} onChange={() => setSizeId(s.id)} />
                <strong>{s.label}</strong>
                <span>{s.hint}</span>
              </label>
            ))}
          </fieldset>

          <div className="buy__price" aria-live="polite">
            <p className="buy__now num">{money(size.price)}</p>
            <p className="num">
              10x de {installment(size.price)} sem juros ou <strong>{pix(size.price)} no Pix</strong>
            </p>
            <p className="buy__save num">
              Separado sairia {money(size.separate)}. Você economiza {money(saving)}.
            </p>
          </div>

          <a className="btn btn--block" href={`#checkout?kit=arvore-${size.id}`}>
            Comprar kit de {size.label}
          </a>

          <ul className="buy__perks">
            <li>
              <Icon name="clock" /> Pedidos até 15/12 chegam antes do Natal
            </li>
            <li>
              <Icon name="shield" /> Compra segura e troca grátis em 30 dias
            </li>
          </ul>

          <details className="buy__contents" open>
            <summary>O que vem no kit de {size.label}</summary>
            <ul>
              {contents.map((row) => (
                <li key={row.item}>
                  <span>{row.item}</span>
                  <span className="num">{row.qty(size)}</span>
                </li>
              ))}
              <li>
                <span>Diâmetro da base da árvore</span>
                <span className="num">{size.base}</span>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </section>
  );
}

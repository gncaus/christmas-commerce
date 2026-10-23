"use client";

import { Icon, money } from "@repo/ui";
import Image from "next/image";
import { useState } from "react";
import hat from "../../public/img/santa-hat.jpg";
import { maxLetters, tiers, unitPrice } from "../content";

const clampQty = (n: number) => Math.min(500, Math.max(1, Math.round(Number.isFinite(n) ? n : 1)));
const cleanName = (s: string) => s.toLocaleUpperCase("pt-BR").replace(/[^A-ZÀ-Ý0-9 ]/g, "").slice(0, maxLetters);
const colours = [
  { id: "vermelha", label: "Linha vermelha", hex: "#8c1c2b" },
  { id: "dourada", label: "Linha dourada", hex: "#a8772c" },
];

// The order builder: type a name to preview the embroidery, choose the thread and quantity, and see
// the tier price. Plain GET form, so it still submits without JavaScript.
export function Customize() {
  const [name, setName] = useState("MARIANA");
  const [colour, setColour] = useState(colours[0].id);
  const [qty, setQty] = useState(10);
  const unit = unitPrice(qty);
  const full = tiers[0].unit * qty;
  const total = unit * qty;
  const thread = colours.find((c) => c.id === colour)!.hex;

  return (
    <section id="personalizar" className="section section--linho">
      <div className="wrap custom">
        <div className="custom__preview" data-reveal>
          <div className="photo custom__photo">
            <Image src={hat} alt="Gorro de Papai Noel vermelho com barra branca" placeholder="blur" sizes="(min-width: 1000px) 45vw, 100vw" />
          </div>
          <div className="custom__band" aria-live="polite">
            <span style={{ color: thread }}>{name.trim() || "SEU NOME"}</span>
          </div>
          <p className="muted custom__caption">Prévia do bordado na barra branca do gorro.</p>
        </div>

        <form className="custom__form" action="#checkout" method="get">
          <h2 className="h-section">Monte o pedido da equipe</h2>
          <p className="lead">Digite um nome para ver a prévia. Depois do pagamento você manda a lista completa.</p>

          <label className="field">
            <span>Nome no bordado</span>
            <input
              name="nome"
              value={name}
              maxLength={maxLetters}
              autoComplete="off"
              spellCheck={false}
              onChange={(e) => setName(cleanName(e.target.value))}
            />
            <small className="muted">
              {name.length} de {maxLetters} letras
            </small>
          </label>

          <fieldset className="field">
            <legend>Cor da linha</legend>
            <div className="custom__colours">
              {colours.map((c) => (
                <label key={c.id} className={`custom__colour${c.id === colour ? " is-active" : ""}`}>
                  <input type="radio" name="linha" value={c.id} checked={c.id === colour} onChange={() => setColour(c.id)} />
                  <span className="custom__swatch" style={{ background: c.hex }} />
                  {c.label}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="field">
            <label htmlFor="qtd">Quantidade de gorros</label>
            <div className="stepper">
              <button type="button" aria-label="Diminuir quantidade" onClick={() => setQty((q) => clampQty(q - 1))}>
                −
              </button>
              <input id="qtd" name="qtd" type="number" inputMode="numeric" min={1} max={500} value={qty} onChange={(e) => setQty(clampQty(e.target.valueAsNumber))} />
              <button type="button" aria-label="Aumentar quantidade" onClick={() => setQty((q) => clampQty(q + 1))}>
                +
              </button>
            </div>
          </div>

          <ul className="tiers" aria-label="Preço por quantidade">
            {tiers.map((t) => (
              <li key={t.min} className={unit === t.unit ? "is-current" : undefined}>
                <span>{t.label}</span>
                <strong className="num">{money(t.unit)} cada</strong>
              </li>
            ))}
          </ul>

          <div className="custom__total" aria-live="polite">
            <p>
              <span className="muted">Total</span>
              <strong className="num">{money(total)}</strong>
            </p>
            {full > total && <p className="custom__save num">Você economiza {money(full - total)} com o desconto por quantidade.</p>}
          </div>

          <button className="btn btn--block" type="submit">
            Fazer pedido de {qty} {qty === 1 ? "gorro" : "gorros"}
          </button>
          <p className="custom__secure muted">
            <Icon name="shield" /> Pagamento seguro · 5% off no Pix · até 6x sem juros
          </p>
        </form>
      </div>
    </section>
  );
}

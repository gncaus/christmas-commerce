import { money } from "@repo/ui";
import Image from "next/image";
import { products } from "../content";

export function Products() {
  return (
    <section id="produtos" className="section">
      <div className="wrap">
        <div className="section-head section-head--center">
          <h2 className="h-section" data-reveal>
            Escolha o visual da festa
          </h2>
          <p className="lead" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
            Do gorro clássico à meia com nome, tudo combina entre si para a foto do grupo ficar bonita.
          </p>
        </div>
        <ul className="products">
          {products.map((p, i) => (
            <li key={p.id} className="card product" data-reveal style={{ "--i": i % 3 } as React.CSSProperties}>
              <div className="photo">
                <Image src={p.img} width={p.w} height={p.h} alt={p.alt} sizes="(min-width: 1000px) 30vw, (min-width: 640px) 45vw, 100vw" />
                <span className="chip product__tag">{p.tag}</span>
              </div>
              <div className="product__body">
                <div>
                  <h3>{p.name}</h3>
                  <p>{p.text}</p>
                </div>
                <div className="product__buy">
                  <strong className="num">{money(p.price)}</strong>
                  <a className="btn btn--ghost" href={p.id === "bordado" ? "#personalizar" : `#checkout?produto=${p.id}`}>
                    {p.id === "bordado" ? "Personalizar" : "Adicionar"}
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

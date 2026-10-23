import Image from "next/image";
import { boxItems } from "../content";

export function Box() {
  return (
    <section id="kit" className="section">
      <div className="wrap">
        <div className="section-head section-head--center">
          <h2 className="h-section" data-reveal>
            O que vem na caixa
          </h2>
          <p className="lead" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
            Tudo pensado para combinar: verde, vermelho, dourado e branco quente. Nada de comprar peça por peça.
          </p>
        </div>
        <ul className="box">
          {boxItems.map((item, i) => (
            <li key={item.name} className="card" data-reveal style={{ "--i": i } as React.CSSProperties}>
              <div className="photo">
                <Image src={item.img} width={item.w} height={item.h} alt={item.alt} sizes="(min-width: 1100px) 20vw, (min-width: 700px) 33vw, 50vw" />
              </div>
              <div>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

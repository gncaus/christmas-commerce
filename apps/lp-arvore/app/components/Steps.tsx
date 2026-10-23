import Image from "next/image";
import { steps } from "../content";

export function Steps() {
  return (
    <section id="montagem" className="section">
      <div className="wrap">
        <div className="section-head">
          <h2 className="h-section" data-reveal>
            Monta em 15 minutos
          </h2>
          <p className="lead" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
            Sem ferramenta e sem manual de 20 páginas. Cada parte tem o seu lugar.
          </p>
        </div>
        <ol className="steps">
          {steps.map((step, i) => (
            <li key={step.title} className="card" data-reveal style={{ "--i": i } as React.CSSProperties}>
              <div className="photo">
                <Image src={step.img} width={step.w} height={step.h} alt={step.alt} sizes="(min-width: 900px) 33vw, 100vw" />
                <span className="steps__n">{i + 1}</span>
              </div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import Image from "next/image";
import { inspiration } from "../content";

export function Inspiration() {
  return (
    <section className="section section--linho">
      <div className="wrap">
        <div className="section-head section-head--center">
          <h2 className="h-section" data-reveal>
            A casa pronta para a ceia
          </h2>
          <p className="lead" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
            Ideias para levar o clima da árvore para a mesa, a estante e os presentes.
          </p>
        </div>
        <div className="mosaic">
          {inspiration.map((p, i) => (
            <div key={p.src} className={`photo mosaic__item mosaic__item--${i + 1}`} data-reveal style={{ "--i": i } as React.CSSProperties}>
              <Image src={p.src} width={p.w} height={p.h} alt={p.alt} sizes="(min-width: 900px) 40vw, 50vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

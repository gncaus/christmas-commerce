import { Countdown } from "@repo/ui";
import Image from "next/image";
import piano from "../../public/img/christmas-piano-unsplash.jpg";

export function Final() {
  return (
    <section className="final">
      <Image className="final__bg" src={piano} alt="" placeholder="blur" sizes="100vw" />
      <div className="wrap">
        <div className="final__inner">
          <h2 className="h-section" data-reveal>
            Falta pouco para a noite de Natal
          </h2>
          <Countdown target="2026-12-24T20:00:00-03:00" label="Tempo até a noite de Natal" />
          <p className="lead">Pedidos feitos até 15 de dezembro chegam antes da ceia. Escolha a altura e deixe o resto com a gente.</p>
          <a className="btn btn--light" href="#comprar">
            Escolher meu kit
          </a>
        </div>
      </div>
    </section>
  );
}

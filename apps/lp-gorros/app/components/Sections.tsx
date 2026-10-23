import { Countdown, FaqList, Icon } from "@repo/ui";
import Image from "next/image";
import people from "../../public/img/christmas-people.jpg";
import home from "../../public/img/home-at-winter-unsplash.jpg";
import { companyPerks, questions, steps } from "../content";

export function HowItWorks() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head section-head--center">
          <h2 className="h-section" data-reveal>
            Como funciona
          </h2>
        </div>
        <ol className="how">
          {steps.map((s, i) => (
            <li key={s.title} data-reveal style={{ "--i": i } as React.CSSProperties}>
              <span className="how__icon">
                <Icon name={s.icon} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Companies() {
  return (
    <section id="empresas" className="company">
      <div className="wrap company__grid">
        <div className="company__text">
          <h2 className="h-section" data-reveal>
            Para a confraternização da empresa
          </h2>
          <p className="lead" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
            Um gorro com o nome de cada pessoa deixa a foto da equipe muito mais divertida. A gente cuida da lista, do bordado e da entrega.
          </p>
          <ul className="company__perks">
            {companyPerks.map((p) => (
              <li key={p}>
                <Icon name="check" /> {p}
              </li>
            ))}
          </ul>
          <a className="btn btn--light" href="#checkout">
            Pedir orçamento para empresa
          </a>
        </div>
        <div className="photo company__photo" data-reveal>
          <Image src={people} alt="Grupo de amigos de gorro de Papai Noel trocando presentes perto da árvore" placeholder="blur" sizes="(min-width: 1000px) 45vw, 100vw" />
        </div>
      </div>
    </section>
  );
}

export function Help() {
  return (
    <section id="duvidas" className="section">
      <div className="wrap help">
        <div className="help__intro">
          <h2 className="h-section" data-reveal>
            Perguntas frequentes
          </h2>
          <p className="lead" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
            Respondemos pelo WhatsApp de segunda a sábado, das 9h às 20h, até a véspera de Natal.
          </p>
          <a className="btn btn--ghost" href="#checkout">
            <Icon name="chat" /> Falar no WhatsApp
          </a>
        </div>
        <FaqList items={questions} />
      </div>
    </section>
  );
}

export function Final() {
  return (
    <section className="final">
      <Image className="final__bg" src={home} alt="" placeholder="blur" sizes="100vw" />
      <div className="wrap">
        <div className="final__inner">
          <h2 className="h-section" data-reveal>
            Bordado garantido para a festa
          </h2>
          <Countdown target="2026-12-10T23:59:00-03:00" label="Tempo para pedir com bordado e receber até 20 de dezembro" />
          <p className="lead">Pedidos com bordado até 10 de dezembro chegam até o dia 20 no Sul e Sudeste.</p>
          <a className="btn btn--light" href="#personalizar">
            Personalizar gorros
          </a>
        </div>
      </div>
    </section>
  );
}

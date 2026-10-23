import { Icon } from "@repo/ui";
import Image from "next/image";
import parade from "../../public/img/santa-hat-parade-dorchester-christmas-cracker-2022.jpg";
import puppy from "../../public/img/free-puppy-wearing-santa-hat.webp";

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero__grid">
        <div className="hero__text">
          <span className="chip chip--gold" data-reveal>
            <Icon name="needle" /> Bordado com nome incluso
          </span>
          <h1 className="h-display" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
            Gorros com o nome de cada um
          </h1>
          <p className="lead" data-reveal style={{ "--i": 2 } as React.CSSProperties}>
            Gorros, tiaras e meias de Natal para a festa da firma, da escola e da família. Bordamos o nome em 48 horas e entregamos em
            todo o Brasil.
          </p>
          <div className="hero__price" data-reveal style={{ "--i": 3 } as React.CSSProperties}>
            <p>
              <span className="muted">A partir de</span>
              <strong className="num">R$ 19,90</strong>
            </p>
            <p className="muted num">Gorro bordado R$ 29,90 · R$ 21,90 cada a partir de 50 unidades</p>
          </div>
          <div className="hero__actions" data-reveal style={{ "--i": 4 } as React.CSSProperties}>
            <a className="btn" href="#personalizar">
              Personalizar gorros
            </a>
            <a className="btn btn--ghost" href="#produtos">
              Ver produtos
            </a>
          </div>
          <ul className="hero__checks">
            <li>
              <Icon name="check" /> Linha vermelha ou dourada
            </li>
            <li>
              <Icon name="check" /> Nota fiscal para CNPJ
            </li>
            <li>
              <Icon name="check" /> Pronto em 48 h
            </li>
          </ul>
        </div>

        <div className="hero__media">
          <div className="photo hero__main">
            <Image src={parade} alt="Grupo de pessoas sorrindo de gorro de Papai Noel numa rua enfeitada" priority placeholder="blur" sizes="(min-width: 1000px) 46vw, 100vw" />
          </div>
          <div className="photo hero__small">
            <Image src={puppy} alt="Filhote usando gorro de Papai Noel" placeholder="blur" sizes="200px" />
          </div>
          <div className="hero__note">
            <span className="hero__stitch" translate="no">
              MARIANA
            </span>
            <p>
              <strong>Nome bordado na barra</strong>
              <span>Até 12 letras por gorro</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

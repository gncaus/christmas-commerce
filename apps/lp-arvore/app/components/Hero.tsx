import { Icon, money } from "@repo/ui";
import Image from "next/image";
import morning from "../../public/img/christmas-morning-unsplash.jpg";
import star from "../../public/img/christmas-star-unsplash.jpg";
import { installment, pix, sizes } from "../content";

const from = sizes[0].price;

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero__grid">
        <div className="hero__text">
          <span className="chip chip--gold" data-reveal>
            <Icon name="spark" /> Edição Natal 2026
          </span>
          <h1 className="h-display" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
            O Natal inteiro numa caixa só
          </h1>
          <p className="lead" data-reveal style={{ "--i": 2 } as React.CSSProperties}>
            Árvore, pisca-pisca de LED e enfeites que combinam entre si, escolhidos para você montar tudo em 15 minutos. É só
            abrir, encaixar e acender.
          </p>
          <div className="hero__price" data-reveal style={{ "--i": 3 } as React.CSSProperties}>
            <p>
              <span className="muted">A partir de</span>
              <strong className="num">{money(from)}</strong>
            </p>
            <p className="muted num">
              ou 10x de {installment(from)} sem juros · {pix(from)} no Pix
            </p>
          </div>
          <div className="hero__actions" data-reveal style={{ "--i": 4 } as React.CSSProperties}>
            <a className="btn" href="#comprar">
              Escolher meu kit
            </a>
            <a className="btn btn--ghost" href="#kit">
              Ver o que vem na caixa
            </a>
          </div>
          <ul className="hero__checks">
            <li>
              <Icon name="check" /> 4 alturas, de 1,20 a 2,10 m
            </li>
            <li>
              <Icon name="check" /> Pisca-pisca bivolt com 8 funções
            </li>
            <li>
              <Icon name="check" /> Troca grátis em 30 dias
            </li>
          </ul>
        </div>

        <div className="hero__media">
          <div className="photo hero__main">
            <Image src={morning} alt="Presentes embrulhados embaixo de uma árvore de Natal decorada" priority placeholder="blur" sizes="(min-width: 1000px) 46vw, 100vw" />
          </div>
          <div className="photo hero__small">
            <Image src={star} alt="Estrela dourada no topo de uma árvore iluminada" placeholder="blur" sizes="200px" />
          </div>
          <div className="hero__note">
            <Icon name="clock" />
            <p>
              <strong>Chega antes do Natal</strong>
              <span>Pedidos até 15 de dezembro</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

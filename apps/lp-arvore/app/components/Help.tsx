import { FaqList, Icon } from "@repo/ui";
import { questions } from "../content";

const promises = [
  { icon: "refresh", text: "Troca grátis em até 30 dias" },
  { icon: "shield", text: "Garantia de 1 ano no pisca-pisca" },
  { icon: "receipt", text: "Nota fiscal em todos os pedidos" },
];

export function Help() {
  return (
    <section id="duvidas" className="section">
      <div className="wrap help">
        <div className="help__intro">
          <h2 className="h-section" data-reveal>
            Ficou alguma dúvida?
          </h2>
          <p className="lead" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
            Respondemos pelo WhatsApp de segunda a sábado, das 9h às 20h, até a véspera de Natal.
          </p>
          <ul className="help__promises">
            {promises.map((p) => (
              <li key={p.text}>
                <Icon name={p.icon} /> {p.text}
              </li>
            ))}
          </ul>
          <a className="btn btn--ghost" href="#checkout">
            <Icon name="chat" /> Falar no WhatsApp
          </a>
        </div>
        <FaqList items={questions} />
      </div>
    </section>
  );
}

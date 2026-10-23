// Page content. Sizes, quantities, prices and dates are sample data to be confirmed before launch.
import { money, type TrustItem } from "@repo/ui";

export type Size = {
  id: string;
  label: string;
  hint: string;
  base: string;
  price: number;
  separate: number;
  branches: number;
  leds: number;
  wire: string;
  balls: number;
  bows: number;
  cones: number;
  star: string;
};

export const sizes: Size[] = [
  { id: "120", label: "1,20 m", hint: "Mesa, aparador ou canto pequeno", base: "60 cm", price: 389, separate: 520, branches: 220, leds: 100, wire: "5 m", balls: 24, bows: 6, cones: 6, star: "15 cm" },
  { id: "150", label: "1,50 m", hint: "Sala de apartamento", base: "80 cm", price: 489, separate: 659, branches: 380, leds: 200, wire: "10 m", balls: 36, bows: 8, cones: 8, star: "20 cm" },
  { id: "180", label: "1,80 m", hint: "Sala de estar", base: "100 cm", price: 619, separate: 839, branches: 580, leds: 300, wire: "15 m", balls: 48, bows: 10, cones: 10, star: "20 cm" },
  { id: "210", label: "2,10 m", hint: "Pé-direito alto", base: "115 cm", price: 789, separate: 1069, branches: 820, leds: 400, wire: "20 m", balls: 64, bows: 12, cones: 12, star: "25 cm" },
];
export const defaultSize = "180";

export const pix = (value: number) => money(Math.round(value * 0.95 * 100) / 100);
export const installment = (value: number) => money(Math.round((value / 10) * 100) / 100);

export const contents: { item: string; qty: (s: Size) => string }[] = [
  { item: "Árvore com base de metal", qty: (s) => `${s.branches} galhos` },
  { item: "Pisca-pisca LED bivolt, 8 funções", qty: (s) => `${s.leds} LEDs · ${s.wire}` },
  { item: "Bolas inquebráveis de 6 e 8 cm", qty: (s) => `${s.balls} un.` },
  { item: "Laços de veludo", qty: (s) => `${s.bows} un.` },
  { item: "Pinhas naturais", qty: (s) => `${s.cones} un.` },
  { item: "Estrela de ponta", qty: (s) => s.star },
];

export const trust: TrustItem[] = [
  { icon: "truck", title: "Frete grátis", text: "Sul e Sudeste" },
  { icon: "card", title: "Até 10x sem juros", text: "No cartão de crédito" },
  { icon: "pix", title: "5% off no Pix", text: "Aprovação na hora" },
  { icon: "refresh", title: "Troca grátis", text: "Em até 30 dias" },
];

export const boxItems = [
  { name: "Árvore", text: "Pinheiro de pontas nevadas e base de metal dobrável. Galhos que abrem sozinhos.", img: "/img/christmas-tree-unsplash.jpg", w: 1920, h: 1280, alt: "Galhos de pinheiro com luzes acesas" },
  { name: "Pisca-pisca", text: "LED branco quente com 8 funções e controle. Funciona em 127 e 220 V.", img: "/img/christmas-lights-and-lamps-unsplash.jpg", w: 1920, h: 1282, alt: "Luzes de Natal amarelas acesas à noite" },
  { name: "Bolas", text: "Inquebráveis, de 6 e 8 cm, em vermelho, dourado e branco.", img: "/img/joanna-kosinska-2016-11-29-unsplash.jpg", w: 1920, h: 1282, alt: "Bolas de Natal prateadas, pinhas e estrelas sobre fundo escuro" },
  { name: "Laços e pinhas", text: "Laços de veludo e pinhas naturais, já com presilha ou gancho.", img: "/img/christmas-ornaments-on-tree-unsplash.jpg", w: 1920, h: 1280, alt: "Pinhas e enfeites prateados presos nos galhos de uma árvore" },
  { name: "Estrela de ponta", text: "Dourada, com encaixe de mola. É ela que fecha a árvore.", img: "/img/christmas-star-unsplash.jpg", w: 1920, h: 2557, alt: "Estrela dourada no alto de uma árvore com luzes vermelhas ao fundo" },
];

export const gallery = [
  { src: "/img/festive-christmas-tree-unsplash.jpg", w: 1920, h: 1220, alt: "Árvore de Natal montada com festão dourado e enfeites" },
  { src: "/img/red-and-gold-ornaments-on-christmas-tree.jpg", w: 1920, h: 1080, alt: "Bolas vermelhas e douradas penduradas na árvore" },
  { src: "/img/christmas-morning-unsplash.jpg", w: 1920, h: 2394, alt: "Presentes embrulhados embaixo da árvore, vistos de cima" },
  { src: "/img/twinkly-lights-at-twilight-unsplash.jpg", w: 1920, h: 1280, alt: "Fio de luzes acesas ao entardecer" },
];

export const steps = [
  { title: "Encaixe", text: "A árvore vem em três partes. Encaixe na base e abra os galhos de baixo para cima.", img: "/img/joanna-kosinska-2015-12-18-unsplash.jpg", w: 1920, h: 1282, alt: "Galhos de pinheiro com pinhas e bolas prateadas" },
  { title: "Acenda", text: "Enrole o pisca-pisca a partir da base e escolha uma das 8 funções no controle.", img: "/img/twinkly-lights-at-twilight-unsplash.jpg", w: 1920, h: 1280, alt: "Luzes acesas presas numa grade ao anoitecer" },
  { title: "Decore", text: "Bolas grandes por dentro, pequenas nas pontas, laços nos vãos e a estrela no topo.", img: "/img/christmas-ornament-unsplash.jpg", w: 1920, h: 1281, alt: "Sino decorado pendurado num galho com luzes desfocadas" },
];

export const inspiration = [
  { src: "/img/coffee-at-christmas-unsplash.jpg", w: 1920, h: 1280, alt: "Xícara de café numa mesa com a árvore iluminada ao fundo" },
  { src: "/img/home-at-winter-unsplash.jpg", w: 1920, h: 1280, alt: "Velas acesas e uma casinha de cerâmica sobre a mesa" },
  { src: "/img/holiday-paper-gift-wrapping-unsplash.jpg", w: 1920, h: 1280, alt: "Presentes em papel kraft com barbante vermelho e ramos de pinheiro" },
  { src: "/img/aaron-burden-2016-11-11-unsplash.jpg", w: 1920, h: 1440, alt: "Biscoito de gengibre pendurado na árvore com luzes desfocadas" },
];

export const questions = [
  { q: "Até quando posso pedir para receber antes do Natal?", a: "Pedidos feitos até 15 de dezembro chegam antes do dia 24 em todas as capitais. Para o interior, recomendamos pedir até 10 de dezembro." },
  { q: "O pisca-pisca é bivolt?", a: "Sim. A fonte funciona em 127 V e 220 V sem chave, com plugue no padrão brasileiro." },
  { q: "A árvore solta folhas?", a: "Não. As pontas são de PVC presas no arame de cada galho e o efeito nevado é aplicado a quente." },
  { q: "Como guardo depois do Natal?", a: "Os galhos dobram para cima e as três partes voltam para a mesma caixa, que tem alças." },
  { q: "Dá para comprar os itens separados?", a: "Sim, todos são vendidos avulsos na loja. O kit sai bem mais em conta do que a soma das peças." },
  { q: "E se eu precisar trocar?", a: "A troca é grátis em até 30 dias, com a caixa original. O pisca-pisca tem garantia de 1 ano." },
];

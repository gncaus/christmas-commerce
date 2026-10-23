// Page content. Prices, tiers and dates are sample data to be confirmed before launch.
import type { TrustItem } from "@repo/ui";

export const trust: TrustItem[] = [
  { icon: "needle", title: "Bordado em 48 h", text: "Após o pagamento" },
  { icon: "truck", title: "Frete grátis", text: "Acima de R$ 299" },
  { icon: "receipt", title: "Nota para CNPJ", text: "Boleto a partir de 50 un." },
  { icon: "pix", title: "5% off no Pix", text: "Aprovação na hora" },
];

export const products = [
  { id: "classico", name: "Gorro clássico", price: 19.9, tag: "Adulto e infantil", text: "Pelúcia vermelha com barra e pompom brancos. Elástico interno, tamanho único.", img: "/img/santa-hat.jpg", w: 1024, h: 683, alt: "Pessoa de costas usando um gorro de Papai Noel vermelho com pompom branco" },
  { id: "bordado", name: "Gorro bordado com nome", price: 29.9, tag: "Bordado incluso", text: "O clássico com até 12 letras bordadas na barra, em linha vermelha ou dourada.", img: "/img/christmas-people-2.jpg", w: 960, h: 1440, alt: "Amigos de gorro de Papai Noel trocando presentes perto da árvore" },
  { id: "tiara", name: "Tiara de rena", price: 14.9, tag: "Ajustável", text: "Galhada de pelúcia com laço vermelho. Leve para usar a festa inteira.", img: "/img/dog-with-santa-claus-hat-50715296458.jpg", w: 1920, h: 1554, alt: "Cachorro usando uma tiara de chifres de rena com laço vermelho" },
  { id: "pet", name: "Gorro pet", price: 24.9, tag: "Cães e gatos", text: "Gorro pequeno com elástico macio no queixo. Para o pet sair na foto da família.", img: "/img/free-puppy-wearing-santa-hat.webp", w: 1024, h: 683, alt: "Filhote branco deitado usando um gorro de Papai Noel" },
  { id: "meia", name: "Meia de lareira bordada", price: 34.9, tag: "Nome bordado", text: "Feltro vermelho de 45 cm com punho branco e o nome de quem vai ganhar.", img: "/img/stockings-hung-by-the-fireplace-with-care.jpg", w: 1920, h: 1440, alt: "Meias de Natal vermelhas com nomes, penduradas na lareira" },
  { id: "kit", name: "Kit festa da firma", price: 349, tag: "10 gorros + 10 tiaras", text: "Gorros bordados e tiaras de rena para dez pessoas, embalados juntos.", img: "/img/holiday-paper-gift-wrapping-unsplash.jpg", w: 1920, h: 1280, alt: "Caixas de presente embrulhadas em papel kraft com barbante vermelho" },
];

// Embroidered hat, price per unit by quantity.
export const tiers = [
  { min: 1, unit: 29.9, label: "1 a 9 unidades" },
  { min: 10, unit: 25.9, label: "10 a 49 unidades" },
  { min: 50, unit: 21.9, label: "50 ou mais" },
];
export const unitPrice = (qty: number) => [...tiers].reverse().find((t) => qty >= t.min)!.unit;
export const maxLetters = 12;

export const steps = [
  { icon: "gift", title: "Escolha os produtos", text: "Gorros, tiaras e meias, na quantidade da sua equipe ou da família." },
  { icon: "needle", title: "Mande os nomes", text: "Até 12 letras por peça. Para muitos nomes, aceitamos planilha." },
  { icon: "truck", title: "Receba bordado", text: "Bordamos em até 48 h úteis e enviamos para todo o Brasil." },
];

export const companyPerks = [
  "Nota fiscal com CNPJ e boleto faturado a partir de 50 unidades",
  "Lista de nomes por planilha, sem digitar um por um",
  "Entrega num único endereço ou separada por filial",
  "Linha vermelha ou dourada, com o logo da empresa sob consulta",
];

export const questions = [
  { q: "Qual o prazo do bordado?", a: "Até 48 horas úteis depois da confirmação do pagamento. O prazo do frete começa a contar a partir daí." },
  { q: "Até quando pedir para a confraternização?", a: "Para receber até 20 de dezembro, peça com bordado até 10 de dezembro no Sul e Sudeste e até 5 de dezembro nas outras regiões." },
  { q: "Quantas letras cabem no gorro?", a: "Até 12 letras numa linha, contando espaços. Acentos e cedilha são bordados normalmente." },
  { q: "Qual o tamanho do gorro?", a: "O adulto tem elástico interno e serve de 56 a 60 cm de cabeça. O infantil serve de 50 a 54 cm." },
  { q: "Dá para colocar um nome diferente em cada gorro?", a: "Sim. Depois do pagamento você envia a lista de nomes, um por linha ou em planilha, e cada peça sai com o seu." },
  { q: "E se precisar trocar?", a: "Itens sem bordado trocam em até 7 dias. Peças personalizadas são trocadas em caso de defeito." },
];

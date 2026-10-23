import { AnnouncementBar, BuyBar, money, RevealObserver, SiteFooter, SiteHeader, TrustBar, type ImageCredit } from "@repo/ui";
import credits from "../public/img/credits.json";
import { Box } from "./components/Box";
import { Buy } from "./components/Buy";
import { Final } from "./components/Final";
import { Help } from "./components/Help";
import { Hero } from "./components/Hero";
import { Inspiration } from "./components/Inspiration";
import { Steps } from "./components/Steps";
import { sizes, trust } from "./content";

const links = [
  { href: "#kit", label: "O kit" },
  { href: "#comprar", label: "Tamanhos e preços" },
  { href: "#montagem", label: "Montagem" },
  { href: "#duvidas", label: "Dúvidas" },
];

const footer = [
  { title: "Comprar", links: [{ href: "#comprar", label: "Kit Árvore Completa" }, { href: "#kit", label: "O que vem na caixa" }, { href: "#montagem", label: "Como montar" }] },
  { title: "Ajuda", links: [{ href: "#duvidas", label: "Entregas" }, { href: "#duvidas", label: "Trocas e garantia" }, { href: "#checkout", label: "Fale conosco" }] },
  { title: "Ponteira", links: [{ href: "#checkout", label: "Sobre nós" }, { href: "#checkout", label: "Privacidade" }, { href: "#checkout", label: "Termos de uso" }] },
];

const imageCredits: ImageCredit[] = credits;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <AnnouncementBar>Frete grátis para Sul e Sudeste · Pedidos até 15 de dezembro chegam antes do Natal</AnnouncementBar>
      <SiteHeader links={links} cta={{ href: "#comprar", label: "Comprar kit" }} />
      <main id="conteudo">
        <Hero />
        <TrustBar items={trust} />
        <Box />
        <Buy />
        <Steps />
        <Inspiration />
        <Help />
        <Final />
      </main>
      <SiteFooter tagline="Kits de Natal prontos para montar, com tudo combinando." columns={footer} credits={imageCredits} />
      <BuyBar price={`A partir de ${money(sizes[0].price)}`} note="10x sem juros · 5% off no Pix" href="#comprar" label="Escolher kit" />
      <RevealObserver />
    </>
  );
}

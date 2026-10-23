import { AnnouncementBar, BuyBar, RevealObserver, SiteFooter, SiteHeader, TrustBar, type ImageCredit } from "@repo/ui";
import credits from "../public/img/credits.json";
import { Customize } from "./components/Customize";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { Companies, Final, Help, HowItWorks } from "./components/Sections";
import { trust } from "./content";

const links = [
  { href: "#produtos", label: "Produtos" },
  { href: "#personalizar", label: "Personalizar" },
  { href: "#empresas", label: "Para empresas" },
  { href: "#duvidas", label: "Dúvidas" },
];

const footer = [
  { title: "Comprar", links: [{ href: "#produtos", label: "Gorros e acessórios" }, { href: "#personalizar", label: "Gorro bordado" }, { href: "#empresas", label: "Pedidos para empresas" }] },
  { title: "Ajuda", links: [{ href: "#duvidas", label: "Prazos de bordado" }, { href: "#duvidas", label: "Trocas" }, { href: "#checkout", label: "Fale conosco" }] },
  { title: "Ponteira", links: [{ href: "#checkout", label: "Sobre nós" }, { href: "#checkout", label: "Privacidade" }, { href: "#checkout", label: "Termos de uso" }] },
];

const imageCredits: ImageCredit[] = credits;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <AnnouncementBar>Bordado com nome em 48 h · Desconto a partir de 10 unidades · Frete grátis acima de R$ 299</AnnouncementBar>
      <SiteHeader links={links} cta={{ href: "#personalizar", label: "Montar pedido" }} />
      <main id="conteudo">
        <Hero />
        <TrustBar items={trust} />
        <Products />
        <Customize />
        <HowItWorks />
        <Companies />
        <Help />
        <Final />
      </main>
      <SiteFooter tagline="Gorros, tiaras e meias de Natal com o nome de cada um." columns={footer} credits={imageCredits} />
      <BuyBar price="A partir de R$ 19,90" note="Bordado com nome em 48 h" href="#personalizar" label="Personalizar" />
      <RevealObserver />
    </>
  );
}

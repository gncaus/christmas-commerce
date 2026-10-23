import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import { jsFlagScript } from "@repo/ui";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  title: "Kit Árvore Completa: árvore, pisca-pisca e enfeites numa caixa só | Ponteira",
  description:
    "Árvore de Natal de 1,20 a 2,10 m com pisca-pisca de LED e enfeites sortidos numa caixa só. A partir de R$ 389, em até 10x sem juros.",
};

export const viewport: Viewport = { themeColor: "#fbf8f3" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlagScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import { jsFlagScript } from "@repo/ui";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  title: "Gorros de Papai Noel com nome bordado e acessórios de Natal | Ponteira",
  description:
    "Gorros de Papai Noel com nome bordado em 48 h, tiaras de rena, óculos, barbas e meias de lareira. A partir de R$ 19,90, com desconto a partir de 10 unidades.",
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

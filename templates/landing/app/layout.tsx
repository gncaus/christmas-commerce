import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import { jsFlagScript } from "@repo/ui";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  title: "__TITLE__",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlagScript }} />
      </head>
      <body className="bg-marfim font-text text-tinta antialiased">{children}</body>
    </html>
  );
}

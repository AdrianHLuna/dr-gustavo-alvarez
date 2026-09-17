import { Fraunces, PT_Sans } from "next/font/google";

// Tipografía de este sitio ("Índice Editorial"). El mood-board de marca
// (PALETA DE COLORES GUSTAVO A_compressed.pdf) sugiere "Amsterdam" (script,
// de paga — es la fuente del logo, que ya usamos como imagen fija) y "Myriad"
// (sans de Adobe, no gratuita para self-host). Igual que con TT Supermolot en
// dr-aram-alarcon: no se piratea ninguna. Myriad se sustituye por PT Sans
// (Google Fonts) — el reemplazo métrico/visual más citado para Myriad Pro,
// mismo carácter humanista y cálido descrito en el mood-board. Para
// encabezados se usa Fraunces, una serif editorial de peso variable que
// combina con el carácter personal/caligráfico del logotipo sin competir con
// él (el logo resuelve la parte "script", el H1 no necesita serlo también).
export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
});

export const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-pt-sans",
});

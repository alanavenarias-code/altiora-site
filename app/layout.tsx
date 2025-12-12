import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Altiora Consultoría",
    template: "%s · Altiora Consultoría",
  },
  description:
    "Estrategia territorial basada en microsegmentación y medición del mapa político para posicionar personajes y narrativas en tierra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FastCall — Marcador automático para equipos comerciales",
  description:
    "App Android que llama automáticamente a los leads de tu CRM en segundos. +30% contactabilidad, +15% ventas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

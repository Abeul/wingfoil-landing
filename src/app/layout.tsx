import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Curso de Wingfoil | Manu La Porta - Do Zero aos Primeiros Voos",
  description: "Um método simples, seguro e progressivo para quem quer aprender Wingfoil sozinho, entender o equipamento e evoluir com confiança.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#020617] text-slate-100 font-body selection:bg-cyan-500/30 selection:text-cyan-200">
        {/* Container principal para o conteúdo da página, pronto para rodar sem interferências */}
        <div className="relative w-full">
          {children}
        </div>
      </body>
    </html>
  );
}

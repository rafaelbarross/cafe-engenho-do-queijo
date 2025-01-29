import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/nav-bar";
import { Footer } from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  publisher: "Café Engenho do Queijo",
  title: "Café Engenho do Queijo",
  description: "A sua parada obrigatória! Café - Lanches - Almoço - Jantar",
  openGraph: {
    title: "Café Engenho do Queijo",
    type: "website",
    url: "https://cafeengenhodoqueijo.vercel.app",
    description: "A sua parada obrigatória! Café - Lanches - Almoço - Jantar",
    siteName: "Café Engenho do Queijo",
    images: [
      {
        url: "images/engenho.jpg",
        alt: "Imagem da fachada do Café Engenho do Queijo",
        protocol: "https",
        pathname: "cafeengenhodoqueijo.vercel.app",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

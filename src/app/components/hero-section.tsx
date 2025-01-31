import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      style={{
        backgroundImage: "url('/images/engenho.jpg')",
      }}
      className="relative h-[600px] w-full overflow-hidden  bg-cover bg-center bg-fixed"
    >
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container mx-auto relative flex h-full flex-col items-center justify-center text-center">
        <h1 className="mb-6 text-4xl font-bold text-white sm:text-6xl">
          Bem-vindo ao Café Engenho do Queijo
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-white/90">
          A SUA PARADA OBRIGATÓRIA! CAFÉ - LANCHES - ALMOÇO - JANTAR
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="font-semibold group text-white bg-amber-500 hover:bg-amber-600 transition-colors"
          >
            <Link href="/#produtos">
              {" "}
              <ArrowRight
                className="-me-1 ms-2 transition-transform group-hover:translate-x-0.5"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
              Conheça Nossos Produtos
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-red-500 hover:bg-red-600 group font-semibold text-white transition-colors"
          >
            <Link href="/#localizacao">
              <MapPin className="group-hover:animate-bounce  transition-transform" />
              Como Chegar
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

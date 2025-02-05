"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Map, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import RedeSociais from "./redes-sociais";
import Logo from "./logo";
import Image from "next/image";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full border-b bg-white backdrop-blur px-4 lg:px-0 drop-shadow !z-[9999]">
      <div className="container mx-auto flex h-16 items-center justify-between !z-[9999]">
        <Logo />
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <Button variant="ghost" asChild>
            <Link href="/#produtos">Produtos</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/#atracoes">Atrações</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/#localizacao">Localização</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/#contato">Contato</Link>
          </Button>
        </nav>
        <div className="hidden md:block">
          <RedeSociais />
        </div>
        <Sheet modal={false} open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden !z-[9999]">
            <Button
              className="group"
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen((prevState) => !prevState)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="pointer-events-none"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12L20 12"
                  className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                />
                <path
                  d="M4 12H20"
                  className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                />
                <path
                  d="M4 12H20"
                  className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent
            className="h-dvh w-full p-0 [&>button]:hidden top-16"
            side="bottom"
          >
            <SheetTitle className="sr-only">Menu</SheetTitle>

            <div className=" relative  mx-4 mt-5 bg-muted rounded-lg overflow-hidden">
              <Link
                className="absolute bottom-4 right-4"
                passHref
                href="https://www.google.com/maps/place/Caf%C3%A9+Engenho+do+Queijo/@-9.897236,-36.450219,2221m/data=!3m1!1e3!4m6!3m5!1s0x7042f5260a2e847:0x83d30c35e193c60e!8m2!3d-9.8972357!4d-36.4502188!16s%2Fg%2F11m_z4fn05?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <Button variant="secondary" className="rounded-full">
                  <Map /> Ver localização
                </Button>
              </Link>
              <Image
                alt="localizacão"
                width={400}
                height={300}
                src="/images/engenho.jpg"
                className="h-36 object-cover w-full bg-center"
              />
            </div>

            <nav className="flex flex-col space-y-4 px-4 mt-5">
              <div className="relative items-center flex justify-center">
                <div className="absolute h-px bg-red-600 w-full rounded-full color" />

                <h1 className="font-semibold bg-white z-10 px-5 text-amber-800">
                  Links
                </h1>
              </div>
              <Button
                size="lg"
                className="group "
                onClick={() => setIsOpen(false)}
                asChild
              >
                <Link href="/#produtos" className="text-red-900 font-semibold">
                  {" "}
                  {/* <ArrowRight
                    className="-me-1 ms-2 transition-transform group-hover:translate-x-0.5"
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  /> */}
                  Produtos
                </Link>
              </Button>

              <Button
                size="lg"
                className="group "
                onClick={() => setIsOpen(false)}
                asChild
              >
                <Link href="/#atracoes" className="text-red-900 font-semibold">
                  {" "}
                  {/* <ArrowRight
                    className="-me-1 ms-2 transition-transform group-hover:translate-x-0.5"
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  /> */}
                  Atrações
                </Link>
              </Button>

              <Button
                size="lg"
                className="group "
                onClick={() => setIsOpen(false)}
                asChild
              >
                <Link
                  href="/#localizacao"
                  className="text-red-900 font-semibold"
                >
                  {" "}
                  {/* <ArrowRight
                    className="-me-1 ms-2 transition-transform group-hover:translate-x-0.5"
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  />{" "} */}
                  Localização
                </Link>
              </Button>

              <Button
                size="lg"
                className="group "
                onClick={() => setIsOpen(false)}
                asChild
              >
                <Link href="/#contato" className="text-red-900 font-semibold">
                  {/* <ArrowRight
                    className="-me-1 ms-2  transition-transform group-hover:translate-x-0.5"
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  /> */}
                  Contatos
                </Link>
              </Button>
              <div className="mx-auto">
                <RedeSociais />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

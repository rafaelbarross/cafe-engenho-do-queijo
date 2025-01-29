"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import RedeSociais from "./redes-sociais";
import Logo from "./logo";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full border-b bg-white backdrop-blur px-4 lg:px-0 drop-shadow z-50">
      <div className="container mx-auto flex h-16 items-center justify-between">
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
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-10 w-10" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            className="h-dvh w-full p-0 [&>button]:hidden"
            side="left"
          >
            <SheetTitle className="sr-only">Menu</SheetTitle>

            <header className="sticky top-0 w-full border-b bg-white backdrop-blur px-4 lg:px-0 drop-shadow z-50">
              <div className="container mx-auto flex h-16 items-center justify-between">
                <Logo />

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
              </div>
            </header>

            <nav className="flex flex-col space-y-4 px-4 mt-5">
              <Button className="group ">
                Produtos
                <ArrowRight
                  className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <Link href="/#produtos" onClick={() => setIsOpen(false)}></Link>
              </Button>

              <Button className="group ">
                Atrações
                <ArrowRight
                  className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <Link href="/#atracoes" onClick={() => setIsOpen(false)}></Link>
              </Button>

              <Button className="group ">
                Localização
                <ArrowRight
                  className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <Link
                  href="/#localizacao"
                  onClick={() => setIsOpen(false)}
                ></Link>
              </Button>

              <Button className="group ">
                Contatos
                <ArrowRight
                  className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <Link href="/#contato" onClick={() => setIsOpen(false)}></Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

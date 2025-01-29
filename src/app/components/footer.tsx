import Link from "next/link";
import Logo from "./logo";
import RedeSociais from "./redes-sociais";

export function Footer() {
  return (
    <footer className="border-t bg-background px-4 md:px-0">
      <div className="container mx-auto py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="text-sm text-muted-foreground mt-4">
              A SUA PARADA OBRIGATÓRIA! CAFÉ - LANCHES - ALMOÇO - JANTAR
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#produtos"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  href="/#atracoes"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Atrações
                </Link>
              </li>
              <li>
                <Link
                  href="/#localizacao"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Localização
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contato</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Telefone: (00) 1234-5678</li>
              {/* <li>Email: contato@cafeengenho.com.br</li> */}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Redes Sociais</h3>
            <RedeSociais />
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Café Engenho do Queijo. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { MapPin, Clock, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function LocationSection() {
  return (
    <section id="localizacao" className="py-16 scroll-mt-10">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold">Localização</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-amber-600" />
              <div>
                <h3 className="text-lg font-semibold">Endereço</h3>
                <p className="text-muted-foreground">
                  BR-101, 2336 - AL
                  <br />
                  Junqueiro - Alagoas
                  <br />
                  CEP: 57270-000
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-amber-600" />
              <div>
                <h3 className="text-lg font-semibold">
                  Horário de Funcionamento
                </h3>
                <p className="text-muted-foreground">
                  Segunda a Domingo
                  <br />
                  06:30h - 20:00h
                </p>
              </div>
            </div>
            <div id="contato" className="flex flex-col items-start gap-4">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-amber-600" />
                <div>
                  <h3 className="text-lg font-semibold">Contato</h3>
                  <p className="text-muted-foreground">(82) 9634-0697</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaWhatsapp className="h-6 w-6 text-amber-600" />
                <div>
                  <h3 className="text-lg font-semibold">Whatsapp</h3>
                  <p className="text-muted-foreground">(82) 9634-0697</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[400px] bg-muted rounded-lg overflow-hidden border-8 border-primary">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4836.283996927875!2d-36.4502188!3d-9.8972357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7042f5260a2e847%3A0x83d30c35e193c60e!2sCaf%C3%A9%20Engenho%20do%20Queijo!5e1!3m2!1spt-BR!2sbr!4v1738083380836!5m2!1spt-BR!2sbr"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-2">
              Outside Languages
            </h3>
            <p className="text-sm text-background/80">
              Transformando o aprendizado de inglês em algo prazeroso e eficaz.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#" className="hover:text-secondary transition-smooth">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-smooth">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-smooth">
                  Suporte
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Payment */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Siga-nos</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-secondary flex items-center justify-center transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-secondary flex items-center justify-center transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-secondary flex items-center justify-center transition-smooth"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-background/80">
              Formas de pagamento: PIX, Cartão de Crédito, Boleto
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-sm text-background/80">
            © {currentYear} Outside Languages — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

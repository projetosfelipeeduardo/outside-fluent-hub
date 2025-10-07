import { Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Fale diretamente com a professora
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Quer saber mais ou agendar sua aula experimental?
            Entre em contato e comece sua jornada hoje mesmo! 🌟
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* WhatsApp Card */}
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-medium transition-smooth">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                WhatsApp
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                (11) 99253-0246
              </p>
              <Button
                asChild
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-medium transition-bounce"
              >
                <a
                  href="https://wa.me/5511992530246"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>

            {/* Email Card */}
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-medium transition-smooth">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-light to-primary flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                E-mail
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                mariane@outsidelanguages.page
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full"
              >
                <a href="mailto:mariane@outsidelanguages.page">
                  Enviar E-mail
                </a>
              </Button>
            </div>
          </div>

          {/* CTA Final */}
          <div className="bg-gradient-to-br from-primary-light/20 to-secondary/20 rounded-2xl p-8 md:p-12 text-center shadow-soft border border-border">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Pronto para começar sua jornada de fluência?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Agende agora sua aula experimental gratuita e descubra seu nível de inglês!
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-medium transition-bounce"
            >
              <a
                href="https://wa.me/5511992530246"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Aula Experimental →
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

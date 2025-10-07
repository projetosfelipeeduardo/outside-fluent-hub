import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Individual",
      type: "1 aluno",
      description: "Aulas particulares 100% personalizadas, foco total em você.",
      duration: "60 min",
      pricePerClass: "R$ 95,00",
      totalSemester: "R$ 1.900,00",
      popular: true,
    },
    {
      name: "Dupla",
      type: "2 alunos",
      description: "Você participará da aula com mais uma pessoa do mesmo nível.",
      duration: "60 min",
      pricePerClass: "R$ 75,00",
      totalSemester: "R$ 1.500,00",
      popular: false,
    },
    {
      name: "Flex (Avulso)",
      type: "1 aluno",
      description: "Aulas independentes sob demanda, com datas combinadas.",
      duration: "60 min",
      pricePerClass: "R$ 120,00",
      totalSemester: "Sob consulta",
      popular: false,
    },
  ];

  const benefits = [
    "Acesso ao Drive com materiais exclusivos",
    "Feedbacks escritos a cada 8 aulas",
    "Certificado conforme o nível",
    "Contrato formal e emissão de nota fiscal",
    "Acesso a desafios e atividades interativas",
  ];

  return (
    <section id="planos" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Planos semestrais que se adaptam à sua rotina{" "}
            <span className="text-gradient-accent">💼</span>
          </h2>
          
          <div className="mt-8 bg-card rounded-xl p-6 max-w-2xl mx-auto shadow-soft border border-border">
            <p className="text-lg font-semibold text-foreground mb-4">
              Todos os planos incluem:
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-left">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth border-2 animate-fade-in ${
                plan.popular
                  ? "border-primary shadow-glow"
                  : "border-border"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-light to-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-medium">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.type}</p>
                
                <div className="mb-4">
                  <span className="text-4xl font-heading font-bold text-primary">
                    {plan.pricePerClass}
                  </span>
                  <span className="text-muted-foreground ml-1">/ aula</span>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Duração:</span>
                  <span className="font-semibold text-foreground">{plan.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Semestral:</span>
                  <span className="font-semibold text-foreground">{plan.totalSemester}</span>
                </div>
              </div>

              <Button
                asChild
                className={`w-full ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-accent hover:bg-accent/90 text-accent-foreground"
                } shadow-medium transition-bounce`}
              >
                <a
                  href="https://wa.me/5511992530246"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Escolher Plano
                </a>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Valores base semestrais, considerando 20 aulas. Parcelamento e opções corporativas sob consulta.
        </p>

        <div className="text-center mt-8">
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
    </section>
  );
};

export default Pricing;

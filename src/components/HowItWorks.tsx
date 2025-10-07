import { Sparkles, Calendar, Video, FolderOpen, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Sparkles,
      title: "Faça seu cadastro",
      description: "Preencha o formulário e agende sua aula experimental gratuita.",
      color: "from-primary-light to-primary",
    },
    {
      icon: Calendar,
      title: "Combine seu horário",
      description: "Escolha o dia e horário ideais para você.",
      color: "from-secondary to-accent",
    },
    {
      icon: Video,
      title: "Aulas ao vivo no Google Meet",
      description: "Com gravação disponível após cada encontro.",
      color: "from-primary to-primary-light",
    },
    {
      icon: FolderOpen,
      title: "Acesso ao seu Drive exclusivo",
      description: "Material e feedbacks sempre atualizados.",
      color: "from-accent to-secondary",
    },
    {
      icon: Rocket,
      title: "Evolua com leveza e constância",
      description: "Desafios diários e acompanhamento pessoal.",
      color: "from-primary-light to-primary",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Veja como é simples começar a aprender inglês com a{" "}
            <span className="text-gradient-primary">Outside Languages</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex gap-6 mb-8 last:mb-0 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Timeline Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-7 top-16 w-0.5 h-full bg-gradient-to-b from-primary-light to-transparent"></div>
              )}

              {/* Icon */}
              <div
                className={`flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-medium z-10`}
              >
                <step.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <div className="flex-grow pb-8">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

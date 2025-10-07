import { Plane, Briefcase, Award, Film } from "lucide-react";

const Benefits = () => {
  const applications = [
    {
      icon: Plane,
      title: "Viagens Internacionais",
      description: "Aprenda expressões e diálogos essenciais para se comunicar com confiança em qualquer país.",
      gradient: "from-primary-light to-primary",
    },
    {
      icon: Briefcase,
      title: "Carreira e Negócios",
      description: "Vocabulário técnico e habilidades de apresentação para destacar-se no ambiente corporativo.",
      gradient: "from-accent to-secondary",
    },
    {
      icon: Award,
      title: "Certificações Cambridge",
      description: "Preparação direcionada para FCE e CAE, com foco nas competências exigidas nos exames.",
      gradient: "from-primary to-primary-light",
    },
    {
      icon: Film,
      title: "Cultura e Entretenimento",
      description: "Entenda músicas, filmes e séries naturalmente, ampliando seu repertório cultural.",
      gradient: "from-secondary to-accent",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Inglês que te acompanha em todas as fases da vida{" "}
            <span className="text-gradient-accent">💬</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A Outside Languages prepara você para viver o inglês dentro e fora das telas — 
            no trabalho, nas viagens e na vida real.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {applications.map((app, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth border border-border animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${app.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce`}
              >
                <app.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                {app.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {app.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

import { Brain, Video, FolderOpen, MessageSquare, Gamepad2, Target } from "lucide-react";

const Methodology = () => {
  const features = [
    {
      icon: Brain,
      title: "Aprendizado Personalizado",
      description: "O conteúdo é adaptado ao seu perfil e interesses.",
    },
    {
      icon: Video,
      title: "Aulas ao Vivo",
      description: "Encontros semanais via Google Meet com gravações disponíveis.",
    },
    {
      icon: FolderOpen,
      title: "Caderno Virtual",
      description: "Tudo organizado em sua pasta exclusiva no Google Drive.",
    },
    {
      icon: MessageSquare,
      title: "Feedback Contínuo",
      description: "Acompanhamento a cada 8 aulas com metas e correções.",
    },
    {
      icon: Gamepad2,
      title: "Atividades Interativas",
      description: "Plataformas como Bamboozle, Liveworksheet e Kami.",
    },
    {
      icon: Target,
      title: "Foco em Conversação",
      description: "Pratique situações reais, sem tradução literal.",
    },
  ];

  return (
    <section id="metodologia" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Uma metodologia moderna, leve e feita para você{" "}
            <span className="text-gradient-accent">🌎</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A Outside Languages nasceu com o propósito de transformar o aprendizado de inglês 
            em algo prazeroso e eficaz. Cada aula é pensada para respeitar o seu tempo, 
            o seu ritmo e o seu objetivo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-smooth border border-border animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-light to-primary flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;

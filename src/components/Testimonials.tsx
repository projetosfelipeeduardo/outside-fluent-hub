import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Luiza",
      location: "São Paulo, SP",
      text: "A Mariane me ajudou a falar com segurança nas minhas viagens. As aulas são leves e sempre focadas no que eu preciso.",
      rating: 5,
    },
    {
      name: "Bruno Ferreira",
      location: "Rio de Janeiro, RJ",
      text: "Com a Outside, eu finalmente aprendi inglês de forma leve e constante. O método personalizado fez toda a diferença!",
      rating: 5,
    },
    {
      name: "Cintia Rocha",
      location: "Belo Horizonte, MG",
      text: "As aulas são personalizadas e divertidas. Me destravei totalmente e agora consigo me comunicar com naturalidade.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            O que dizem nossos alunos
          </h2>
          <p className="text-lg text-muted-foreground">
            Resultados reais, experiências inspiradoras
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl p-8 md:p-12 shadow-medium border border-border">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary-light/30" />
            
            <div className="relative z-10 animate-fade-in" key={currentIndex}>
              <div className="flex items-center gap-1 mb-6 justify-center">
                {[...Array(current.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-secondary fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 text-center">
                "{current.text}"
              </p>

              <div className="text-center">
                <p className="font-heading font-bold text-lg text-foreground">
                  {current.name}
                </p>
                <p className="text-sm text-muted-foreground">{current.location}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-smooth ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

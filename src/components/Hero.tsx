import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import heroImage from "@/assets/hero-teacher.jpg";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }
    
    toast.success("Cadastro realizado! Em breve entraremos em contato.");
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <section
      id="inicio"
      className="min-h-screen pt-20 bg-gradient-to-br from-primary-light/20 via-background to-secondary/10"
    >
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6">
              Sua fluência começa aqui:{" "}
              <span className="text-gradient-primary">
                aprenda inglês
              </span>{" "}
              com aulas particulares e personalizadas
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Aulas online com <span className="font-semibold text-foreground">Mariane Reis</span>, 
              professora certificada pela Universidade de Cambridge.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Um método leve, prático e focado em conversação — no seu ritmo.
            </p>

            {/* Lead Form */}
            <div className="bg-card rounded-2xl shadow-medium p-6 md:p-8 border border-border">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">WhatsApp</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-medium transition-bounce text-lg py-6"
                >
                  Quero minha aula experimental →
                </Button>
                
                <p className="text-sm text-center text-muted-foreground">
                  Receba seu acesso à primeira aula e descubra seu nível gratuitamente!
                </p>
              </form>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-fade-in lg:animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img
                src={heroImage}
                alt="Professora Mariane Reis - Aulas de Inglês Online"
                className="w-full h-auto object-cover"
              />
              
              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-secondary text-secondary-foreground rounded-xl px-4 py-2 shadow-medium animate-float">
                <p className="text-sm font-semibold">✓ Cambridge Certified</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/4 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-1/4 -left-8 w-40 h-40 bg-primary-light/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "As aulas são online?",
      answer: "Sim, 100% via Google Meet. Você pode participar de qualquer lugar com conexão à internet.",
    },
    {
      question: "Há material incluso?",
      answer: "Sim, todo material é personalizado e gratuito, disponibilizado em sua pasta exclusiva no Google Drive.",
    },
    {
      question: "Posso receber certificado?",
      answer: "Sim, você receberá certificado conforme seu nível e carga horária cumprida.",
    },
    {
      question: "Há contrato e nota fiscal?",
      answer: "Sim, fornecemos contrato formal e emitimos nota fiscal mediante solicitação.",
    },
    {
      question: "Para quem é o curso?",
      answer: "Nosso curso é direcionado para adolescentes a partir de 13 anos e adultos de todos os níveis.",
    },
    {
      question: "Quanto tempo leva para aprender?",
      answer: "De 6 meses a 1 ano para se comunicar com confiança, dependendo da sua dedicação e frequência nas aulas.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tudo o que você precisa saber para começar
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border border-border shadow-soft data-[state=open]:shadow-medium transition-smooth"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

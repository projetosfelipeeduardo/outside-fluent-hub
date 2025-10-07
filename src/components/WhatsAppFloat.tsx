import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5511992530246"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-full shadow-glow flex items-center justify-center hover:scale-110 transition-bounce animate-float"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
};

export default WhatsAppFloat;

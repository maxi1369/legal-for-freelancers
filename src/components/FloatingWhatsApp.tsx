import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  const whatsappLink = "https://wa.me/1234567890?text=Hola,%20necesito%20asesoría%20legal";

  return (
    <Button
      asChild
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-xl hover:scale-110 transition-transform"
      aria-label="Contactar por WhatsApp"
    >
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="h-6 w-6" />
      </a>
    </Button>
  );
};

export default FloatingWhatsApp;

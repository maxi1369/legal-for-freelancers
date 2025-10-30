import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Users, Clock } from "lucide-react";
import heroImage from "@/assets/hero-legal.jpg";

const Hero = () => {
  const whatsappLink = "https://wa.me/1234567890?text=Hola,%20quiero%20revisar%20mi%20contrato";

  return (
    <section id="hero" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-primary-light to-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Protegé tu trabajo.{" "}
              <span className="text-primary">Cobrá sin problemas.</span>{" "}
              Contratos claros.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Defensa legal para freelancers y empresas LATAM que operan con EE.UU.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" asChild>
                <a href="#contacto">Revisar mi contrato</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Asesoría express
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="py-2 px-4 text-sm">
                <Clock className="w-4 h-4 mr-2" />
                +3 años
              </Badge>
              <Badge variant="secondary" className="py-2 px-4 text-sm">
                <Users className="w-4 h-4 mr-2" />
                +700 clientes
              </Badge>
              <Badge variant="secondary" className="py-2 px-4 text-sm">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Atención personalizada
              </Badge>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={heroImage}
                alt="Servicios legales profesionales para freelancers"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

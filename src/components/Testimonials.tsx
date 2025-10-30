import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Gracias a EADF recuperé USD 8,000 de un cliente que no me pagaba. El proceso fue claro y me sentí respaldado en todo momento.",
      name: "Martín Rodriguez",
      role: "Desarrollador Full Stack",
      location: "Buenos Aires, Argentina",
    },
    {
      quote:
        "La suscripción mensual nos ahorra tiempo y dolores de cabeza. Ahora todos nuestros contratos están protegidos y actualizados.",
      name: "Laura Méndez",
      role: "Fundadora de Agencia Digital",
      location: "Ciudad de México, México",
    },
    {
      quote:
        "El Kit Legal PRO fue la mejor inversión al abrir mi LLC. Todo impecable, profesional y con excelente soporte.",
      name: "Carlos Vargas",
      role: "Consultor de Marketing",
      location: "Bogotá, Colombia",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Confianza de freelancers y empresas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Miles de profesionales ya protegen su trabajo con EADF
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border-border bg-card"
            >
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

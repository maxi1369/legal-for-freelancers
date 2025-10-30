import { Card, CardContent } from "@/components/ui/card";
import { FileText, AlertCircle, HeadphonesIcon, Briefcase } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Revisión y redacción de contratos",
      description:
        "Contratos internacionales adaptados a tu realidad como freelancer o empresa LATAM trabajando con clientes de EE.UU.",
    },
    {
      icon: AlertCircle,
      title: "Reclamos por impago",
      description:
        "Te defendemos cuando un cliente no paga. Gestionamos reclamos efectivos para recuperar lo que te corresponde.",
    },
    {
      icon: HeadphonesIcon,
      title: "Asesoría legal mensual",
      description:
        "Suscripción con acceso continuo a consultas legales, revisión de contratos y soporte personalizado para tu negocio.",
    },
    {
      icon: Briefcase,
      title: "Kit Legal EADF",
      description:
        "Paquetes completos para empresas con LLC: contratos listos, guías prácticas y documentos legales esenciales.",
    },
  ];

  return (
    <section id="servicios" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Servicios diseñados para vos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Protección legal completa para freelancers y empresas que trabajan con clientes internacionales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

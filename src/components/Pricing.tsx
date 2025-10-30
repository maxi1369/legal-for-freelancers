import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Kit Legal START",
      price: "USD 400",
      priceDetail: "Pago único",
      description: "Esenciales legales para comenzar tu operación internacional",
      features: [
        "MSA básico (Master Service Agreement)",
        "Contractor Agreement estándar",
        "NDA (Acuerdo de confidencialidad)",
        "Carta de reclamo por impago",
        "Guía de uso completa",
      ],
      popular: false,
    },
    {
      name: "Suscripción Empresas",
      price: "USD 49",
      priceDetail: "Por mes",
      description: "Asesoría legal continua para empresas en crecimiento",
      features: [
        "Todo lo del Kit START",
        "3 revisiones de contratos/mes",
        "2 contratos nuevos cada 6 meses",
        "Consultas ilimitadas vía email",
        "Soporte prioritario en 24hs",
        "Descuentos en servicios adicionales",
      ],
      popular: true,
      badge: "Más elegido",
    },
    {
      name: "Kit Legal PRO",
      price: "USD 750",
      priceDetail: "Pago único",
      description: "Protección legal completa para empresas establecidas",
      features: [
        "Todo lo del Kit START",
        "IP Assignment Agreement",
        "1 hora de asesoría personalizada",
        "Revisión de Operating Agreement",
        "30 días de soporte post-compra",
        "Plantillas editables en Word",
      ],
      popular: false,
    },
  ];

  return (
    <section id="planes" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Planes para cada necesidad
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elegí el plan que mejor se adapte a tu etapa de negocio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col ${
                plan.popular
                  ? "border-primary shadow-lg scale-105 md:scale-110 z-10"
                  : "border-border"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.priceDetail}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>

              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-6">
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  asChild
                >
                  <a href="#contacto">Empezar</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

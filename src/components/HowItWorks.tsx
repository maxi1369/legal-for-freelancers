import { Card, CardContent } from "@/components/ui/card";
import { Upload, Search, FileEdit, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Enviar contrato",
      description:
        "Envianos tu contrato actual o los detalles del proyecto. Podés hacerlo por email, WhatsApp o a través del formulario.",
      tip: "¿No tenés contrato? No hay problema, lo creamos desde cero.",
    },
    {
      icon: Search,
      title: "Auditoría legal",
      description:
        "Revisamos cláusulas críticas: pagos, propiedad intelectual, no-compete, jurisdicción y penalidades. Identificamos riesgos.",
      tip: "Recibís un informe detallado en 48-72hs.",
    },
    {
      icon: FileEdit,
      title: "Ajustes y negociación",
      description:
        "Te entregamos el contrato optimizado con cambios sugeridos. Si querés, te asesoramos en la negociación con tu cliente.",
      tip: "Incluye guía de cómo presentar los cambios al cliente.",
    },
    {
      icon: CheckCircle,
      title: "Listo para firmar",
      description:
        "Contrato final validado, listo para firma. Archivás tu documento con la tranquilidad de estar protegido legalmente.",
      tip: "Guardá tu contrato en formato PDF y Word.",
    },
  ];

  return (
    <section id="como-funciona" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Cómo funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proceso simple y transparente para proteger tu trabajo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {/* Connection Lines for Desktop */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-border -z-10" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="h-full hover:shadow-lg transition-shadow border-border bg-card">
                  <CardContent className="p-6">
                    {/* Step Number */}
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent-light text-accent ml-2">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Tip */}
                    <div className="mt-4 p-3 bg-primary-light rounded-lg">
                      <p className="text-xs text-primary font-medium">{step.tip}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

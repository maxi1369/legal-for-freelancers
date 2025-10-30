import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Qué pasa con las cláusulas de no-compete?",
      answer:
        "Las cláusulas de no-compete pueden limitar tu capacidad de trabajar con otros clientes similares. Revisamos cada cláusula para asegurar que sea razonable en alcance, duración y geografía, y te asesoramos sobre cómo negociar términos más favorables que protejan tu libertad profesional.",
    },
    {
      question: "¿Cómo se protege la propiedad intelectual?",
      answer:
        "Definimos claramente quién es dueño del trabajo creado. Usualmente, el cliente adquiere los derechos después del pago completo. Incluimos cláusulas que te permiten usar el trabajo en tu portfolio y protegen cualquier IP preexistente que aportes al proyecto.",
    },
    {
      question: "¿Qué jurisdicción aplica en caso de disputa?",
      answer:
        "Idealmente, buscamos arbitraje internacional o mediación para evitar litigios costosos. Si el contrato especifica jurisdicción de EE.UU., te explicamos las implicaciones y, cuando es posible, negociamos una jurisdicción más neutral o favorable para vos.",
    },
    {
      question: "¿Cómo funcionan los pagos y garantías?",
      answer:
        "Recomendamos pagos por hitos con depósitos iniciales del 30-50%. Incluimos cláusulas de penalidad por demora en pagos y definimos claramente qué sucede si el proyecto se cancela. También podemos incorporar cláusulas de retención (holdback) limitadas y justas.",
    },
    {
      question: "¿Cuánto demora la revisión de un contrato?",
      answer:
        "Contratos simples: 48-72 horas. Contratos complejos o MSAs: 5-7 días. Los clientes con suscripción tienen prioridad. Si tenés urgencia, podemos ofrecer revisión express en 24hs con un cargo adicional.",
    },
    {
      question: "¿Qué incluye la suscripción mensual?",
      answer:
        "La suscripción incluye 3 revisiones de contratos por mes, 2 contratos nuevos cada 6 meses desde el primer mes, consultas ilimitadas por email, soporte prioritario en menos de 24hs, y descuentos en servicios adicionales como reclamos por impago o asesorías extendidas.",
    },
    {
      question: "¿Puedo cancelar mi suscripción en cualquier momento?",
      answer:
        "Sí, podés cancelar cuando quieras sin penalidades. Si cancelás, conservás acceso hasta el final del período de facturación actual. No hay reembolsos por días no utilizados, pero tampoco renovación automática después de la cancelación.",
    },
    {
      question: "¿Ofrecen servicios de litigio?",
      answer:
        "No litigamos directamente, pero te asesoramos en reclamos extrajudiciales y negociaciones. Si la situación escala a litigio, te conectamos con abogados especializados en tu jurisdicción y la del cliente, y te ayudamos a preparar la documentación necesaria.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Respuestas claras a las dudas más comunes
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
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

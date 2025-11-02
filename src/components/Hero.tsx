import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-gray-50 pt-32 pb-20 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 leading-tight">
          La única solución legal integral para operar con EE.UU.
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Creada para emprendedores, empresas y trabajadores remotos de LATAM.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <a
            href="https://wa.me/5491153873068?text=Hola%2C%20quiero%20crear%20mi%20empresa%20en%20EE.UU."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-emerald-700 hover:bg-emerald-800 text-white text-lg px-8 py-6">
              Quiero crear mi empresa en EE.UU.
            </Button>
          </a>

          <a
            href="https://wa.me/5491153873068?text=Hola%2C%20quiero%20revisar%20mi%20contrato."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="text-emerald-800 border-emerald-700 hover:bg-emerald-50 text-lg px-8 py-6"
            >
              Revisar mi contrato
            </Button>
          </a>
        </div>

        <p className="text-sm text-gray-500">
          +700 clientes · +3 años de experiencia · Respuesta rápida · Sin letra chica
        </p>
      </div>
    </section>
  );
}
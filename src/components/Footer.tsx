const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-foreground/10">
                <span className="text-xl font-bold">E</span>
              </div>
              <span className="text-lg font-bold">EADF</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              El Abogado del Freelancer
            </p>
            <p className="text-sm text-primary-foreground/80 mt-2">
              Defensa legal para freelancers y empresas LATAM.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#servicios" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#planes" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Planes
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-xs text-primary-foreground/60 leading-relaxed mb-4">
            DISCLAIMER: Los servicios de EADF constituyen asesoramiento legal general y no reemplazan la consulta con un abogado local. 
            No garantizamos resultados específicos en reclamos o litigios. El uso de nuestros contratos y documentos es bajo responsabilidad del cliente.
          </p>
          <p className="text-sm text-primary-foreground/80">
            © {currentYear} EADF – El Abogado del Freelancer. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

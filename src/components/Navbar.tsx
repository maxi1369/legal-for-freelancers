import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Planes", href: "/planes" },
    { name: "Preguntas", href: "/preguntas" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-xl font-semibold text-emerald-900">
          EADF · El Abogado del Freelancer
        </a>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-emerald-900 transition"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA visible a la derecha */}
        <a
          href="https://wa.me/5491153873068"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="hidden md:inline bg-emerald-700 hover:bg-emerald-800 text-white">
            Contactar ahora
          </Button>
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://wa.me/5491153873068"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-3 text-emerald-700 font-semibold"
          >
            Contactar ahora
          </a>
        </div>
      )}
    </header>
  );
}
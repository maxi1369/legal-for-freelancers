# EADF – El Abogado del Freelancer

Landing page profesional para servicios legales dirigidos a freelancers y empresas LATAM que trabajan con clientes de Estados Unidos.

## 🚀 Características

- **Diseño minimalista y profesional** con paleta verde corporativa
- **Totalmente responsivo** (mobile-first)
- **SEO optimizado** con meta tags, Open Graph y Schema.org
- **Accesibilidad WCAG AA**
- **Animaciones suaves** y transiciones elegantes
- **Formulario de contacto** con validación
- **Integración WhatsApp** (botón flotante + enlaces directos)
- **9 secciones completas**: Hero, Servicios, Planes, Proceso, Testimonios, FAQ, Contacto, Footer

## 📋 Secciones

1. **Header/Navbar** - Navegación sticky con enlaces suaves
2. **Hero** - Titular impactante + CTA + badges de confianza
3. **Servicios** - 4 cards de servicios principales
4. **Planes** - 3 opciones de pricing (Kit START, Suscripción, Kit PRO)
5. **Cómo Funciona** - 4 pasos del proceso
6. **Testimonios** - 3 casos de éxito
7. **FAQ** - 8 preguntas frecuentes en acordeón
8. **Contacto** - Formulario + WhatsApp + redes sociales
9. **Footer** - Información legal + disclaimer

## 🛠️ Stack Tecnológico

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **shadcn/ui** (componentes)
- **Lucide React** (iconos)
- **React Router** (navegación)

## 📦 Instalación y Desarrollo

### Requisitos previos

- Node.js 16+ y npm

### Pasos

```bash
# Clonar el repositorio
git clone <tu-repo-url>
cd <nombre-proyecto>

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# El proyecto estará disponible en http://localhost:8080
```

## 🏗️ Build para Producción

```bash
# Crear build optimizado
npm run build

# El build estará en la carpeta /dist
```

## 🚀 Deploy en Vercel

### Opción 1: Deploy desde GitHub

1. Subí tu código a GitHub
2. Conectá tu repositorio en [Vercel](https://vercel.com)
3. Vercel detectará automáticamente Vite
4. Click en "Deploy"

### Opción 2: Deploy con Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
```

### Configuración recomendada en Vercel

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## 🎨 Sistema de Diseño

### Paleta de Colores

- **Primary (Verde oscuro)**: `#0F3D2E` - HSL(162, 61%, 15%)
- **Secondary (Gris)**: `#6B7280` - HSL(220, 9%, 46%)
- **Background**: Blanco `#FFFFFF`
- **Accent**: Verde medio para hover/focus

### Tipografía

- **Fuente principal**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700, 800

### Componentes

Todos los componentes usan el sistema de diseño definido en:
- `src/index.css` - Variables CSS y tokens semánticos
- `tailwind.config.ts` - Configuración de Tailwind

## 📱 Configuración de WhatsApp

Para personalizar el número de WhatsApp:

1. Abrí `src/components/Navbar.tsx`
2. Abrí `src/components/Hero.tsx`
3. Abrí `src/components/FloatingWhatsApp.tsx`
4. Buscá `whatsappLink` y reemplazá `1234567890` con tu número (formato internacional sin +)

Ejemplo: `https://wa.me/5491123456789?text=Tu%20mensaje`

## 🔧 Personalización

### Cambiar colores

Editá las variables CSS en `src/index.css`:

```css
:root {
  --primary: 162 61% 15%;  /* Tu color primario en HSL */
  --secondary: 220 9% 46%; /* Tu color secundario */
  /* ... */
}
```

### Modificar contenido

- **Textos y copys**: Editá cada componente en `src/components/`
- **Planes de pricing**: `src/components/Pricing.tsx`
- **FAQs**: `src/components/FAQ.tsx`
- **Testimonios**: `src/components/Testimonials.tsx`

### Cambiar imagen hero

Reemplazá `src/assets/hero-legal.jpg` con tu imagen o generá una nueva.

## 📊 SEO

El sitio incluye:

- ✅ Title y meta description optimizados
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Keywords relevantes
- ✅ Semantic HTML (header, main, section, footer)
- ✅ Alt text en imágenes
- ✅ robots.txt configurado

Para mejorar SEO:

1. Actualizá meta tags en `index.html`
2. Agregá Schema.org JSON-LD para Organization y FAQPage
3. Configurá Google Analytics/Search Console después del deploy

## 📄 Licencia

Todos los derechos reservados © EADF 2025

## 🤝 Soporte

Para consultas o soporte, contactá a través de:

- **Email**: contacto@eadf.com
- **WhatsApp**: [Configurar número]
- **Website**: https://elabogadodelfreelancer.com

---

**Desarrollado por**: EADF
**Última actualización**: 2025

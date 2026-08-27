import type { Localized } from '../i18n';

/* Testimonios reales confirmados por el dueño (PRODUCT.md). */

export const testimonialsHead = {
  eyebrow: { es: 'Lo que dicen', en: 'What they say' },
  titleHtml: { es: 'Capitanes y <em>propietarios</em>', en: 'Captains and <em>owners</em>' },
};

export interface Testimonial {
  quote: Localized;
  name: string;
  boat: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: {
      es: 'Dejaron la proa como salida de fábrica. Vinieron al muelle, midieron todo y a las dos semanas ya estaba instalado.',
      en: 'They left the bow looking factory new. They came to the dock, measured everything and two weeks later it was installed.',
    },
    name: 'Carlos M.',
    boat: "Sea Ray 46' · Fajardo",
  },
  {
    quote: {
      es: 'El bimini anterior me duró dos temporadas. Este lleva cuatro años y sigue tenso, sin óxido en los herrajes.',
      en: 'My previous bimini lasted two seasons. This one is four years old and still tight, no rust on the hardware.',
    },
    name: 'Roberto S.',
    boat: "Contender 32' · San Juan",
  },
  {
    quote: {
      es: 'Rehicieron los colchones del camarote a medida del casco. Nada de espacios raros ni esquinas que no cierran.',
      en: "They redid the cabin mattresses to the exact shape of the hull. No odd gaps, no corners that don't close.",
    },
    name: 'Ana R.',
    boat: "Azimut 55' · Palmas del Mar",
  },
  {
    quote: {
      es: 'Pedí una funda de invernada y me explicaron por qué la que tenía se estaba rompiendo siempre en el mismo punto. Esa la reforzaron.',
      en: 'I asked for a winter cover and they explained why the old one kept tearing in the same spot. They reinforced it.',
    },
    name: 'Luis D.',
    boat: "Boston Whaler 28' · Salinas",
  },
];

import type { Localized } from '../i18n';

/* FAQ: única fuente de verdad; el JSON-LD FAQPage se genera de aquí. */

export const faqsHead = {
  eyebrow: { es: 'Preguntas frecuentes', en: 'FAQ' },
  titleHtml: { es: 'Antes de <em>cotizar</em>', en: 'Before you <em>ask</em>' },
};

export interface Faq {
  q: Localized;
  a: Localized;
}

export const faqs: Faq[] = [
  {
    q: { es: '¿Solo hacen cojines y asientos?', en: 'Do you only do cushions and seats?' },
    a: {
      es: 'No. Ahí es donde la mayoría se detiene. Nosotros hacemos además plafones, paredes, mamparos y muebles del interior, y del lado de plásticos: enclosures blandos y duros, back drops y capotas extendidas. Si es una superficie de tu bote, probablemente la trabajamos.',
      en: "No. That's where most shops stop. We also do headliners, walls, bulkheads and interior furniture, and on the plastics side: soft and hard enclosures, back drops and extended tops. If it's a surface on your boat, chances are we work it.",
    },
  },
  {
    q: { es: '¿Van hasta mi marina?', en: 'Do you come to my marina?' },
    a: {
      es: 'Sí. Visitamos toda la isla para medir y sacar patrón, y volvemos para la instalación. La visita de medición no tiene costo dentro del área metro, Fajardo, Salinas y Ponce.',
      en: 'Yes. We travel across the island to measure and take patterns, and come back for installation. The measuring visit is free within the San Juan metro area, Fajardo, Salinas and Ponce.',
    },
  },
  {
    q: {
      es: '¿Cuál es la diferencia entre un enclosure blando y uno duro?',
      en: "What's the difference between a soft and a hard enclosure?",
    },
    a: {
      es: 'El blando es lona con ventanas de PVC cristal: se enrolla, pesa poco y cuesta menos. El duro lleva estructura y paneles rígidos: aísla mejor, dura más y aguanta navegación fuerte. Vemos tu bote y te decimos cuál tiene sentido para cómo lo usas.',
      en: 'A soft one is canvas with clear PVC windows: it rolls up, weighs little and costs less. A hard one has a frame and rigid panels: better insulation, longer life and it takes rough running. We look at your boat and tell you which makes sense for how you use it.',
    },
  },
  {
    q: { es: '¿Cuánto tarda un trabajo típico?', en: 'How long does a typical job take?' },
    a: {
      es: 'Un juego de cojinería exterior toma entre 2 y 3 semanas desde la aprobación de materiales. Camarotes completos y cerramientos, entre 3 y 5 semanas. Te confirmamos fecha antes de empezar.',
      en: 'A set of exterior cushions takes 2 to 3 weeks from material approval. Full interiors and enclosures, 3 to 5 weeks. We confirm the date before starting.',
    },
  },
  {
    q: { es: '¿Puedo ver muestras de material antes de decidir?', en: 'Can I see material samples before deciding?' },
    a: {
      es: 'Siempre. Llevamos el muestrario a bordo para que veas el color bajo tu propia luz, con el gelcoat y la madera de tu embarcación al lado. El color en pantalla nunca es el color real.',
      en: 'Always. We bring the sample book on board so you see the color in your own light, next to your gelcoat and woodwork. Color on a screen is never the real color.',
    },
  },
  {
    q: { es: '¿Qué cubre la garantía?', en: 'What does the warranty cover?' },
    a: {
      es: 'Cinco años en costuras y confección, y la garantía del fabricante en telas y herrajes. No cubre daños por impacto, químicos abrasivos ni limpieza con productos no recomendados.',
      en: "Five years on seams and workmanship, plus the manufacturer's warranty on fabrics and hardware. It does not cover impact damage, harsh chemicals or cleaning with products we don't recommend.",
    },
  },
  {
    q: { es: '¿Trabajan solo yates o también lanchas pequeñas?', en: 'Do you only work on yachts, or smaller boats too?' },
    a: {
      es: 'Trabajamos desde botes de pesca de 22 pies hasta yates de más de 60. El estándar de confección es el mismo en todos.',
      en: 'We work on everything from 22-foot fishing boats to yachts over 60 feet. The build standard is the same on all of them.',
    },
  },
  {
    q: { es: '¿Puedo contratar varias áreas a la vez?', en: 'Can I book several areas at once?' },
    a: {
      es: 'Es lo más recomendable. Al hacer tapicería, interiores y plásticos en la misma entrada, el bote para una sola vez, los colores y texturas quedan coordinados, y sale más económico que contratarlo por separado en tres momentos distintos.',
      en: "That's the smart way to do it. Handling upholstery, interiors and plastics in the same visit means the boat is out of service once, colors and textures match, and it costs less than hiring it out three separate times.",
    },
  },
];

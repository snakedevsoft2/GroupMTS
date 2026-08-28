import type { Localized } from '@/i18n';

/* The four service lines (see PRODUCT.md). */

export const servicesHead = {
  titleHtml: {
    es: 'Del cojín al plafón,<br>y todo lo que hay <em>en medio</em>',
    en: 'From cushions to headliners,<br>and everything <em>in between</em>',
  },
  lede: {
    es: 'La mayoría de los talleres se queda en los asientos. Nosotros seguimos: techos, paredes, muebles, plásticos y capotas. Un solo responsable para todo el bote.',
    en: 'Most shops stop at the seats. We keep going: ceilings, walls, furniture, plastics and tops. One shop responsible for the entire boat.',
  },
};

export type ServiceIcon = 'seat' | 'interior' | 'enclosure' | 'top';

export interface Service {
  icon: ServiceIcon;
  title: Localized;
  text: Localized;
  bullets: Localized[];
}

export const services: Service[] = [
  {
    icon: 'seat',
    title: { es: 'Tapicería & cojinería', en: 'Upholstery & cushions' },
    text: {
      es: 'Asientos de mando, proa, popa y flybridge en cuerina marina, con costura impermeable y espumas que drenan.',
      en: 'Helm, bow, stern and flybridge seating in marine vinyl, with waterproof stitching and foam that drains.',
    },
    bullets: [
      { es: 'Vinilo anti-UV, anti-hongos y anti-mancha', en: 'UV, mildew and stain resistant vinyl' },
      { es: 'Espuma de celda abierta con drenaje', en: 'Open-cell foam with drainage' },
      { es: 'Costura sellada con hilo Tenara®', en: 'Seams sealed with Tenara® thread' },
    ],
  },
  {
    icon: 'interior',
    title: { es: 'Interiores completos', en: 'Complete interiors' },
    text: {
      es: 'Plafones, paredes, mamparos y muebles. Rehacemos el interior entero, no solo lo que se sienta.',
      en: 'Headliners, walls, bulkheads and furniture. We redo the whole interior, not just what you sit on.',
    },
    bullets: [
      { es: 'Plafones y techos desmontables', en: 'Removable headliners and ceilings' },
      { es: 'Paredes, mamparos y paneles laterales', en: 'Walls, bulkheads and side panels' },
      { es: 'Muebles, colchones y cabeceras a medida', en: 'Custom furniture, mattresses and headboards' },
    ],
  },
  {
    icon: 'enclosure',
    title: { es: 'Plásticos & enclosures', en: 'Plastics & enclosures' },
    text: {
      es: 'Cerramientos blandos y duros, ventanas de PVC cristal soldadas y back drops que cierran bien y no se deforman.',
      en: 'Soft and hard enclosures, welded clear PVC windows and back drops that seal properly and hold their shape.',
    },
    bullets: [
      { es: 'Enclosures blandos y duros', en: 'Soft and hard enclosures' },
      { es: 'Back drops y cortinas traseras', en: 'Back drops and aft curtains' },
      { es: 'PVC cristal soldado, sin costura filtrante', en: 'Welded clear PVC, no leaking seams' },
    ],
  },
  {
    icon: 'top',
    title: { es: 'Capotas, toldos & fundas', en: 'Tops, biminis & covers' },
    text: {
      es: 'Biminis, T-tops, capotas extendidas y fundas de invernada en lona acrílica con herrajes de grado marino.',
      en: 'Biminis, T-tops, extended tops and winter covers in acrylic canvas with marine-grade hardware.',
    },
    bullets: [
      { es: 'Capotas extendidas y biminis', en: 'Extended tops and biminis' },
      { es: 'Estructura de tubo pulido a medida', en: 'Custom polished tube frames' },
      { es: 'Herrajes en acero inoxidable 316', en: '316 stainless steel hardware' },
    ],
  },
];

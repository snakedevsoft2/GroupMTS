import type { Localized } from '@/i18n';

/* The 4-step process (see PRODUCT.md). */

export const processHead = {
  eyebrow: { es: 'Cómo trabajamos', en: 'How we work' },
  titleHtml: {
    es: 'De la visita al muelle<br>a la <em>entrega final</em>',
    en: 'From the dock visit<br>to the <em>final handover</em>',
  },
};

export interface ProcessStep {
  title: Localized;
  text: Localized;
}

export const processSteps: ProcessStep[] = [
  {
    title: { es: 'Visita y patrón', en: 'Visit & patterns' },
    text: {
      es: 'Vamos a tu marina, medimos y sacamos patrón físico de cada pieza. Sin sorpresas de ajuste.',
      en: 'We come to your marina, measure and take physical patterns of every piece. No fit surprises.',
    },
  },
  {
    title: { es: 'Materiales', en: 'Materials' },
    text: {
      es: 'Eliges vinilo, hilo y pespunte sobre muestras reales, con recomendación según exposición solar.',
      en: 'You pick vinyl, thread and stitching from real samples, with our recommendation based on sun exposure.',
    },
  },
  {
    title: { es: 'Taller', en: 'Shop' },
    text: {
      es: 'Corte, espumado y confección en taller propio. Fotos de avance durante todo el proceso.',
      en: 'Cutting, foam and sewing in our own shop. Progress photos the whole way through.',
    },
  },
  {
    title: { es: 'Instalación', en: 'Installation' },
    text: {
      es: 'Montamos a bordo, ajustamos tensiones y revisamos contigo pieza por pieza antes de firmar.',
      en: 'We fit it on board, adjust tension and walk through every piece with you before signing off.',
    },
  },
];

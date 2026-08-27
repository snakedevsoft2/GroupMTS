import { es } from './es';
import { en } from './en';

export type Lang = 'es' | 'en';

/** Par de textos ES/EN; el español manda como fuente. */
export interface Localized {
  es: string;
  en: string;
}

export const t = (l: Localized, lang: Lang): string => l[lang];

/** Textos de interfaz (chrome del sitio). El copy de contenido vive en src/data/. */
export interface Dict {
  skip: string;
  nav: {
    servicios: string;
    transformacion: string;
    proceso: string;
    trabajos: string;
    contacto: string;
  };
  quoteNow: string;
  quoteWhatsApp: string;
  seeRestorations: string;
  menuOpen: string;
  menuClose: string;
  /** El switcher siempre apunta al otro idioma. */
  langAria: string;
  langTitle: string;
  before: string;
  after: string;
  baAria: string;
  baHint: string;
  filtersAria: string;
  galleryAria: string;
  lightboxAria: string;
  prev: string;
  next: string;
  close: string;
  playAria: string;
  carouselAria: string;
  dragHint: string;
  waFab: string;
}

export const dicts: Record<Lang, Dict> = { es, en };

/** Ruta equivalente en el otro idioma (para el switcher y hreflang). */
export function altPath(path: string, target: Lang): string {
  const clean = path.replace(/^\/en(?=\/|$)/, '') || '/';
  return target === 'es' ? clean : clean === '/' ? '/en/' : `/en${clean}`;
}

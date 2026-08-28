import { es } from './es';
import { en } from './en';

export type Lang = 'es' | 'en';

/** ES/EN copy pair; Spanish is the source of truth. */
export interface Localized {
  es: string;
  en: string;
}

export const t = (l: Localized, lang: Lang): string => l[lang];

/** UI chrome strings. Content copy lives in src/data/. */
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
  /** The switcher always points to the other language. */
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

/** Equivalent path in the other language (switcher and hreflang). */
export function altPath(path: string, target: Lang): string {
  const clean = path.replace(/^\/en(?=\/|$)/, '') || '/';
  return target === 'es' ? clean : clean === '/' ? '/en/' : `/en${clean}`;
}

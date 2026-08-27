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
}

export const dicts: Record<Lang, Dict> = { es, en };

/** Ruta equivalente en el otro idioma (para el switcher y hreflang). */
export function altPath(path: string, target: Lang): string {
  const clean = path.replace(/^\/en(?=\/|$)/, '') || '/';
  return target === 'es' ? clean : clean === '/' ? '/en/' : `/en${clean}`;
}

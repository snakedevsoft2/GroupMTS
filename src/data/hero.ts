import type { ImageMetadata } from 'astro';
import type { Localized } from '../i18n';
import fondoPoster from '../assets/fondo-poster.jpg';

/* Hero: titular animado palabra a palabra, copy y cifras confirmadas. */

export interface HeroWord {
  t: string;
  em?: boolean;
  /** Salto de línea después de esta palabra. */
  br?: boolean;
}

export const hero = {
  video: '/VIDEO/fondo.mp4',
  /* Frame real del propio video, extraído con ffmpeg */
  poster: fondoPoster as ImageMetadata,
  badge: { es: 'Tapicería · Interiores · Plásticos', en: 'Upholstery · Interiors · Plastics' },
  h1: {
    es: [
      { t: 'Tapizamos' },
      { t: 'tu' },
      { t: 'bote', br: true },
      { t: 'en' },
      { t: 'Puerto Rico', em: true },
    ],
    en: [
      { t: 'Boat' },
      { t: 'upholstery', br: true },
      { t: 'in' },
      { t: 'Puerto Rico', em: true },
    ],
  } satisfies Record<'es' | 'en', HeroWord[]>,
  lede: {
    es: 'Más áreas de tu bote, un solo taller: tapicería de alta gama, plafones, paredes, muebles, enclosures blandos y duros, back drops y capotas extendidas. Cubrimos lo que la mayoría de los talleres no toca.',
    en: "More of your boat, one single shop: high-end upholstery, headliners, walls, furniture, soft and hard enclosures, back drops and extended tops. We cover areas of your boat that most shops won't touch.",
  },
  tag: { es: 'Taller propio · Puerto Rico', en: 'Our own shop · Puerto Rico' },
};

/* Cifras reales confirmadas por el dueño (PRODUCT.md). */
export interface TrustItem {
  value: number;
  suffix: Localized;
  label: Localized;
}

export const trust: TrustItem[] = [
  { value: 15, suffix: { es: '+', en: '+' }, label: { es: 'Años a flote', en: 'Years afloat' } },
  { value: 400, suffix: { es: '+', en: '+' }, label: { es: 'Embarcaciones', en: 'Boats served' } },
  { value: 4, suffix: { es: '', en: '' }, label: { es: 'Áreas cubiertas', en: 'Areas covered' } },
  { value: 5, suffix: { es: ' años', en: ' years' }, label: { es: 'Garantía costuras', en: 'Stitching warranty' } },
];

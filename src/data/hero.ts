import type { ImageMetadata } from 'astro';
import type { Localized } from '@/i18n';
import fondoPoster from '@/assets/posters/fondo-poster.jpg';

export interface HeroWord {
  t: string;
  em?: boolean;
  /** Line break after this word. */
  br?: boolean;
}

export const hero = {
  video: '/videos/fondo.mp4',
  /* Real frame extracted from the video itself. */
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

/* Owner-confirmed figures only (see PRODUCT.md). */
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

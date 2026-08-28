import type { ImageMetadata } from 'astro';
import type { Localized } from '@/i18n';

import antes from '@/assets/before-after/antes-silla-larga.jpg';
import despues from '@/assets/before-after/despues-silla-larga.jpg';
import t01 from '@/assets/gallery/trabajo-01.jpg';
import t02 from '@/assets/gallery/trabajo-02.jpg';
import t03 from '@/assets/gallery/trabajo-03.jpg';
import t04 from '@/assets/gallery/trabajo-04.jpg';
import t05 from '@/assets/gallery/trabajo-05.jpg';
import t06 from '@/assets/gallery/trabajo-06.jpg';
import t07 from '@/assets/gallery/trabajo-07.jpg';
import t08 from '@/assets/gallery/trabajo-08.jpg';

/* Real before/after photo pair. */
export const beforeAfter = {
  eyebrow: { es: 'Restauraciones', en: 'Before & After' },
  titleHtml: { es: 'Transformación <em>impecable</em>', en: 'Flawless <em>restoration</em>' },
  lede: {
    es: 'Arrastra el control para comparar el estado original con el resultado entregado.',
    en: 'Drag the handle to compare the original condition with the delivered result.',
  },
  before: { img: antes, alt: { es: 'Interior antes de la restauración', en: 'Interior before restoration' } },
  after: { img: despues, alt: { es: 'Interior restaurado', en: 'Restored interior' } },
};

/* Real work gallery. */
export const galleryHead = {
  eyebrow: { es: 'Trabajos recientes', en: 'Recent work' },
  titleHtml: { es: 'Nuestro portafolio <em>a bordo</em>', en: 'Our portfolio <em>on board</em>' },
  lede: {
    es: 'Filtra por tipo de trabajo y haz clic en cualquier foto para verla en grande.',
    en: 'Filter by type of work and click any photo to see it full size.',
  },
};

export type GalleryCat = 'tapiceria' | 'interiores' | 'plasticos' | 'capotas';

export const galleryFilters: Array<{ key: GalleryCat | 'all'; label: Localized }> = [
  { key: 'all', label: { es: 'Todos', en: 'All' } },
  { key: 'tapiceria', label: { es: 'Tapicería', en: 'Upholstery' } },
  { key: 'interiores', label: { es: 'Interiores', en: 'Interiors' } },
  { key: 'plasticos', label: { es: 'Plásticos', en: 'Plastics' } },
  { key: 'capotas', label: { es: 'Capotas', en: 'Tops' } },
];

export interface Shot {
  img: ImageMetadata;
  cat: GalleryCat;
  alt: Localized;
  caption: Localized;
}

export const gallery: Shot[] = [
  {
    img: t01,
    cat: 'tapiceria',
    alt: { es: 'Cojinería de proa restaurada', en: 'Restored bow cushions' },
    caption: { es: "Cojinería de proa · 42' Express", en: "Bow cushions · 42' Express" },
  },
  {
    img: t02,
    cat: 'interiores',
    alt: { es: 'Camarote tapizado', en: 'Upholstered cabin' },
    caption: { es: 'Camarote principal', en: 'Master cabin' },
  },
  {
    img: t03,
    cat: 'capotas',
    alt: { es: 'Bimini y capota extendida instalados', en: 'Bimini and extended top installed' },
    caption: { es: 'Bimini & capota extendida', en: 'Bimini & extended top' },
  },
  {
    img: t04,
    cat: 'tapiceria',
    alt: { es: 'Asientos de mando tapizados', en: 'Upholstered helm seats' },
    caption: { es: 'Asientos de mando', en: 'Helm seating' },
  },
  {
    img: t05,
    cat: 'interiores',
    alt: { es: 'Plafón y paredes de salón tapizados', en: 'Upholstered salon headliner and walls' },
    caption: { es: 'Plafón & paredes de salón', en: 'Salon headliner & walls' },
  },
  {
    img: t06,
    cat: 'plasticos',
    alt: { es: 'Enclosure blando con ventanas de PVC cristal', en: 'Soft enclosure with clear PVC windows' },
    caption: { es: 'Enclosure blando · PVC cristal', en: 'Soft enclosure · clear PVC' },
  },
  {
    img: t07,
    cat: 'interiores',
    alt: { es: 'Muebles y colchón a medida en camarote de proa', en: 'Custom furniture and mattress in a bow cabin' },
    caption: { es: 'Muebles & colchón a medida', en: 'Custom furniture & mattress' },
  },
  {
    img: t08,
    cat: 'plasticos',
    alt: { es: 'Enclosure duro con back drop', en: 'Hard enclosure with back drop' },
    caption: { es: 'Enclosure duro & back drop', en: 'Hard enclosure & back drop' },
  },
];

import type { ImageMetadata } from 'astro';
import type { Localized } from '@/i18n';
import tallerPoster from '@/assets/posters/taller-poster.jpg';

/* Identity, contact and metadata. Owner-confirmed data only (see PRODUCT.md). */

const waMessage: Localized = {
  es: ' ¡Hola! Vi su sitio web y me interesa solicitar una cotización. ¿Me podrían indicar cuál es el proceso, por favor?',
  en: " Hi! I saw your website and I'd like to request a quote. Could you tell me how the process works, please?",
};

const mailSubject: Localized = {
  es: 'Cotización GroupMTS',
  en: 'GroupMTS quote',
};

export const site = {
  name: 'GroupMTS',
  legalName: 'Marine Tops Services LLC',
  tagline: 'Marine Tops · Puerto Rico',
  phoneDisplay: '(787) 932-8693',
  phoneHref: 'tel:+17879328693',
  phoneSchema: '+1-787-932-8693',
  email: 'marinetopsservicesllc@yahoo.com',
  instagram: 'https://www.instagram.com/mtsgroup.pr/',
  facebook: 'https://www.facebook.com/marinetopsLLCpr/',
  address: { locality: 'Fajardo', region: 'PR', postalCode: '00772', country: 'US' },
  openingHoursSchema: 'Mo-Fr 08:00-17:00',
  whatsapp: {
    es: `https://wa.me/17879328693?text=${encodeURIComponent(waMessage.es)}`,
    en: `https://wa.me/17879328693?text=${encodeURIComponent(waMessage.en)}`,
  } satisfies Localized,
  mailto: {
    es: `mailto:marinetopsservicesllc@yahoo.com?subject=${encodeURIComponent(mailSubject.es)}`,
    en: `mailto:marinetopsservicesllc@yahoo.com?subject=${encodeURIComponent(mailSubject.en)}`,
  } satisfies Localized,
};

export const meta = {
  title: {
    es: 'GroupMTS — Tapicería, interiores y plásticos náuticos en Puerto Rico',
    en: 'GroupMTS — Boat upholstery, interiors & marine plastics in Puerto Rico',
  },
  description: {
    es: 'Tapicería náutica, interiores completos y plásticos para botes en Puerto Rico. Cojinería, plafones, paredes, muebles, enclosures blandos y duros, back drops y capotas extendidas.',
    en: 'Marine upholstery, complete interiors and plastics for boats in Puerto Rico. Cushions, headliners, walls, furniture, soft and hard enclosures, back drops and extended tops.',
  },
  ogTitle: {
    es: 'GroupMTS — Tapicería, interiores y plásticos náuticos',
    en: 'GroupMTS — Marine Upholstery, Interiors & Plastics',
  },
  ogDescription: {
    es: 'Tapicería, interiores, plásticos y capotas para botes. Taller propio en Puerto Rico.',
    en: 'Upholstery, interiors, plastics and tops for boats. Our own shop in Puerto Rico.',
  },
  schemaDescription: {
    es: 'Tapicería náutica, interiores completos, plásticos, enclosures y capotas para botes y yates en Puerto Rico.',
    en: 'Marine upholstery, complete interiors, plastics, enclosures and tops for boats and yachts in Puerto Rico.',
  },
} satisfies Record<string, Localized>;

export const marquee: Localized[] = [
  { es: 'Tapicería y cojinería', en: 'Upholstery & cushions' },
  { es: 'Plafones', en: 'Headliners' },
  { es: 'Paredes y mamparos', en: 'Walls & bulkheads' },
  { es: 'Muebles a bordo', en: 'Onboard furniture' },
  { es: 'Enclosures blandos y duros', en: 'Soft & hard enclosures' },
  { es: 'Back drops', en: 'Back drops' },
  { es: 'Capotas extendidas', en: 'Extended tops' },
  { es: 'Hilo Tenara®', en: 'Tenara® thread' },
  { es: 'Acero inoxidable 316', en: '316 stainless steel' },
];

export const taller = {
  video: '/videos/taller.mp4',
  /* Real frame extracted from the video itself. */
  poster: tallerPoster as ImageMetadata,
  titleHtml: {
    es: 'Hecho en Puerto Rico,<br>en nuestro propio <em>taller</em>',
    en: 'Made in Puerto Rico,<br>in our own <em>shop</em>',
  },
  lede: {
    es: 'Tapicería, plásticos y carpintería bajo el mismo techo. Por eso podemos cubrir todas las áreas del bote sin subcontratar a nadie, y por eso una sola persona te responde por todo.',
    en: "Upholstery, plastics and woodwork under one roof. That's how we cover every area of the boat without subcontracting anyone, and why one person answers to you for all of it.",
  },
};

export const footerTagline: Localized = {
  es: 'Tapicería, interiores y plásticos náuticos · Puerto Rico',
  en: 'Marine upholstery, interiors and plastics · Puerto Rico',
};

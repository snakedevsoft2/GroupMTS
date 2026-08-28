import type { Localized } from '@/i18n';

/* Final contact CTA. Hard data (phone, email, socials) lives in site.ts. */

export const contact = {
  eyebrow: { es: 'Conecta con nosotros', en: 'Get in touch' },
  titleHtml: {
    es: 'Cuéntanos qué necesita<br>tu <em>embarcación</em>',
    en: 'Tell us what your<br><em>boat</em> needs',
  },
  lede: {
    es: 'Mándanos fotos por WhatsApp y te damos una orientación de precio el mismo día. Tapicería, interiores, plásticos o todo junto. Sin compromiso.',
    en: "Send us photos on WhatsApp and we'll give you a ballpark the same day. Upholstery, interiors, plastics or all of it. No obligation.",
  },
  buttons: {
    whatsapp: { es: 'WhatsApp directo', en: 'WhatsApp us' },
    instagram: { es: 'Ver Instagram', en: 'See Instagram' },
    facebook: { es: 'Facebook', en: 'Facebook' },
    email: { es: 'Escríbenos un correo', en: 'Email us' },
  } satisfies Record<string, Localized>,
  location: { es: 'Fajardo, Puerto Rico, 00772', en: 'Fajardo, Puerto Rico 00772' },
  hours: { es: 'Lun a Vie · 8:00 am – 5:00 pm', en: 'Mon–Fri · 8:00 am – 5:00 pm' },
};

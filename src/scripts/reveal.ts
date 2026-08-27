/* Revelado de secciones y máscaras al entrar en pantalla
   (portado de legacy/script.js). */
export function initReveal(): void {
  const els = Array.from(document.querySelectorAll('.reveal, .mask'));
  if (!('IntersectionObserver' in window)) {
    for (const el of els) el.classList.add('in');
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
  );
  for (const el of els) io.observe(el);
}

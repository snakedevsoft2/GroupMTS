import { onScroll, reduce } from './scroll';
import { initReveal } from './reveal';
import { initCursor } from './cursor';

/* Comportamiento global de la página: barra de progreso, parallax
   de fondos, revelado y cursor. (portado de legacy/script.js) */
export function initGlobal(): void {
  const bar = document.querySelector<HTMLElement>('.progress');
  if (bar) {
    onScroll(() => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${h > 0 ? Math.min(1, window.scrollY / h) : 0})`;
    });
  }

  const pxItems = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
  if (pxItems.length) {
    onScroll(() => {
      if (reduce) return;
      const vh = window.innerHeight;
      for (const el of pxItems) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) continue;
        const mid = r.top + r.height / 2 - vh / 2;
        const speed = parseFloat(el.dataset.parallax ?? '0');
        el.style.transform = `translate3d(0,${(mid * speed).toFixed(1)}px,0)`;
      }
    });
  }

  initReveal();
  initCursor();
}

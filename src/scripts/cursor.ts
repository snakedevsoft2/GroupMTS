import { reduce } from './scroll';

/* Custom cursor, magnetic hover and card spotlight.
   Fine pointers only, and never with reduced motion. */
export function initCursor(): void {
  const fine = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  if (!fine || reduce) return;

  const cur = document.querySelector<HTMLElement>('.cursor');
  const dot = document.querySelector<HTMLElement>('.cursor-dot');
  if (!cur || !dot) return;

  let cx = 0, cy = 0, tx = 0, ty = 0;
  document.addEventListener('mousemove', (e) => {
    tx = e.clientX;
    ty = e.clientY;
    dot.style.transform = `translate(${tx}px,${ty}px)`;
    document.body.classList.add('cursor-on');
  });
  (function loop() {
    cx += (tx - cx) * 0.16;
    cy += (ty - cy) * 0.16;
    cur.style.transform = `translate(${cx.toFixed(2)}px,${cy.toFixed(2)}px)`;
    requestAnimationFrame(loop);
  })();

  for (const el of document.querySelectorAll('a, button, .shot, summary, .ba')) {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hot'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hot'));
  }

  for (const el of document.querySelectorAll<HTMLElement>('[data-magnetic]')) {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const dx = ((e.clientX - r.left - r.width / 2) * 0.22).toFixed(1);
      const dy = ((e.clientY - r.top - r.height / 2) * 0.34).toFixed(1);
      el.style.transform = `translate(${dx}px,${dy}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transition = 'transform .5s cubic-bezier(.22,.61,.36,1)';
      el.style.transform = '';
      setTimeout(() => { el.style.transition = ''; }, 500);
    });
  }

  for (const el of document.querySelectorAll<HTMLElement>('[data-spotlight]')) {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${(((e.clientX - r.left) / r.width) * 100).toFixed(1)}%`);
      el.style.setProperty('--my', `${(((e.clientY - r.top) / r.height) * 100).toFixed(1)}%`);
    });
  }
}

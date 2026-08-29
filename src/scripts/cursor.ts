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
  /* La lancha mira hacia donde navega (flip suave) y cabecea con la velocidad. */
  let dir = 1, dirTarget = 1, tilt = 0;
  document.addEventListener('mousemove', (e) => {
    tx = e.clientX;
    ty = e.clientY;
    dot.style.transform = `translate(${tx}px,${ty}px)`;
    document.body.classList.add('cursor-on');
  });
  (function loop() {
    const dx = tx - cx;
    const dy = ty - cy;
    cx += dx * 0.16;
    cy += dy * 0.16;
    if (Math.abs(dx) > 1.5) dirTarget = dx > 0 ? 1 : -1;
    dir += (dirTarget - dir) * 0.14;
    const tiltTarget = Math.max(-9, Math.min(9, dx * 0.3));
    tilt += (tiltTarget - tilt) * 0.1;
    cur.style.transform = `translate(${cx.toFixed(2)}px,${cy.toFixed(2)}px) scaleX(${dir.toFixed(3)}) rotate(${tilt.toFixed(1)}deg)`;
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

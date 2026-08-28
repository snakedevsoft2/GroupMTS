/* Single rAF scroll loop: every component registers its task here
   so they all run in the same frame. */
export const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

type Task = () => void;
const tasks: Task[] = [];
let ticking = false;

function run(): void {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    for (const task of tasks) task();
    ticking = false;
  });
}

/** Registers a scroll/resize task and runs it once right away. */
export function onScroll(task: Task): void {
  tasks.push(task);
  task();
}

window.addEventListener('scroll', run, { passive: true });
window.addEventListener('resize', run, { passive: true });

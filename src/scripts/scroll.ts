/* Bucle único de scroll con rAF (portado de legacy/script.js):
   cada componente registra su tarea y todas corren en el mismo frame. */
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

/** Registra una tarea de scroll/resize y la ejecuta una vez de entrada. */
export function onScroll(task: Task): void {
  tasks.push(task);
  task();
}

window.addEventListener('scroll', run, { passive: true });
window.addEventListener('resize', run, { passive: true });

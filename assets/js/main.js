// Project data: edit this array to update the portfolio. Sample data below.
const PROJECTS = [
  {
    year: 2025,
    name: 'ventflow',
    desc: 'Solver 1D de ventilación en redes de túneles: volúmenes finitos, esquema upwind y theta-method implícito para transitorios de incendio.',
    metric: ['6×', 'más rápido que la herramienta comercial que sustituye'],
    tags: ['C++', 'Python', 'Numérico'],
    repo: 'https://github.com/alexvilla000/ventflow',
  },
  {
    year: 2024,
    name: 'ductnet studio',
    desc: 'Editor web de redes de conductos con cálculo en vivo de caudales y pérdidas de carga mientras se dibuja.',
    metric: ['300+', 'ingenieros lo usan cada semana'],
    tags: ['TypeScript', 'React', 'Web'],
    repo: 'https://github.com/alexvilla000/ductnet-studio',
    demo: 'https://example.com',
  },
  {
    year: 2024,
    name: 'riemann-lab',
    desc: 'Cuadernos interactivos para comparar solvers de Riemann (Roe, HLL, HLLC) sobre el tubo de choque de Sod.',
    tags: ['Python', 'Numérico'],
    repo: 'https://github.com/alexvilla000/riemann-lab',
    demo: 'https://example.com',
  },
  {
    year: 2023,
    name: 'simqueue',
    desc: 'API para lanzar lotes de simulaciones en contenedores, con cola de trabajos y resultados en PostgreSQL.',
    metric: ['12 000', 'escenarios calculados en el último proyecto'],
    tags: ['Python', 'FastAPI', 'Docker', 'Web'],
    repo: 'https://github.com/alexvilla000/simqueue',
  },
  {
    year: 2022,
    name: 'moody-rs',
    desc: 'Librería en Rust para factores de fricción (Colebrook, Swamee-Jain, Haaland) con tests contra tablas de referencia.',
    tags: ['Rust', 'Numérico'],
    repo: 'https://github.com/alexvilla000/moody-rs',
  },
  {
    year: 2021,
    name: 'sensorboard',
    desc: 'Panel para monitorizar anemómetros y opacímetros de un túnel en tiempo real, con alarmas configurables.',
    tags: ['TypeScript', 'React', 'Docker', 'Web'],
    demo: 'https://example.com',
  },
];

const listEl = document.querySelector('.projects');
const filtersEl = document.querySelector('.filters');
let activeTag = 'Todos';

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'text') node.textContent = v;
    else node.setAttribute(k, v);
  }
  for (const child of children) node.append(child);
  return node;
}

function renderFilters() {
  const tags = ['Todos', ...new Set(PROJECTS.flatMap((p) => p.tags))];
  filtersEl.replaceChildren(
    ...tags.map((tag) => {
      const btn = el('button', { type: 'button', 'aria-pressed': String(tag === activeTag), text: tag });
      btn.addEventListener('click', () => {
        activeTag = tag;
        renderFilters();
        renderProjects();
      });
      return btn;
    })
  );
}

function renderProjects() {
  const visible = PROJECTS.filter((p) => activeTag === 'Todos' || p.tags.includes(activeTag));
  if (!visible.length) {
    listEl.replaceChildren(el('li', { class: 'empty', text: 'No hay proyectos con esta tecnología.' }));
    return;
  }
  listEl.replaceChildren(
    ...visible.map((p) => {
      const body = el('div', {}, [el('h3', { text: p.name }), el('p', { class: 'desc', text: p.desc })]);
      if (p.metric) {
        body.append(el('p', { class: 'metric' }, [el('strong', { text: p.metric[0] }), ` ${p.metric[1]}`]));
      }
      const links = el('div', { class: 'links' });
      if (p.repo) links.append(el('a', { href: p.repo, text: 'Código' }));
      if (p.demo) links.append(el('a', { href: p.demo, text: 'Demo' }));
      return el('li', { class: 'project' }, [
        el('span', { class: 'year', text: p.year }),
        body,
        el('ul', { class: 'tags', 'aria-label': 'Tecnologías' }, p.tags.map((t) => el('li', { text: t }))),
        links,
      ]);
    })
  );
}

// Theme toggle
document.querySelector('.theme-toggle').addEventListener('click', () => {
  const root = document.documentElement;
  const current = root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const next = current === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// Highlight the nav link of the section in view
const navLinks = [...document.querySelectorAll('.nav a')];
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      navLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`));
    }
  },
  { rootMargin: '-40% 0px -55% 0px' }
);
document.querySelectorAll('main section[id]').forEach((s) => observer.observe(s));

document.getElementById('year').textContent = new Date().getFullYear();
renderFilters();
renderProjects();

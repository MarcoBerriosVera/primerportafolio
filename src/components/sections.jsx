const skills = [
  {
    group: 'Ciberseguridad',
    items: [
      'Escaneo de redes (nmap, Fing)',
      'Análisis básico de vulnerabilidades',
      'Hardening básico',
      'Laboratorios prácticos',
    ],
  },
  {
    group: 'Soporte TI',
    items: [
      'Instalación de sistemas operativos',
      'Revisión de equipos y escaneo de malware',
      'Cambio de componentes (discos duros)',
      'Conexión de impresoras a la red',
    ],
  },
  {
    group: 'Desarrollo',
    items: ['JavaScript', 'Python', 'SQL', 'React', 'Next.js'],
  },
];

// Agrega aquí solo proyectos que ya estén subidos a GitHub y que puedas
// explicar en una entrevista. Plantilla:
// {
//   title: 'Laboratorio de Active Directory',
//   description: 'Dominio de prueba con usuarios, grupos y políticas.',
//   tech: ['Windows Server', 'VirtualBox'],
//   href: 'https://github.com/MarcoBerriosVera/nombre-del-repo',
// },
const projects = [
  {
    title: 'Este portafolio',
    description:
      'Sitio personal hecho con Next.js, React y Tailwind CSS, publicado en Vercel.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    href: 'https://github.com/MarcoBerriosVera/primerportafolio',
  },
];

function SectionTitle({ children }) {
  return <h2 className="mb-4 text-xl font-semibold">{children}</h2>;
}

export function Skills() {
  return (
    <section>
      <SectionTitle>Habilidades</SectionTitle>
      <div className="grid gap-4 sm:grid-cols-3">
        {skills.map((s) => (
          <div
            key={s.group}
            className="rounded-xl border border-black/10 p-5 dark:border-white/20"
          >
            <h3 className="mb-2 font-medium">{s.group}</h3>
            <ul className="list-inside list-disc space-y-1 text-sm opacity-90">
              {s.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section>
      <SectionTitle>Proyectos</SectionTitle>
      <div className="space-y-4">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-xl border border-black/10 p-5 dark:border-white/20"
          >
            <h3 className="font-medium">{p.title}</h3>
            <p className="mt-1 text-sm opacity-90">{p.description}</p>
            <p className="mt-2 text-xs opacity-70">{p.tech.join(' · ')}</p>
            <a
              className="mt-3 inline-block text-sm underline underline-offset-4"
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section>
      <SectionTitle>Contacto</SectionTitle>
      <p className="text-sm">
        Escríbeme a{' '}
        <a
          className="underline underline-offset-4"
          href="mailto:marcoberriosvera@gmail.com"
        >
          marcoberriosvera@gmail.com
        </a>
      </p>
    </section>
  );
}

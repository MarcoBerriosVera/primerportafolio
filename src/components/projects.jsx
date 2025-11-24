"use client";
import styles from './projects.module.css';

const projects = [
  {
    title: 'SecureVault IAM',
    tech: 'React, Node.js (Express), PostgreSQL, JWT, Bcrypt',
    desc:
      'Desarrollo Full-Stack con enfoque en autenticación. Gestión de usuarios, roles y permisos (IAM). Implementación segura de JSON Web Tokens (JWT) y hashing robusto para passwords.',
  },
  {
    title: 'Sentinel Dashboard (SIEM Lite)',
    tech: 'React, Node.js, WebSocket (Socket.io), Winston, REST APIs',
    desc:
      'Interfaz de monitoreo en tiempo real que consume logs de auditoría. Uso de WebSockets para notificaciones y alertas de seguridad.',
  },
  {
    title: 'CryptoInvoice Platform',
    tech: 'React, Node.js (Express), MongoDB, Joi, RBAC',
    desc:
      'Plataforma para emisión y gestión de facturas con API RESTful y validación estricta de datos. Implementación de control de acceso basado en roles.',
  },
  {
    title: 'E-commerce API (Hardened)',
    tech: 'Node.js (Express), MongoDB, Rate Limiting, Helmet.js, Mocha/Chai',
    desc:
      'API backend de alto rendimiento con foco en seguridad: Helmet, rate limiting y testing para rutas críticas.',
  },
  {
    title: 'Portafolio Interactivo',
    tech: 'React, CSS Modules, Next.js (SSG), Markdown',
    desc:
      'Frontend optimizado para rendimiento (Web Vitals) y diseño responsive, usando Next.js para SSG.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection} aria-labelledby="projects-heading">
      <div className={styles.container}>
        <h2 id="projects-heading" className={styles.sectionTitle}>🛠️ Proyectos Destacados <small className={styles.small}>(Node.js, React & Ciberseguridad)</small></h2>
        <p className={styles.sectionDescription}>
          Estos proyectos demuestran mi capacidad para desarrollar soluciones web robustas, seguras y escalables,
          combinando el frontend moderno con backends potentes y prácticas de ciberseguridad.
        </p>

        <div className={styles.projectsGrid}>
          {projects.map((p) => (
            <article key={p.title} className={styles.projectCard}>
              <h3 className={styles.projectTitle}>{p.title}</h3>
              <p className={styles.technologies}>{p.tech}</p>
              <p className={styles.description}>{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

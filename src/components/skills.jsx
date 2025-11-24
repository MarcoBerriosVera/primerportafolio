// src/app/components/skills.jsx
import styles from './skills.module.css';

// 1. CAMBIO IMPORTANTE: La función debe empezar con Mayúscula (Skills)
export default function Skills() {
  
  // 2. He renombrado la variable de datos a 'skillsData' para evitar confusiones
  const skillsData = [
    {
      title: "Backend & Bases de Datos",
      items: [
        "Node.js (Express & API REST)",
        "PostgreSQL (SQL Relacional)",
        "MongoDB (NoSQL)",
        "Prisma ORM (Gestión de esquemas)",
        "Autenticación (JWT, Bcrypt)"
      ]
    },
    {
      title: "Frontend Moderno",
      items: [
        "JavaScript (ES6+)",
        "React.js (Hooks, Context)",
        "Next.js (App Router, SSG/SSR)",
        "CSS Modules & Responsive Design",
        "Consumo de APIs & Fetch"
      ]
    },
    {
      title: "Herramientas & Seguridad",
      items: [
        "Ciberseguridad & Hardening",
        "Git & GitHub (Control de versiones)",
        "Postman (Testing de APIs)",
        "VS Code & Entornos Linux",
        "Docker (Conceptos básicos)"
      ]
    }
  ];

  return (
    <section id="skills" className={styles.container}>
      <h2 className={styles.heading}>🛠️ Stack Tecnológico</h2>
      <p className={styles.intro}>
        Conjunto de tecnologías y herramientas que utilizo para desarrollar soluciones 
        web robustas, seguras y escalables, abarcando desde la interfaz de usuario 
        hasta la arquitectura del servidor.
      </p>

      <div className={styles.grid}>
        {/* 3. Actualizamos el map para usar 'skillsData' */}
        {skillsData.map((category, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{category.title}</h3>
            <ul className={styles.list}>
              {category.items.map((tech, idx) => (
                <li key={idx} className={styles.listItem}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from './header.module.css';

export default function Header({ onNavClick }) {
  const [open, setOpen] = useState(false);

  function handleNav(section, e) {
    if (e) e.preventDefault();
    setOpen(false);
    // Esto envía 'about', 'skills', 'projects', etc. a page.js
    if (typeof onNavClick === 'function') onNavClick(section);
  }

  function scrollToContact() {
    // Request the page to show only the contact section
    if (typeof onNavClick === 'function') onNavClick('contact');
    setOpen(false);
  }

  return (
    <header className={`${styles.header} ${open ? styles.open : ''}`}>
      <div className={styles.left}>
        <Image
          src="/images/mifoto.jpg"
          alt="Mi foto"
          width={56}
          height={56}
          priority
          className={styles.logo}
          style={{ cursor: 'pointer' }}
          onClick={() => handleNav('about')}
          role="button"
          aria-label="Ir al inicio"
        />
        <div>
          <h1 className={styles.title}>Marco Enrique Berrios Vera</h1>
          <p className={styles.titleSmall}>Soporte técnico · Frontend · Portafolio profesional</p>
        </div>
      </div>

      <button
        className={styles.hamburger}
        aria-expanded={open}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        onClick={() => setOpen(v => !v)}
      >
        <span className={styles.hamburgerInner} />
      </button>

      <nav className={`${styles.nav} ${open ? styles.open : ''}`} aria-label="Main navigation">
        <a href="#about" onClick={(e) => handleNav('about', e)}>Acerca de mi</a>
        
        {/* --- CAMBIO AQUÍ: De Empleos a Stack Tecnológico --- */}
        <a href="#skills" onClick={(e) => handleNav('skills', e)}>Stack Tecnológico</a>
        
        <a href="#projects" onClick={(e) => handleNav('projects', e)}>Proyectos</a>
        <button className={styles.cta} onClick={scrollToContact}>Contacto</button>
      </nav>
    </header>
  );
}
"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from './profilecard.module.css';

export default function ProfileCard() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isDecrypting, setIsDecrypting] = useState(false);

  const handleUnlock = () => {
    setIsDecrypting(true);
    // Simula desencriptado de 800ms
    setTimeout(() => {
      setIsUnlocked(true);
      setIsDecrypting(false);
    }, 800);
  };

  return (
    <section id="about" className={styles.container}>
      <h2 className={styles.heading}>Sobre Mí</h2>
      
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/mifoto.jpg" 
            alt="Foto de perfil"
            width={280}
            height={280}
            className={styles.profileImage}
            priority
          />
        </div>

        <div className={styles.content}>
          <div>
            <span className={styles.subheading}>Perfil Profesional</span>
            <h3 className={styles.name}>Marco Enrique Berrios Vera</h3>
          </div>

          <p className={styles.text}>
            Soy un profesional apasionado por la tecnología, enfocado en 
            <strong style={{color: '#fff'}}> proteger activos digitales y crear soluciones eficientes</strong>. 
            Mi enfoque combina una visión estratégica de la seguridad con la capacidad 
            técnica para implementar defensas robustas y escalables.
          </p>

          <p className={styles.text}>
            Me especializo en <strong>Ciberseguridad y Defensa Digital</strong>, desde el diseño de 
            arquitecturas seguras hasta el hacking ético preventivo.
          </p>

          {/* --- ZONA PROTEGIDA ANTI-SCRAPING --- */}
          <div className={styles.lockedContainer}>
            
            {/* CAPA DE BLOQUEO */}
            {!isUnlocked && (
              <div className={styles.overlay}>
                <div className={styles.lockIcon}>🔒</div>
                <button 
                  className={styles.unlockBtn} 
                  onClick={handleUnlock}
                  disabled={isDecrypting}
                >
                  {isDecrypting ? 'VERIFICANDO...' : 'VERIFICAR HUMANO & MOSTRAR'}
                </button>
                {isDecrypting && <div className={styles.scanning} />}
              </div>
            )}

            {/* CONTENIDO REAL */}
            <div className={isUnlocked ? '' : styles.blurred}>
              <div style={{ marginBottom: '0.8rem', fontSize: '0.9rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <strong>Identidad Digital Verificada:</strong>
              </div>
              
              <div className={styles.socialLinks}>
                <a 
                  href="https://www.linkedin.com/in/marco-berrios-vera-40845b103/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/MarcoBerriosVera" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          {/* --- FIN ZONA PROTEGIDA --- */}

        </div>
      </div>
    </section>
  );
}
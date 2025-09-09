import Image from 'next/image';
import styles from './profilecard.module.css';

export default function ProfileCard() {
  return (
    <section>
      <Image
        className={styles.profileimage}
        src="/images/logo 3.png" 
        alt="Tu Foto de Perfil"
        width={200}
        height={200}
      /> 
      <p className={styles.bio}>soy super simpatico, soy lindo pero por dentro :D</p>
      <nav className={styles.socialLinks}>
        <a href="https://www.linkedin.com/in/marco-berrios-vera-40845b103">LinkedIn</a>
        <a href="https://github.com/MarcoBerriosVera">GitHub</a>
      </nav>
    </section>
  );
}
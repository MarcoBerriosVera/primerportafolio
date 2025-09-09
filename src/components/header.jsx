import styles from './header.module.css';


export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Marco Enrique Berrios Vera</h1>
      <p>Técnico en soportar gente :D</p>
    </header>
  );
}
import style from './header.module.css';


export default function Header() {
  return (
    <header className={style.header}>
      <h1 classname={style.title}>Marco Enrique Berrios Vera</h1>
      <p>Técnico en soportar gente :D</p>
    </header>
  );
}
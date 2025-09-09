import Image from 'next/image';

export default function ProfileCard() {
  return (
    <section>
      <Image
        src="/images/logo 3.png" 
        alt="Tu Foto de Perfil"
        width={200}
        height={200}
      /> 
      <p>soy super simpatico, soy lindo pero por dentro :D</p>
      <nav>
        <a href="www.linkedin.com/in/marco-berrios-vera-40845b103">LinkedIn</a>
        <a href="https://github.com/MarcoBerriosVera">GitHub</a>
      </nav>
    </section>
  );
}
import Image from 'next/image';

export default function ProfileCard() {
  return (
    <section className="text-center">
      <Image
        className="mx-auto rounded-full object-cover"
        src="/images/logo 3.png"
        alt="Foto de perfil de Marco Berrios"
        width={160}
        height={160}
      />
      <p className="mx-auto mt-6 max-w-xl leading-relaxed">
        Técnico Informático titulado con mención en Ciberseguridad. Me gusta
        resolver problemas y ayudar a las personas a sacarle partido a la
        tecnología. Sigo formándome en redes, seguridad y soporte TI.
      </p>
      <nav className="mt-4 flex justify-center gap-6 font-medium">
        <a
          className="underline underline-offset-4"
          href="https://www.linkedin.com/in/marco-berrios-vera-40845b103"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="underline underline-offset-4"
          href="https://github.com/MarcoBerriosVera"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </nav>
    </section>
  );
}

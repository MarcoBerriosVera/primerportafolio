// layout.js
import './globals.css';

export const metadata = {
  title: "Portafolio de Marco Berrios - Soporte Técnico y Desarrollo Web",
  description: "Fondo animado de lava en Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        <div className="lava-bg">
          <div className="content">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

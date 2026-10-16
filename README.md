# Portafolio - MiPrimerPortafolio

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 🛠️ Configuración e Instalación (Base de Datos)

Para correr este proyecto localmente con la conexión a base de datos, sigue estos pasos:

### 1. Prerrequisitos
Asegúrate de tener instalado:
- Node.js (v16 o superior)
- PostgreSQL ejecutándose localmente

### 2. Instalación de dependencias
```bash
npm install


## paso a paso 
# Descargar el código (git clone).

# Instalar librerías: npm install.

# Crear el archivo .env (copiando el .env.example).

# Crear la base de datos: npx prisma migrate dev.

# Correr el proyecto: npm run dev.

## Con Docker

```bash
cp .env.example .env     # luego edita .env y cambia las claves
docker compose up --build
```

`docker-compose.yml` lee las claves desde `.env`. Si falta alguna, Docker se detiene y avisa en vez de usar una clave por defecto. Nunca subas tu `.env` a GitHub.

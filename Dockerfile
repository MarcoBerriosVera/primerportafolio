# 1. Usamos una versión ligera de Node como base
FROM node:18-alpine

# 2. Creamos la carpeta dentro del contenedor donde vivirá tu app
WORKDIR /app

# 3. Copiamos los archivos de definición de paquetes primero
# (Esto es un truco de Docker para que la instalación sea más rápida si no cambian las dependencias)
COPY package*.json ./

# 4. Copiamos la carpeta de prisma para poder generar el cliente
COPY prisma ./prisma/

# 5. Instalamos las dependencias
RUN npm install

# 6. IMPORTANTE: Generamos el cliente de Prisma para Linux (el entorno del contenedor)
RUN npx prisma generate

# 7. Copiamos el resto del código de tu proyecto
COPY . .

# 8. Exponemos el puerto (Ajusta si tu app usa otro, por defecto Next/React suelen usar 3000)
EXPOSE 3000

# 9. El comando para iniciar la app en modo desarrollo
CMD ["npm", "run", "dev"]
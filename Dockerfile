# 1. Imagen base ligera
FROM node:18-alpine

# 2. Carpeta de trabajo
WORKDIR /app

# 3. Copiar dependencias
COPY package*.json ./
COPY prisma ./prisma/

# 4. Instalar librerías
RUN npm install

# 5. Generar cliente de BD
RUN npx prisma generate

# 6. Copiar código fuente
COPY . .

# 7. CONSTRUIR (Aquí usa el script "build" de tu package.json)
# Al quitarle --turbopack, esto será mucho más estable en Docker
RUN npm run build

# 8. Puerto
EXPOSE 3000

# 9. INICIAR EN PRODUCCIÓN
CMD ["npm", "start"]
# Этап 1: Сборка (Node.js)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Этап 2: Запуск (Nginx)
FROM nginx:alpine
# Копируем собранные файлы из папки dist (результат работы Vite) в папку Nginx
COPY --from=builder /app/dist /usr/share/nginx/html
# Копируем базовый конфиг Nginx для правильной работы React-роутера
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
FROM node:18.16-alpine as builder
WORKDIR /front
COPY frontend/package*.json .
RUN npm install
COPY frontend/ .
RUN npm run build

FROM python:3.10.7-bullseye as backend

WORKDIR /app
COPY backend/requirements.txt .
RUN pip install -r requirements.txt
COPY /backend ./backend


RUN apt update -qq
RUN apt-get install nginx -qq -y

# Remover archivos innecesarios
RUN rm -rf /usr/share/nginx/html/*
RUN rm -r /etc/nginx/sites-enabled
RUN rm -r /etc/nginx/sites-available

# Copiar estaticos
COPY --from=builder front/dist ../usr/share/nginx/html
COPY deployment/default.conf /etc/nginx/conf.d/default.conf
COPY deployment/nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000
EXPOSE 80


CMD ["bash", "-c", "uvicorn backend.app:app --host 0.0.0.0  --port 3000 & nginx -g 'daemon off;'"]

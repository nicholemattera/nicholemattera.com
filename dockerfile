FROM node:lts-alpine AS builder

WORKDIR /app
COPY . /app

RUN npm ci
RUN npm run build

FROM nginx:alpine AS prod

COPY scripts/nginx.config /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

FROM node:14-alpine AS builder
ARG build_env=development
ARG react_app_url
ENV REACT_APP_API_URL=${react_app_url}
ENV NODE_ENV=${build_env}
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install --legacy-peer-deps && npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
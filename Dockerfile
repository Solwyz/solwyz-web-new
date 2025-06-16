# Stage 1: Build the React app
FROM node:22-alpine AS builder
ARG build_env=development
ARG react_app_url
ENV REACT_APP_API_URL=${react_app_url}
ENV NODE_ENV=${build_env}
WORKDIR /app
 
# Copy only package.json and package-lock.json (use .dockerignore for other files)
COPY package*.json ./
RUN npm install --legacy-peer-deps
 
# Copy the rest of the app and build it
COPY . ./
RUN npm run build
 
# Stage 2: Set up Nginx to serve the built app
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
 
# Remove default content
RUN rm -rf ./*
 
# Copy the built app from the builder stage
COPY --from=builder /app/dist ./
 
# Remove default Nginx config and replace it with your custom one
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
 
# Expose port and set Nginx to run in the foreground
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
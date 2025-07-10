FROM node:current-alpine3.22 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build -- --configuration=production

FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/memoria-nebulae-angular /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
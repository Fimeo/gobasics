# Stage 1: build the static site
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests first for layer caching
COPY package.json package-lock.json ./

RUN npm ci --frozen-lockfile

# Copy source
COPY . .

RUN npm run build

# Stage 2: serve with nginx
FROM nginx:alpine

# Remove default nginx page
RUN rm -rf /usr/share/nginx/html/*

# Copy built static files
COPY --from=builder /app/build /usr/share/nginx/html

# Clean nginx config and add one suited for SPA/static sites
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

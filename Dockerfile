# Stage 1: Build the Angular application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy the built application
COPY --from=builder /app/dist/jeedom-ui /usr/share/nginx/html

# Copy custom Nginx configuration if needed
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

LABEL org.opencontainers.image.source=https://github.com/pifou25/jeedom-ui
LABEL org.opencontainers.image.description="Angular standalone interface for Jeedom Home Automation"
LABEL org.opencontainers.image.licenses=MIT

# Start Nginx
# CMD ["nginx", "-g", "daemon off;"]
# When the container starts, replace the env.js with values from environment variables
CMD ["/bin/sh",  "-c", \
  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
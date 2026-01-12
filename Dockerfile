# Stage 1: Build the Hugo site
FROM hugomods/hugo AS builder

WORKDIR /src
COPY . .
# Build the site directly to the public folder
RUN hugo 

# Stage 2: Serve the site with Nginx
FROM nginx:alpine

# Copy the built site from the builder stage
COPY --from=builder /src/public /usr/share/nginx/html

# Copy custom Nginx configuration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 3004
EXPOSE 3004

CMD ["nginx", "-g", "daemon off;"]

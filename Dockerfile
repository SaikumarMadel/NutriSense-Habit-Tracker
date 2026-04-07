# Use the official lightweight Nginx image
FROM nginx:alpine

# Copy the static website files to exactly where Nginx expects them
COPY . /usr/share/nginx/html

# Expose port 8080 (Cloud Run default)
EXPOSE 8080

# Cloud run requires the server to listen on the $PORT environment variable.
# We modify the default nginx config to listen on that port.
CMD ["/bin/sh", "-c", "sed -i 's/listen  *80;/listen '${PORT:-8080}';/g' /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]

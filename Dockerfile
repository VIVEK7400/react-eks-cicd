# Stage 1: Build the React application
FROM node:22-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the React source code
COPY . .

# Build the production application
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Remove the default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy the React production build
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the web server port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

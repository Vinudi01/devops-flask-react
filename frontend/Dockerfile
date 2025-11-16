# Gunakan image node.js
FROM node:18

WORKDIR /app

# Set environment development supaya devDependencies ikut terinstall
ENV NODE_ENV=development

# Accept build argument for API URL
ARG REACT_APP_API_URL=http://flask-backend:5000
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# Copy package.json dan package-lock.json sebelum menginstall dependencies
COPY package.json package-lock.json . 

# Install dependencies
RUN npm install

# Copy seluruh kode aplikasi
COPY . .

# Build React app (optional, jika kamu ingin melakukan build sebelum container dijalankan)
RUN npm run build

# Gunakan Nginx untuk serve hasil build React
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

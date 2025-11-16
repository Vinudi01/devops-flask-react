FROM node:18

WORKDIR /app

# Set environment development supaya devDependencies ikut terinstall
ENV NODE_ENV=development

# Accept build argument for API URL
ARG REACT_APP_API_URL=http://backend:5000
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# Copy package.json
COPY package.json . 

# Install dependencies
RUN npm install

# Copy seluruh kode
COPY . .

# Build React app
RUN npm run build

# Serve dengan nginx
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

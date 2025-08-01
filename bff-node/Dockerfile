FROM node:18-alpine as build
WORKDIR /app
copy package*.json ./
Run npm install
copy . .
EXPOSE 5000
CMD ["node","index.js"]
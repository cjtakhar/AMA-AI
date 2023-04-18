FROM node:18-alpine

RUN npm install -g serve

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY nginx.conf /etc/nginx/nginx.conf

RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "build"]


FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

COPY server.js .

EXPOSE 8080

CMD [ "node", "server.js" ]


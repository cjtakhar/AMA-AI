FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm run build

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]

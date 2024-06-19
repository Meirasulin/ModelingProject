FROM node:20.12-alpine

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "dev" ]
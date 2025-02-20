FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

ENV PORT=8000

CMD [ "npm", "run", "watch" ]

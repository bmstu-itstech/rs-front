FROM node:alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm i

COPY . ./

EXPOSE 3000

ENTRYPOINT ["npm", "run", "dev"]

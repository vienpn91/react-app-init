FROM node:12.13.1-alpine

WORKDIR /usr/src/app

RUN npm install -g yarn

COPY . .

RUN yarn

EXPOSE 3000

CMD [ "yarn", "start" ]
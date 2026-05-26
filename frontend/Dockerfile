FROM node:jod-alpine3.23

WORKDIR /frontend

COPY package.json .

RUN yarn install

COPY . .

RUN yarn run build

EXPOSE 3000

CMD ["yarn", "start"]

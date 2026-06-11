FROM node:20-alpine3.18 AS build

WORKDIR /frontend

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn run build


FROM nginx:alpine

COPY --from=build /frontend/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


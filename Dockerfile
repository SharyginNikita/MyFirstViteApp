FROM node:15 as builder

WORKDIR /app

COPY . .

RUN yarn set version berry
RUN yarn > /dev/null
RUN yarn build

RUN ls /app

FROM nginx:alpine

COPY default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html
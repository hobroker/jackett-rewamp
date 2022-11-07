FROM node:16-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .
RUN npm run build

FROM linuxserver/jackett:0.20.1685 AS BUILD_IMAGE

RUN rm -rf /app/Jackett/Content/

COPY public/ /app/Jackett/Content/

EXPOSE 9117

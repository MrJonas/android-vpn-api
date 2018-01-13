FROM node:carbon

ADD . /opt/vpn-app/app

WORKDIR /opt/vpn-app/app

RUN npm install

EXPOSE 3010

ENV NODE_ENV production

ENTRYPOINT node app.js
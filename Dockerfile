FROM node:4.4.7


ADD package.json /tmp/package.json

RUN cd /tmp/ && npm install --production

RUN mkdir -p /var/www && cp -a /tmp/node_modules /var/www

WORKDIR /var/www

ADD . /var/www

EXPOSE 8050

ENTRYPOINT  ["npm", "start"]

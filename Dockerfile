FROM node:4.4.7

COPY . /var/www

WORKDIR /var/www

RUN npm install

EXPOSE 8050

ENTRYPOINT  ["npm", "start"]

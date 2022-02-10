FROM node:14.8.0-alpine
RUN npm install -g npm@6.14.7
RUN mkdir -p /var/www/logger
WORKDIR /var/www/logger
ADD . /var/www/logger
RUN npm install
CMD npm start
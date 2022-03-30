FROM node:14.8.0-alpine
RUN apk add --no-cache bash --virtual .build-deps alpine-sdk python3
RUN npm install -g npm@6.14.7
RUN mkdir -p /var/www/logger
WORKDIR /var/www/logger
ADD . /var/www/logger
RUN npm install
COPY wait-for-it.sh /usr/local/bin/wait-for-it
RUN chmod +x /usr/local/bin/wait-for-it
CMD npm start

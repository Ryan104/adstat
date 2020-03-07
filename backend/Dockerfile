FROM node:latest

USER node
WORKDIR /home/node

COPY package*.json ./
RUN npm install --silent
COPY . .

EXPOSE 3000

# ENTRYPOINT /bin/bash

CMD [ "npm", "start" ]
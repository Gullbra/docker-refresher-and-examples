# syntax=docker/dockerfile:1
FROM node
WORKDIR /.
COPY . .
RUN npm i
RUN npm run echo
ENV DEV_NAME=Martin
CMD ["npm", "start"]
# EXPOSE 3100
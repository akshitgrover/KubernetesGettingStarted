FROM node:alpine

RUN apk update && apk add curl

WORKDIR /app

COPY server.js /app

EXPOSE 3000

ENTRYPOINT ["node"]

CMD ["server.js"]
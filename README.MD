# Typescript common tasks

Install npm and node.

Install the typescript compiler into npm

```
npm install -g typescript
```

# Redis 

Setup the connection using node-redis.

```

npm install redis
npm i --save-dev @types/redis

```

Compile and run with 

```
tsc
node dist/main.js
```

# Postgresql 

https://github.com/malthe/ts-postgres

npm init
npm install ts-postgres@latest

npm i node
npm i @types/node

# Rabbitmq 

npm i amqp-ts



# REST Api Server and Client

## Server

Reference
https://medium.com/@pankaj.itdeveloper/getting-started-using-typescript-with-node-js-and-express-6aff573667d5

http://www.cross-platform-blog.com/nodejs/typescript/nodejs-a-rest-web-api-expressjs-with-typescript/

npm install typescript
npm install express @types/express --save
npm install body-parser multer --save 

npm run tsc
node dist/main.js

## Client

npm init
npm install typed-rest-client --save
npm i node
npm i @types/node

Remember to configure the tsconfig.json for the settings to compile. 

tsc
node dist/main.js

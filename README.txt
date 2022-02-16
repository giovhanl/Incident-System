
npm init -y
npm i express
npm i --save-dev @types/cors @types/express @types/debug source-map-support tslint typescript
npm install -g ts-node
for all:
npm i express -g typescript nodemon ts-node @types/express @types/node
or/and for dev
npm i express -D typescript nodemon ts-node @types/express @types/node
tsc --init --> initialize tsconfig.json

for lints
npm install --save-dev eslint-plugin-prettier
npm install --save-dev --save-exact prettier

-- running dev/build
npm run start:dev
npm run build --> creates the /dest folder

-- install netjs cli
1. npm i -g @nestjs/cli
2. nest new IncidentSystem -- create new project
    npm run start:dev
3. nest generate module {user} -- create new module
4. nest generate controller {user} -- create new controller
5. nest generate service {user} -- creates new service

for mongoose
npm install --save mongoose @nestjs/mongoose

add-environment of the mongodb daemon 
run the mongod


for swagger:
npm install --save @nestjs/swagger swagger-ui-express

$ npm install --save @nestjs/passport passport passport-local
$ npm install --save-dev @types/passport-local

for sessions
npm install express-session

node: v16.13.1

angular CLI (ng)
npm install -g @angular/cli  ---> v. 13.2.3

client validator:
npm install --save class-validator
npm install --save class-transformer
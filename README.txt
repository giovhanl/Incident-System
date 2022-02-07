
npm init -y
npm i express
npm i --save-dev @types/cors @types/express @types/debug source-map-support tslint typescript
npm install -g ts-node
for all:
npm i express -g typescript nodemon ts-node @types/express @types/node
or/and for dev
npm i express -D typescript nodemon ts-node @types/express @types/node
tsc --init --> initialize tsconfig.json


-- running dev/build
npm run dev
npm run build --> creates the /dest folder

-- install netjs cli
1. npm i -g @nestjs/cli
2. nest new IncidentSystem -- create new project
    npm run start:dev
3. nest generate module {user} -- create new module
4. nest geneate controller {user} -- create new controller
5. nest generate service {user} -- creates new service

for mongoose
npm install --save mongoose @nestjs/mongoose
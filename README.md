# Argonautas

## Como rodar o projeto

### Frontend
`cd /packages/web/`

`npm install`

`npm run serve`

[Acessar para testar](http://localhost:8080)

### Backend
`cd /packages/server/`

`docker build -t argonautasback .`

`docker run -d -p 3000:3000 argonautasback`

[Acessar para testar](http://localhost:3000/estimarPraticagem?areaFundeio=3&idTrajeto=14)

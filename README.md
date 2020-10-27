npm init -> Inicia um projeto backend node
npm install -> Instala as dependências necessárias para o projeto
npm install express -> Instala framework para trabalhar com os verbos HTTP
npm install body-parser -> Instala biblioteca para tratamento de json

URL -> http://localhost:3000
Endpoint ou Rota -> [GET] /mensagem
Endpoint ou Rota -> [POST] /mensagem

Endpoint: [GET] /mensagem
Descrição: Ler todas as mensagens

Endpoint: [POST] /mensagem
Descrição: Criar uma mensagem

Endpoint: [GET] /mensagem/{id}
Descrição: Ler mensagem específica pelo ID
Exemplo: [GET] /mensagem/1

Endpoint: [PUT] /mensagem/{id}
Descrição: Edita mensagem específica pelo ID

Endpoint: [DELETE] /mensagem/{id}
Descrição: Remove mensagem específica pelo ID

REST: GET, POST, PUT, DELETE, entre outros RESTful: aplicação segue as boas práticas de REST (Get para leitura, Post para criação, e nomenclaturas dos endpoints)
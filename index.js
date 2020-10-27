const express = require('express')
const bodyParser = require('body-parser')
const app = express()
 
const port = 3000

app.use(bodyParser.json())

const mensagens = ['Mensagem 1', 'Mensagem 2']

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
//create
app.post('/mensagem', function(req, res) {

    const texto = req.body.texto

    mensagens.push(texto)

    res.send('Mensagem adicionada com sucesso!')
})

//read single

app.get('/mensagem/:id', function(req, res){
    const id = req.params.id
    const mensagem = mensagens[id - 1]
    res.send(mensagem)
})
//read all
app.get('/mensagem', function(req, res) {
    res.send(mensagens.filter(Boolean))
})

//update
app.put('/mensagem/:id', function(req, res){
    const id = req.params.id
    mensagens[id - 1] = req.body.texto
    res.send('Mensagem atualizada ' + req.body.texto)
})

//delete
app.delete('/mensagem/:id', function(req, res){
    const id = req.params.id
    delete mensagens[id - 1]
    res.send('Mensagem apagada')
})
app.listen(port, function (){
    console.log('App rodando em http://localhost:' + port)
})
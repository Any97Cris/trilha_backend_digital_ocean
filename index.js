const express = require('express')
const app = express()

const herois = ["mulher maravilha","capitã marvel","homem de ferro"]

app.get('/', function (req, res) {
  res.send('Hello World')  
})

app.get('/oi', function (req, res) {
  res.send('Olá Mundo')  
})

app.get('/herois', function (req, res) {
  res.send(herois)
})

app.listen(3000)
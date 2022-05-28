let message = "";
require("dotenv").config();
const express = require('express')
const app = express()
const path = require("path");
const port = process.env.PORT || 3000;

app.use(express.urlencoded());

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));// Dizendo ao express a pasta que irá guardar esses arquivos


app.get('/', function (req, res) { // Chamando a rota Get, dentro do servidor que tem as rotas que o cliente está acessando o que chamamaos de endpoints, o cliente faz a requisição e acessa o endpoint que é uma rota e dentro dessa rota é executada uma função e responde o meu cliente 
  const devList = ["Backend", "Frontend", "Fullstack"];
  const analyticsList = ["Engenharia de dados", "Ciência de dados"];
  res.render("index", { titulo: "Blue", devList: devList, analyticsList: analyticsList, message});
});

app.post("/subscription", (req, res) => {
  const {nome, email} = req.body;
  message = `Parabéns ${nome}, sua inscrição foi realizada com sucesso, um email foi enviado para: ${email}`;
  res.redirect("/")
})

app.listen(3000, console.log(`servidor rodando em http://localhost:${port}`));

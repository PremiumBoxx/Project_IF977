import * as authFunctions from './src/auth_functions.js'
import * as crudFunctions from './src/crud_functions.js'
import * as deliveryFunctions from './src/delivery_functions.js'

const mongoose = require('mongoose')

const url = `mongodb+srv://vrs2:p4KAoCs04AdjVewl@cluster0.a6ny4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

// Cria express app
const express = require("express")
const app = express()

// Define a primeira rota
app.get("/", function (req, res) {
  res.send("Hello World!")
})

// Define rota de autorização
app.post("/auth", function (req, res) {
    var result = authFunctions.authFunction(req.body["userName"],req.body["userPassword"]);
    res.send(result)
})

// Define rota de cadastro
app.put("/auth", function (req, res) {
    var result = authFunctions.registerFunction(req.body)
    res.send(result)
})

// Define rota de update do usuário
app.patch("/user", function (req, res) {
    var result = crudFunctions.updateUserById(req.body["userObject"],req.body["updates"])
    res.send(result)
})

// Define rota de get do usuário
app.post("/user", function (req, res) {
    var result = crudFunctions.findUserById(req.body["userObject"],req.body["id"])
    res.send(result)
})

// Define rota de delete do usuário
app.delete("/user", function (req, res) {
    var result = crudFunctions.findUserbyIdAndRemove(req.body["userObject"],req.body["id"])
    res.send(result)
})

// Define rota de put da box
app.put("/box", function (req, res) {
    var result = crudFunctions.registerObjectBoxModel(req["boxModelData"])
    res.send(result)
})

// Define rota de update da box
app.patch("/box", function (req, res) {
    var result = crudFunctions.updateBoxModelById(req.body["boxObject"],req.body["updates"])
    res.send(result)
})

// Define rota de get da box
app.post("/box", function (req, res) {
    var result = crudFunctions.findBoxModelById(req.body["boxObject"],req.body["id"])
    res.send(result)
})

// Define rota de delete da box
app.delete("/box", function (req, res) {
    var result = crudFunctions.findBoxModelByIdAndRemove(req.body["boxObject"],req.body["id"])
    res.send(result)
})

// Define rota de put da box template
app.put("/boxtemplate", function (req, res) {
    var result = crudFunctions.findBoxModelByIdAndRemove(req.body["boxObject"],req.body["id"])
    res.send("Hello World!")
})

// Define rota de update da box template
app.patch("/boxtemplate", function (req, res) {
    var result = crudFunctions.registerObjectBoxTemplate(req.body["boxTemplateData"])
    res.send(result)
})

// Define rota de get da box template
app.post("/boxtemplate", function (req, res) {
    var result = crudFunctions.findBoxTemplateById(req.body["boxTemplateObject"],req.body["id"])
    res.send(result)
})

// Define rota de delete da box template
app.delete("/boxtemplate", function (req, res) {
    var result = crudFunctions.findBoxTemplateByIdAndRemove(req.body["boxTemplateObject"],req.body["id"])
    res.send("Hello World!")
})

// Define rota da listagem da box template
app.delete("/listboxtemplate", function (req, res) {
    var result = deliveryFunctions.findBoxTemplateOfAnId(req.body["boxTemplateObject"],req.body["idAuthor"])
    res.send(result)
})

// Define rota da listagem da box
app.delete("/listbox", function (req, res) {
    var result = deliveryFunctions.findBoxModelOfAnId(req.body["boxObject"],req.body["idOwner"])
    res.send(result)
})

// Incializa o servidor
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
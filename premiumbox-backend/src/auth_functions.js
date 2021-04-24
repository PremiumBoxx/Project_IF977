//Funções usadas em login/autenticação e registro

//Conexão com o BD
const mongoose = require('mongoose')
var generalResource = require('./crud_functions.js');

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

module.exports = {

//Função de login
authFunction: function(userName,userPassword) {
   var userItem = mongoose.findById(userName, function (err, adventure) {});
   if (userItem['password'] == userPassword) {
        return true
   }
   else {
        return false
   }
},

registerFunction: function(userDataObject) {
    var userItem = new generalResource.userObject(userDataObject)
    userItem.save(function (err) {
        if (err) return "Error 1: Object could not be created";
      });
    return true
}
}
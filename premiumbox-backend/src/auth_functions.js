//Funções usadas em login/autenticação e registro

//Conexão com o BD
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

//Schema do usuário
const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    address: String,
    age: Number,
    gender: String
  });

// Definição de modelo do usuário
const userObject = mongoose.model('userObject', userSchema);

//Função de login
function authFunction(userName,userPassword) {
   var userItem = mongoose.findById(userName, function (err, adventure) {});
   if (userItem['password'] == userPassword) {
        return true
   }
   else {
        return false
   }
}

function registerFunction(userDataObject) {
    var userItem = new userObject(userDataObject)
    userItem.save(function (err) {
        if (err) return "Error 1: Object could not be created";
      });
    return true
}
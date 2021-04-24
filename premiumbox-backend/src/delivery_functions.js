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

//Schema da template da box
  const boxTemplateSchema = new mongoose.Schema({
    name: String,
    date: String,
    dataFields: Map,
    author: String
  });

//Schema da box
const boxSchema = new mongoose.Schema({
    name: String,
    date: String,
    dataFields: Map,
    author: String,
    owner: String
  });

// Definição de modelo do usuário
const userObject = mongoose.model('userObject', userSchema);

// Definição de modelo da template da box
const boxTemplateObject = mongoose.model('boxTemplateObject', boxTemplateSchema);

// Buscar os templatesBox do fornecedor
function findBoxTemplateOfAnId(boxTemplateObject,idAuthor){
  boxTemplateObject.find({
    author: idAuthor
  }).then((result) =>{
    return result
  }).catch((err) =>{
    return 'Não foi possível encontrar as Boxes.' + err
  })
}

// Definição de modelo da box
const boxObject = mongoose.model('boxObject', boxSchema);

// Buscar os Boxmodels do dono
function findBoxModelOfAnId(boxObject,idOwner){
  boxObject.find({
    owner: idOwner
  }).then((result) =>{
    return result
  }).catch((err) =>{
    return 'Não foi possível encontrar as Boxes.' + err
  })
}
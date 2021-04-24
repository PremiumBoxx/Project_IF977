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
// Buscar os templatesBox do fornecedor
findBoxTemplateOfAnId:function(idAuthor){
  generalResource.boxTemplateObject.find({
    author: idAuthor
  }).then((result) =>{
    return result
  }).catch((err) =>{
    return 'Não foi possível encontrar as Boxes.' + err
  })
},
// Buscar os Boxmodels do dono
findBoxModelOfAnId : function(idOwner){
  generalResource.boxObject.find({
    owner: idOwner
  }).then((result) =>{
    return result
  }).catch((err) =>{
    return 'Não foi possível encontrar as Boxes.' + err
  })
}
}
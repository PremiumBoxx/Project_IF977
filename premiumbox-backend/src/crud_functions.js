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

function_bundle_1 = {
// Buscar Todos os usuários
findusers : function(userObject){
  userObject.find().then((result) =>{
    return result
  }).catch((err) =>{
    return 'Não foi possível encontrar o usuário.' + err
  })
},

// Buscar usuário pelo nome
findUserByName : function(userObject,nome){
  userObject.find({
    name: nome
  }).then((result) =>{
    return result
  }).catch((err) =>{
    return 'Não foi possível encontrar o usuário.' + err
  })
},

//Buscar User por ID
findUserById : function(userObject,id){
  userObject.findById(id,(err,result) =>{
    if(err){
      return 'Não foi possível encontrar o usuário.' + err
    }else{
      return result
    }
  })
},

//Delete User byId
findUserbyIdAndRemove : function (userObject,id){
  userObject.findByIdAndRemove(id,(err, deletedRecord) => {
    if(err){
      return err
    } else {
      return deletedRecord
    }
  })
},

//Update User byId
updateUserById : function(userObject,updates){
  userObject.findByIdAndUpdate(id,updates,(err,updateRecord) => {
    if(err){
      return err
    } else {
      return updateRecord
    }
  })
}
}
// Definição de modelo da template da box
const boxTemplateObject = mongoose.model('boxTemplateObject', boxTemplateSchema);

function_bundle_2 = {
// Criar boxTemplate
registerObjectBoxTemplate : function(boxTemplateData) {
  const boxTemplateItem = new boxTemplateObject(boxTemplateData)
  boxTemplateItem.save((err,result) => {
    if(err){
      return 'Não foi possível cadastrar o template da box' + err
    } else {
      return result
    }
  })
},

//Buscar boxTemplate por ID
findBoxTemplateById: function(boxTemplateObject,id){
  boxTemplateObject.findById(id,(err,result) =>{
    if(err){
      return 'Não foi possível encontrar o usuário.' + err
    }else{
      return result
    }
  })
},

//Delete boxTemplate byId
findBoxTemplateByIdAndRemove :function(boxTemplateObject,id){
  boxTemplateObject.findByIdAndRemove(id,(err, deletedRecord) => {
    if(err){
      return err
    } else {
      return deletedRecord
    }
  })
},

//Update boxTemplate byId
updateBoxTemplateById: function(boxTemplateObject,updates){
  boxTemplateObject.findByIdAndUpdate(id,updates,(err,updateRecord) => {
    if(err){
      return err
    } else {
      return updateRecord
    }
  })
}
}

// Definição de modelo da box
const boxObject = mongoose.model('boxObject', boxSchema);

function_bundle_3 = {
// Criar box model
registerObjectBoxModel : function(boxModelData) {
  const boxModelItem = new boxObject(boxModelData)
  boxModelItem.save((err,result) => {
    if(err){
      return 'Não foi possível cadastrar o modelo da box' + err
    } else {
      return result
    }
  })
},

//Buscar box model
findBoxModelById: function(boxObject,id){
  boxObject.findById(id,(err,result) =>{
    if(err){
      return 'Não foi possível encontrar o usuário.' + err
    }else{
      return result
    }
  })
},

//Delete box model byId
findBoxModelByIdAndRemove: function(boxObject,id){
  boxObject.findByIdAndRemove(id,(err, deletedRecord) => {
    if(err){
      return err
    } else {
      return deletedRecord
    }
  })
},

//Update box model byId
updateBoxModelById: function(boxObject,updates){
  boxObject.findByIdAndUpdate(id,updates,(err,updateRecord) => {
    if(err){
      return err
    } else {
      return updateRecord
    }
  })
}
}

module.exports = {userObject,boxObject,boxTemplateObject,function_bundle_1,function_bundle_2,function_bundle_3}
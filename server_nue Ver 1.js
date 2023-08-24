/*para hacer la llamada get

http://176.16.200.20:8080/siavcom/viLla1Nom/copNom/C/codNom/000001
*/
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
/*
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

*/

//enables cors
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "============Siavcom NODEJS Server================" });

});

/////////////////////// Fernando Cuadras //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//const Op = _Sequelize.Op;  // Operaciones logicas del Sequelize
var CryptoJS = require('crypto-js');
const fs = require('fs');

//const Sequelize = require('sequelize');

const { Sequelize, DataTypes } = require('sequelize');


//const Sequelize = require('sequelize');

const conexion = {}


//const conexion ={}  // inicializa objeto de conexiones
//module.export=conexion;
let sequelize      
const Op = Sequelize.Op;  // Operaciones logicas del Sequelize

app.get("/login", (req, res) => {
  const obj_json = JSON.parse(req.query.json)
  console.log('json de conexion====>>>>>', obj_json)
  const fec_act = new Date().toISOString().substr(0, 10); //  Fecha actual de la computadora cliente

  const nom_emp = obj_json.nom_emp  // Nemonico de empresa
  const user = obj_json.user //req.body.user;
  const pass = obj_json.pass //req.body.pass;

  /////////////////////////////////////////////////////////////
  // Recorre todo el objeto conexion y borra las conexiones viejas
  ////////////////////////////////////////////////////////////
  for (const id_tok in conexion) {
    if (conexion[id_tok].timestamp != fec_act) {
      console.log('Borra la conexion')
      delete conexion[id_tok]	// borramos el conexion
     // delete [id_tok] //removeClass()  // borramos la clase de memoria
    }
  }
  /*


const db = require("./app/models");  // vistas de las base de datos

//{alter : true} - This checks what is the current state of the table in the database 
//                 (which columns it has, what are their data types, etc), and then
//                 performs the necessary changes in the table to make it match the model.

//db.sequelize.sync({alter : true});   
db.sequelize.sync(); //{ force: true } This creates the table, dropping it first if it already existed

//const sequelize = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password)

// Export this database so it can be used for the graphQL schemas.
//export default db.sequelize

console.log(`Inicializo sync`);


app/empresas/Demo/db.config.js
  */
  const dir_emp = './app/empresas/' + nom_emp // directorio de empresas   
  options = require(dir_emp + '/db.config.js') //[env] // crea el archivo de env
  console.log('Configuracion empresa===>',options)
  if (!options) {
    res.writeHead(400, 'No existe empresa', { 'Content-Type': 'text/plain' });
    res.send();
  }

  
  options['username'] = user
  options['password'] = pass
 // console.log('Config de conexion =====>>>', options);


  const sequelize = new Sequelize(null,null,null,options); // trata de hacer la conexion
  console.log('Squelize =====>>>', sequelize);


  sequelize.authenticate()
    .then(() => {
     

      const name= base64(fec_act + nom_emp + user) // generamos id de conexion
      const db = {}  // objeto base dae datos
      // db[name] = name // objeto base de datos

      console.log('Conexion =====>>>',conexion);

      // const mod_db = require(dir_emp + 'models');  // vistas de las base de datos


     // const sistemas = ['come', 'cont', 'dist', 'logi', 'mnto']  // poner todos los sistetemas 
     const sistemas = ['come']  // poner todos los sistemas 

      for (i = 0; i < sistemas.length; i++) {
        fs // Revisa los archivos que se generaron en la carpeta, para representar la información de los modelos
          .readdirSync(dir_emp + '/models/' + sistemas[i])
          .filter(file => {
            return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
          })
          .forEach(file => {
//            const model = require(dir_emp + '/models/' + sistemas[i] + '/' + file)(sequelize, Sequelize.DataTypes);
            const model = require(dir_emp + '/models/' + sistemas[i] + '/' + file)(sequelize, DataTypes);

            db[model.name] = model;
            console.log('modelo ',model)
          });
      }
      Object.keys(db).forEach(modelName => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
      })

      //mod_db.sequelize = sequelize;  // agregamos la clase de la conexion a la base de datos
      //mod_db.Sequelize = Sequelize; // agregamos la clase base de sequelize 

      // ['db'] = mod_db  //generamos objeto de base de datos
      db.sequelize = sequelize;
      db.Sequelize = Sequelize;

      console.log('Base de datos====>',conexion)

      conexion[name]={
        timestamp:fec_act,
        empresa:nom_emp,
        db: db}
      export {conexion}  
     // module.exports.conexion 
      
      //this.conexion[name].db= db ;
      console.log('Base de datos====>',conexion)

   //   module.export=db // exportamos el ID como nombre de clase

      console.log('Id de conexion =',name )

      res.json({ id: name })

    })
    .catch(err => {
      console.log(err);
      res.writeHead(400, err.message, { 'Content-Type': 'text/plain' });
      res.send();
    });
  return


})



/* Se quita e1 Junio 2021

const db = require("./app/models");  // vistas de las base de datos

//{alter : true} - This checks what is the current state of the table in the database 
//                 (which columns it has, what are their data types, etc), and then
//                 performs the necessary changes in the table to make it match the model.

//db.sequelize.sync({alter : true});   
db.sequelize.sync(); //{ force: true } This creates the table, dropping it first if it already existed

//const sequelize = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password)

// Export this database so it can be used for the graphQL schemas.
//export default db.sequelize

console.log(`Inicializo sync`);
*/

// inicializa las rutas de llamadas


//require("./app/routes/siavcom.routes_nue")(app);
require("./app/routes/siavcom.routes")(app);


console.log(`Inicializo rutas`);


/////////////////////////////////////////////////////////////////////////////////////////
// set port, listen for requests
//const PORT = process.env.PORT || 8080;
const PORT = process.env.PORT || 58000;

/////////////////////////////////////////////////////////////////////////////////////////////////////////
app.listen(PORT, () => {
  console.log(`Server is corriendo en el puerto ${PORT}.`);
});

/////////////////////////////////////////////////////////////////
//////  Funciones ///////////////////////////////////////


function base64(source) {
  // Encode in classical base64

  words = CryptoJS.enc.Utf8.parse(source); // WordArray object
  encodedSource = CryptoJS.enc.Base64.stringify(words);

  //encodedSource = CryptoJS.enc.Base64.stringify(source);

  // Remove padding equal characters
  encodedSource = encodedSource.replace(/=+$/, '');

  // Replace characters according to base64url specifications
  encodedSource = encodedSource.replace(/\+/g, '-');
  encodedSource = encodedSource.replace(/\//g, '_');

  return encodedSource;
}



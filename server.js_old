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
//  res.json({ message: "============Siavcom NODEJS Server================" });
  res.send('WebSiavcom/index.js')

});

///////////////////////////////////////////////////////////////////////////////////
/////////////////////// Fernando Cuadras //////////////////////////////////////////
// Add Access Control Allow Origin headers
app.use(function (req, res, next) {
  /*var err = new Error('Not Found');
   err.status = 404;
   next(err);*/

  // Website you wish to allow to connect
  // res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
 res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); //GET, POST, OPTIONS, 

  // Request headers you wish to allow
  //res.setHeader('Access-Control-Allow-Headers', 
  //              'Access-Control-Allow-Headers,Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization,Accept');

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  // Pass to next layer of middleware
  next();
});


const db = require("./app/models");

//{alter : true} - This checks what is the current state of the table in the database 
//                 (which columns it has, what are their data types, etc), and then
//                 performs the necessary changes in the table to make it match the model.

//db.sequelize.sync({alter : true});   
db.sequelize.sync(); //{ force: true } This creates the table, dropping it first if it already existed

//const sequelize = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password)

// Export this database so it can be used for the graphQL schemas.
//export default db.sequelize

console.log(`Inicializo sync`);


// inicializa las rutas
require("./app/routes/siavcom.routes")(app);
console.log(`Inicializo rutas`);


/////////////////////////////////////////////////////////////////////////////////////////
// set port, listen for requests
//const PORT = process.env.PORT || 8080;
const PORT = process.env.PORT || 58080;

/////////////////////////////////////////////////////////////////////////////////////////////////////////
app.listen(PORT, () => {
  console.log(`Server is corriendo en el puerto ${PORT}.`);
});

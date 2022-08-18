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

////////////////////////////////////////////////////
// Pagina web Siavcom
////////////////////////////////////////////////////


//app.use('/static', express.static(__dirname + '/public'));
app.use('/static', express.static(__dirname + '/WebSiavcom/public'));


//app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/WebSiavcom/public'));

// Se indica el directorio donde se almacenarán las plantillas 
//app.set('views', './views');
app.set('views', 'WebSiavcom/views');

// Se indica el motor del plantillas a utilizar
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index.pug'); // Se muestra la plantilla hello.pug
});



/////////////////////////////////////////////////////
/*
app.get("/", (req, res) => {
    res.json({ message: "============Siavcom NODEJS Server================" });

});
*/
//////////////////////////////////////////////////////



//const Sequelize = require('sequelize');




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
const PORT = process.env.PORT || 38080;

/////////////////////////////////////////////////////////////////////////////////////////////////////////
app.listen(PORT, () => {
  console.log(`Server is corriendo en el puerto ${PORT}.`);
});



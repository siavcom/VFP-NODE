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

// inicializa las rutas de llamadas
require("./app/routes/siavcom.routes")(app);

//require("controllers/siavcom.controllers.js");

/////////////////////////////////////////////////////////////////////////////////////////
// set port, listen for requests

const PORT = process.env.PORT || 38080;
//const PORT = process.env.PORT || 38081;


//////////////////// Axios and socket Server /////////////////////////////////////


var http = require('http').Server(app);
var io = require('socket.io')(http,
  {
    cors: {
      //      origin: "https://example.com",
      methods: ["GET", "POST"]
    }
  }

);

// inicializa rutas de llamada
console.log(`Inicializo rutas Axios`);

io.on('connection', async (socket) => {
  const origin = socket.handshake.origin

  //  console.log('1= Socket connected ready headers=', socket.handshake.headers);
  //  console.log('2= Socket address=', socket.handshake.address);
  console.log('3= Socket auth=', socket.handshake.auth)


  /*
    let req =JSON.stringify(
      {query:socket.handshake.auth}
    )  // donde esta el mensaje de conexion
  
    */


  // llamadas Sql
  const sqlServer = require("./app/controllers/siavcom.controllers.js");

  if (socket.handshake.auth.nom_emp &&
    socket.handshake.auth.user &&
    socket.handshake.auth.pass) {

    let req = JSON.stringify(socket.handshake.auth)
//    sqlServer.login(req, socket)
  } else {


    if (!socket.handshake.auth.id_con) { // no hay id_con
      consoloe.log('=========socket id invalid ==========', socket.handshake.auth)
      socket.disconnect()
    }

    // no se puede porque automaticamente se trata de reconectar el socket sin requerimientos
    // sqlServer.sql(socket.handshake.auth,socket)
  }
  //res={ id: name, dialect: options.dialect, fpo_pge }
  socket.on('disconnect', () => {
    console.log('==============client socket disconnected============');

  });


  socket.on('login', (req) => {
    sqlServer.login(req, socket)
    //    const obj_json = JSON.parse(msg)
    console.log('============ login Directo ========= ');
 //   io.emit('broadcast', res);
  });

  // mensajes sql

  socket.on("sql async", async (req, callback) => {

    console.log('============  Socket call SQL req=', req)
    sqlServer.sql(req, socket, callback);
    console.log('============  Socket return SQL ')
    //    callback({res});

    //    callback({
    //      status: "ok"
    //    });
  });



  socket.on('sql', (req) => {
    const res = sqlServer.sql(req, socket);
    console.log('sockt message: ', req, res);
  });

});


http.listen(PORT, () => {
  console.log(`Axios and Socket Server is runing  on port= ${PORT}.`);
});

//for testing, we're just going to send data to the client every second
/*
setInterval( function() {


  //  our message we want to send to the client: in this case it's just a random
  //  number that we generate on the server

  var msg = Math.random();
  io.emit('message', msg);
  console.log (msg);

}, 30000);
*/







////////////////// only Sockets ///////////////////////////

// const server = require('http').createServer(app);
// const io = require('socket.io')(server);
// io.on('connection', () => { /* … */ });

// server.listen(PORT+10, () => {
//  console.log(`Socket Server is runing on port= ${PORT+10}.`);
// });



module.exports = app =>{
  // En este modulo iniciliza la conexión con la base de datos y tiene todos lo procdimientos 
  // que corren los metodos get,put, rest,delete etc  


  // los diferentes orogramas a llamar quedan en la clase siavcom diferentes programas a llamar

  const siavcom = require("../controllers/siavcom.controllers_nue.js");
  var router = require("express").Router();

  // Create a new Siavcom
  // router.post("/", siavcom.create);

  // Retrieve all Tutorials
  // router.get("/", siavcom.lee);

  // Ejecuta un query de lectura donde se pasa el where

  // define the home page route
  router.get('/', function (req, res) {
    res.send(' Siavcom Ver 10 Web')
  });



  // la programacion de las llamadas estan definidas en siavcom.controllers.js

  // las llamadas get , responden con data json con los resultados requeridos
  // Seria similar al use donde los parametros son los campos wue necesita para hacer la  de la consulta 
  // No hay body json con los parametros



  // use vi_lla1_nom
  //router.get("/viLla1Nom/copNom/:copNom/codNom/:codNom", siavcom.use_vi_lla1_nom);

  //router.get("/login", siavcom.login);
  router.get("/", siavcom.sql);
  router.put("/", siavcom.sql);
  router.post("/", siavcom.sql);
  router.delete("/", siavcom.sql);

  // Post funciona igual que el PUT pero la respuesta te la regresa con un URI donde se encuentran los datos
  // NOTA : Podria utilizarse para los reportes generados
  // router.post("/viLla1Nom/copNom/:copNom/codNom/:codNom", siavcom.upd_vi_lla1_nom);

  // Borra el vi_lla1_nom
  //router.delete("/viLla1Nom/copNom/:copNom/codNom/:codNom", siavcom.del_vi_lla1_nom);

  //app.use('/', router);
  //app.use('/api/siavcom', router);
  app.use('/siavcom', router);

};


// funcion $(nom_fun) podemos definir una funcion basada en su nombre 

//const { siavcom, Sequelize, queryInterface } = require("../models"); // llama aqui (index.js) que es donde esta la definicion de comenom


//const dbConfig = require("../config/db.config.js");


/////////////////////// Fernando Cuadras //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

var CryptoJS = require('crypto-js');

const fs = require('fs');

const { Sequelize, DataTypes, QueryTypes } = require('sequelize');

const Op = Sequelize.Op;  // Operaciones logicas del Sequeliz

const conexion = {}

//const que_int = sequelize.getQueryInterface(); // Se trae las funciones de QueryInterface

//.describeTable;
//getQueryInterface.describeTable;
//const des_tabla =db.getQueryInterface.describeTable;



exports.login = (req, res) => {

  const obj_json = JSON.parse(req.query.json)
  console.log('json de conexion====>>>>>', obj_json)
  const fec_act = new Date().toISOString().substr(0, 10); //  Fecha actual del servidor de node

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
  */         //app/empresas/Demo/models/come
  //console.log("Current working directory  : " + process.cwd());

  let dir_emp = process.cwd() + '/app/empresas/' + nom_emp // directorio de empresas 
  options = require(dir_emp + '/db.config.js') //[env] // crea el archivo de env
  //console.log('Lee archivo de configuracion====>>>',options)
  if (!options) {
    res.writeHead(400, 'No existe empresa', { 'Content-Type': 'text/plain' });
    res.send();
  }


  options['username'] = user
  options['password'] = pass
  // console.log('Config de conexion =====>>>', options);


  const sequelize = new Sequelize(null, null, null, options); // trata de hacer la conexion
  //console.log('Squelize =====>>>', sequelize);


  sequelize.authenticate()
    .then(() => {


      const name = base64(fec_act + nom_emp + user) // generamos id de conexion
      const db = {}  // objeto base de datos
      // db[name] = name // objeto base de datos

      //console.log('Conexion =====>>>',conexion);
      // console.log("Current directory 2:  " + process.cwd());
      dir_emp = dir_emp + '/models/'  // directorio de models   



      // const mod_db = require(dir_emp + 'models');  // vistas de las base de datos


      // const sistemas = ['come', 'cont', 'dist', 'logi', 'mnto']  // poner todos los sistetemas 
      const sistemas = ['come']  // poner todos los sistemas 

      for (i = 0; i < sistemas.length; i++) {
        fs // Revisa los archivos que se generaron en la carpeta, para representar la información de los modelos
          .readdirSync(dir_emp + sistemas[i])
          .filter(file => {
            return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
          })
          .forEach(file => {
            //            const model = require(dir_emp + sistemas[i] + '/' + file)(sequelize, Sequelize.DataTypes);
            const model = require(dir_emp + sistemas[i] + '/' + file)(sequelize, DataTypes);

            db[model.name] = model;
            //          console.log('modelo ',model)
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

      //console.log('Base de datos====>',conexion)

      conexion[name] = {
        timestamp: fec_act,
        empresa: nom_emp,
        db: db
      }

      // module.exports.conexion 

      //this.conexion[name].db= db ;
      // console.log('Base de datos====>',conexion)

      //   module.export=db // exportamos el ID como nombre de clase

      console.log('Se genero la conexion =', name)

      res.json({ id: name })

    })
    .catch(err => {
      console.log(err);
      res.writeHead(400, err.message, { 'Content-Type': 'text/plain' });
      res.send();
    });
  return
}


// comienzan los requerimeinto a la base de datos
exports.sql = (req, res) => {
  // const conexion=this.conexion; 
  console.log('Conexion Sql =====>', conexion)
  const id_con = req.body.id_con; // Id de conexion
  const fec_act = new Date().toISOString().substr(0, 10); //  Fecha actual


  /////////////////////////////////////////////////////////////
  // Recorre todo el objeto conexion y borra las conexiones viejas
  ////////////////////////////////////////////////////////////
  for (const id_tok in conexion) {
    if (conexion[id_tok].timestamp != fec_act) {
      console.log('Borra la conexion')
      delete conexion[id_tok]	// borramos el conexion
      //[id_tok].removeClass()  // borramos la clase de memoria
    }
  }

  if (!conexion[id_con]) {
    res.writeHead(409, 'No hay conexion o expiro el tiempo de conexion', { 'Content-Type': 'text/plain' });
    res.send();
    return;
  }

  const db = conexion[id_con].db // asignamos el objeto de base de datos

  //console.log('Base de datos',db)
  // console.log('db a utilizar=====>',db)

  var tip_lla = req.body.tip_llamada; // Tipo de llamada USE , USE NODATA  
  const condicion = { where: {}, atributes: {} }
  //const condicion = { where: {} }

  condicion.where = req.body.where; // Condicion Where de busqueda

  let nom_vis = ''
  if (req.body.nom_vis) nom_vis = req.body.nom_vis.toLowerCase();  // Nombre de la vista indice a utilizar 
  nom_vis = nom_vis.replace('vi_', '')

  let nom_tab = 'man_come' + nom_vis.substr(-3, 3); // Nombre de la tabla de mantenimiento


  console.log('Tabla', nom_tab)

  const orden = { order: {} }
  if (req.body.order) orden.order = req.body.order; // Orden de la consulta
  const ins_sql = req.body.query;
  const datos = req.body.dat_act;


  //console.log(llamada);


  tip_lla = tip_lla.toUpperCase()

  switch (tip_lla) {
    case 'USE':
      console.log('=========== USE ==============', nom_vis)
      console.log('====== Where ================', condicion);
      console.log('====== IN nom_tab ================', nom_tab);

      console.log('====== Order by  ================', orden);
      db[nom_tab].findAll(condicion, orden)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          console.log('Error AXIOS', err);
          res.writeHead(400, err.message, { 'Content-Type': 'text/plain' });
          res.send();
        });

      break;


    case 'USENODATA':  // 
      console.log('=========== USE NODATA ==============')
      nom_tab = nom_tab.toUpperCase()
      nom_vis = nom_vis.toUpperCase()
      nom_tab = nom_tab.replace('MAN_', '')


      condicion.where = { nom_tab: nom_tab };
      console.log('============== Definicion de la tabla', nom_tab);
      console.log('============== Definicion Where ', condicion);




      db.man_comedat.findAll(condicion)  // busca en el diccionario de datos
        .then(data => {

          console.log('============== Definicion Schema>>>>');
          let tip_campo = '';
          let nom_campo = '';
          let val_campo = '';
          let fec_blanco = '1900-01-01';
          let tim_blanco = '1900-01-01 00:00:00';
          //let date=date();
          //let datetime=date();
          //let today=date+' '+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


          // Definimos nuestra vista
          var view = {
            nom_tab: nom_tab,
            exp_indice: '',
            est_tabla: {},
            new: [{}],
            old: [{}]
          };


          var est_tabla = {};


          for (var i = 0; i < data.length; i++) {


            nom_campo = data[i].des_dat.trim().toLowerCase(); // pasamos a minusculas el nombre del campo
            tip_campo = data[i].tip_dat.trim();

            // asignamos los valores a la estructura de la tabla
            est_tabla = {

              des_cam: data[i].ref_dat.trim(),
              tip_cam: data[i].tip_dat.trim(),
              val_cam: data[i].val_dat.trim()
            }

            view.est_tabla[nom_campo] = est_tabla; // generamos la definicion campo por campo
            // Segun el tipo de campo, inicializamos su valor en blanco, cero , fecha ,etc   
            val_campo = data[i].val_dat.trim();
            // Generamos el renglo en null
            view.new[0][nom_campo] = null;
            view.old[0][nom_campo] = null;

          } // Fin del for

          /////////////////// busca indices que tiene la tabla
          const condicion = {
            where: {
              nom_tab: nom_tab,
              nom_ind: nom_vis,
            }

          }

          // console.log('Valor estructura tabla======>',view.value[0]) ; 
          // buscara las variables del indice
          db.man_comeind.findAll(condicion)  // Busca en el diccionario de indices
            .then(indice => {
              var nom_cam = '';
              var con_ind = '';   // generamos la condicion del indice
              var exp_ind = indice[0].exp_ind.trim().toLowerCase();
              var pos = exp_ind.indexOf(',')  // Posicion de la primera coma

              while (pos > 0) {   // Recorremos todas las variables del indice
                nom_cam = exp_ind.substr(0, pos);
                con_ind = con_ind + nom_cam + ' : m.' + nom_cam + ',';

                exp_ind = exp_ind.substr(pos + 1);
                var pos = exp_ind.indexOf(',')
              }
              if (exp_ind.length > 0) {
                con_ind = ' { ' + con_ind + exp_ind + ': m.' + exp_ind + '}'
              }


              view.exp_indice = con_ind;
              res.send(view); // enviamos la vista
            }) // fin then.data

            .catch(err => {
              res.writeHead(400, err.message, { 'Content-Type': 'text/plain' });
              res.send();

            });


        }) // fin then.data
        .catch(err => {
          res.writeHead(400, "Ocurrio un error al leer de la Base de DAtos", { 'Content-Type': 'text/plain' });
          res.send();
        });
      // res.send(db[nom_vis]);

      break;
    /*     console.log('============== Estructura ====================', nom_vis);
         que_int.describeTable(nom_vis).then(data => {
   
           console.log(data);
           res.send(data);
         })
           .catch(err => {
             res.writeHead(400,"Ocurrio un error al leer de la Base de DAtos",{'Content-Type': 'text/plain'});
             res.send();
           });
   
         break;
    */
    case 'INSERT':

      if (!datos) {
        res.writeHead(409, 'No hay datos as insertar', { 'Content-Type': 'text/plain' });
        res.send();

        return;
      }

      db.sequelize.transaction({ autocommit: false })
        .then(transaction => {
          db[nom_tab].create(datos, {
            returning: true,
            plain: true,
            transaction: transaction
          })
            .then((result) => {

              // Obtiene el timestamp y key_pri actual
              condicion.atributes = ['timestamp', 'key_pri'];
              console.log('==========Condicion insercion =======', condicion);
              db[nom_tab].findAll(condicion)
                .then(data => {
                  // envia el timestamp
                  transaction.commit();
                  res.send(data);
                })
                .catch(err => {     // Error al leer el TimeStamp
                  transaction.rollback();
                  res.writeHead(400, err.message, { 'Content-Type': 'text/plain' });
                  res.send();
                });
              ///////////////////
              //res.send(data);
            })
            .catch(err => {
              transaction.rollback();
              res.writeHead(409, err.message, { 'Content-Type': 'text/plain' });
              res.send();

            });
        })

      break;

    case 'UPDATE':

      if (!datos) {
        res.writeHead(400, "No DATA to update", { 'Content-Type': 'text/plain' });
        res.send();

        return;
      }


      const key_pri = datos.key_pri;


      if (datos.key_pri == 0) {
        res.writeHead(400, "No se puede actualizar un registro con key_pri=0", { 'Content-Type': 'text/plain' });
        res.send();

      }
      delete datos['val_vista'];
      console.log('========== Objeto =======', db[nom_vis]);

      db.sequelize.transaction({ autocommit: false })
        .then(transaction => {
          db[nom_tab].update(datos, {
            where: { key_pri: key_pri },
            returning: true,
            plain: true,
            transaction: transaction
          })
            // db[nom_vis].upsert(dat_act, condicion)
            .then((result) => {
              console.log('==========Dato actualizado=======', result);
              // Obtiene el timestamp actual
              db[nom_tab].findAll({  // busca el timestamp 
                attributes: ['timestamp'],
                where: { key_pri: key_pri }, transaction: transaction
              })
                .then(data_key => {  // envia el timestamp
                  transaction.commit();
                  res.send(data_key);
                })
                .catch(err => {     // Error al leer el TimeStamp
                  transaction.rollback();
                  res.writeHead(400, err.message, { 'Content-Type': 'text/plain' });
                  res.send();
                });
              ///////////////////
              //res.send(data);
            })
            .catch(err => {
              transaction.rollback();
              res.writeHead(409, err.message, { 'Content-Type': 'text/plain' });
              res.send();

            });
        })

      break;


    case 'DELETE':

      if (!condicion) {
        res.writeHead(400, "No hay condicion WHERE", { 'Content-Type': 'text/plain' });
        res.send();
        return;
      }



      db[nom_tab].destroy(condicion)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.writeHead(409, err.message, { 'Content-Type': 'text/plain' });
          res.send();
        });

      break;
    case 'SQLEXEC':
      console.log('SQLEXEC==>',ins_sql)
      /*
            if (!condicion) {
              res.writeHead(400,"No hay QUERY para procesar",{'Content-Type': 'text/plain'});
              res.send();
              return;
            }
      */
      db.sequelize.query(
        ins_sql)
        .then(data => {
          console.log('sqlexec resultado===>',data)
          res.send(data);
        })
        .catch(err => {
          res.writeHead(409, err.message, { 'Content-Type': 'text/plain' });
          res.send();
        });

      break;


    default:
    // code block
  }





};

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
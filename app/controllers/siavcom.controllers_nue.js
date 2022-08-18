

//import { siavcom, Sequelize, queryInterface } from "../models"; // llama aqui (index.js) que es donde esta la definicion de comenom
//import { config } from "npm";

//import db, { vi_lla1_nom as _vi_lla1_nom, Sequelize as _Sequelize, sequelize, vi_lla1_dat, vi_lla1_ind } from "../models"; // Conexion a la bas de datos con todas las vistas
//import db, { vi_lla1_nom as _vi_lla1_nom, Sequelize as _Sequelize, sequelize, vi_lla1_dat, vi_lla1_ind } from "../models"; // Conexion a la bas de datos con todas las vistas

const db = require("../models"); // Conexion a la bas de datos con todas las vistas
var CryptoJS = require('crypto-js');
const Sequelize     = require('sequelize');

//import { Sequelize, sequelize } from sequelize // Conexion a la bas de datos con todas las vistas
//import { DataTypes, QueryTypes } from sequelize;

const fs = require('fs');

//const Op = _Sequelize.Op;  // Operaciones logicas del Sequelize
const Op = Sequelize.Op;  // Operaciones logicas del Sequelize
//const conexion={}
//const que_int = sequelize.getQueryInterface(); // Se trae las funciones de QueryInterface

//.describeTable;
//getQueryInterface.describeTable;
//const des_tabla =db.getQueryInterface.describeTable;



// funcion $(nom_fun) podemos definir una funcion basada en su nombre 
// instance.field
// is the same as
// instance.get('field')
// is the same as
// instance.getDataValue('field')



// hacemos llamada get
/*
export function login(req, res, next) {

  const obj_json = JSON.parse(req.query.json)
  console.log('json====>>>>>', obj_json)
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
      [id_tok].removeClass()  // borramos la clase de memoria
    }
  }
    const dir_emp = 'empresas/' + nom_emp // directorio de empresas   
  config = require(dir_emp + '/db.config.js')[env] // crea el archivo de env

  if (!config) {
    res.writeHead(400, 'No existe empresa', { 'Content-Type': 'text/plain' });
    res.send();
  }

  const des_conn = config
  des_conn[user] = user
  des_conn[pass] = pass
  console.log('emp_json=====>>>', des_con);


  const sequelize = new Sequelize(des_conn); // trata de hacer la conexion

  sequelize
    .authenticate()
    .then(() => {
      const db = base64(fec_act + nom_emp + user) // generamos id de conexion
      const [db] = {}  // objeto base dae datos

      conexion[db]['timestamp'] = fec_act
      conexion[db]['empresa'] = nom_emp  // directorio de datos del la empresa

      // const mod_db = require(dir_emp + 'models');  // vistas de las base de datos


      const sistemas = ['come', 'cont', 'dist', 'logi', 'mnto']  // poner todos los sistetemas 

      for (i = 0; i < sistemas.length(), i++) {
        fs // Revisa los archivos que se generaron en la carpeta, para representar la información de los modelos
          .readdirSync(dir_emp + 'models/' + sistemas[i])
          .filter(file => {
            return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
          })
          .forEach(file => {
            const model = require(dir_emp + 'models/' + sistemas[i] + '/' + file)(sequelize, Sequelize.DataTypes);
            [db][model.name] = model;
          });
      }



      //mod_db.sequelize = sequelize;  // agregamos la clase de la conexion a la base de datos
      //mod_db.Sequelize = Sequelize; // agregamos la clase base de sequelize 

      // ['db'] = mod_db  //generamos objeto de base de datos
      [db].sequelize = sequelize;
      [db].Sequelize = Sequelize;
      module.export[db] // exportamos el ID como nombre de clase

      console.log('Conexion a la base de db.comenom =', ['db'].comeadu)

      res.json({ id: db })

    })
    .catch(err => {
      console.log(err);
      res.writeHead(400, err.message, { 'Content-Type': 'text/plain' });
      res.send();
    });
  return


}

*/

export function sql(req, res) {
  const bd = req.body.id
  if (!bd) {
    res.writeHead(409, 'No hay id de base de conexion', { 'Content-Type': 'text/plain' });
    res.send();

    return;
  }


  /////////////////////////////////////////////////////////////
  // Recorre todo el objeto conexion y borra las conexiones viejas
  ////////////////////////////////////////////////////////////
  for (const id_tok in conexion) {
    if (conexion[id_tok].timestamp != fec_act) {
      console.log('Borra la conexion')
      delete conexion[id_tok]	// borramos el conexion
      [id_tok].removeClass()  // borramos la clase de memoria
    }
  }






  const tip_lla = req.body.tip_llamada; // Tipo de llamada USE , USE NODATA  
  if (!tip_lla) {
    res.writeHead(409, 'No hay definicion de llamada', { 'Content-Type': 'text/plain' });
    res.send();
    return;
  }



  const condicion = { where: {}, atributes: {} }
  condicion.where = req.body.where; // Condicion Where de busqueda

  const nom_vis = req.body.nom_vis.toLowerCase();  // Nombre de la vista indice a utilizar 
  var nom_tab = 'COME' + nom_vis.substr(-3, 3); // Nombre de la tabla
  nom_tab = nom_tab.toUpperCase();
  //const nom_tab=nom_vis.toUpperCase();  // se tiene que poner () para que llame a la funcion

  console.log('Tabla', nom_tab)

  const orden = { order: {} }
  orden.order = req.body.order; // Orden de la consulta
  const ins_sql = req.body.query; // query 
  const datos = req.body.dat_act;
  if (req.body.opciones) const opciones=req.body.opciones
     else const opciones ={}
  console.log('====== Where ================', condicion);
  console.log('====== nom_vis ================', nom_vis);
  console.log('====== nom_tab ================', nom_tab);

  //console.log(llamada);

  // ai no se pone el break sigue hacia abajo comparando

  tip_lla = tip_lla.toUpperCase()

  switch (tip_lla) {
    case 'USE':
      console.log('=========== USE ==============')
      console.log(condicion)
      [db][nom_vis].findAll(condicion, orden)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          console.log(err);
          res.writeHead(400, err.message, { 'Content-Type': 'text/plain' });
          res.send();
        });

      break;

    case 'OPEN':  // 

      condicion.where = { nom_tab: nom_tab };
      console.log('============== Definicion de la tabla', nom_tab);
      console.log('============== Definicion Where ', condicion);




      vi_lla1_dat.findAll(condicion)
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
          const nom_ind = nom_vis.substr(3, 8);

          const condicion = {
            where: {
              nom_tab: nom_tab,
              nom_ind: nom_ind.toUpperCase(),

            }

          }
          // console.log('Valor estructura tabla======>',view.value[0]) ; 
          // buscara las variables del indice
          vi_lla1_ind.findAll(condicion)
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
              res.writeHead(400, "No pudo leer la tabla de indices", { 'Content-Type': 'text/plain' });
              res.send();

            });


        }) // fin then.data
        .catch(err => {
          res.writeHead(400, "Ocurrio un error al leer de la Base de DAtos", { 'Content-Type': 'text/plain' });
          res.send();
        });
      // res.send([db][nom_vis]);

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

      sequelize.transaction({ autocommit: false })
        .then(transaction => {
          [db][nom_vis].create(datos, {
            returning: true,
            plain: true,
            transaction: transaction
          })
            .then((result) => {

              // Obtiene el timestamp y key_pri actual
              condicion.atributes = ['timestamp', 'key_pri'];
              console.log('==========Condicion insercion =======', condicion);
              [db][nom_vis].findAll(condicion)
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
      console.log('========== Objeto =======', [db][nom_vis]);

      sequelize.transaction({ autocommit: false })
        .then(transaction => {
          await [db][nom_vis].update(datos, {
            where: { key_pri: key_pri },
            returning: true,
            plain: true,
            transaction: transaction
          })
            // [db][nom_vis].upsert(dat_act, condicion)
            .then((result) => {
              console.log('==========Dato actualizado=======', result);
              // Obtiene el timestamp actual
              await [db][nom_vis].findAll({  // busca el timestamp 
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



      await [db][nom_vis].destroy(condicion)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.writeHead(409, err.message, { 'Content-Type': 'text/plain' });
          res.send();
        });

      break;
    case 'SQLEXEC':
       
      console.log('SQLEXEC ins_sql====>>>>',ins_sql)
      console.log('SQLEXEC opciones====>>>>',opciones)

      que_int.query(ins_sql,opciones)
        .then(data => {
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



}
/*
Ejemplo login Base de datos
http://176.16.200.20:58000/login?json={
"nom_emp": "Demo",
"user": "sa",
"pass": "picone"}
*/

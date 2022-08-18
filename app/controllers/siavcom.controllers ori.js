// funcion $(nom_fun) podemos definir una funcion basada en su nombre 

//const { siavcom, Sequelize, queryInterface } = require("../models"); // llama aqui (index.js) que es donde esta la definicion de comenom




const db = require("../models"); // Conexion a la bas de datos con todas las vistas
const vi_lla1_nom = db.vi_lla1_nom;


const Op = db.Sequelize.Op;  // Operaciones logicas del Sequeliz
const que_int = db.sequelize.getQueryInterface(); // Se trae las funciones de QueryInterface

//.describeTable;
//getQueryInterface.describeTable;
//const des_tabla =db.getQueryInterface.describeTable;


console.log('Abre base de datos');


exports.sql = (req, res) => {


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





  var tip_lla = req.body.tip_llamada; // Tipo de llamada USE , USE NODATA  
  const condicion = { where: {},atributes :{} }
  condicion.where = req.body.where; // Condicion Where de busqueda

  const nom_vis = req.body.nom_vis.toLowerCase();  // Nombre de la vista indice a utilizar 
  var nom_tab = 'COME' + nom_vis.substr(-3, 3); // Nombre de la tabla
  nom_tab = nom_tab.toUpperCase();
  //const nom_tab=nom_vis.toUpperCase();  // se tiene que poner () para que llame a la funcion

  console.log('Tabla', nom_tab)

  const orden = { order: {} }
  orden.order = req.body.order; // Orden de la consulta
  const ins_sql = req.body.query;
  const datos = req.body.dat_act;

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
      db[nom_vis].findAll(condicion, orden)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          console.log(err);
          res.writeHead(400,err.message,{'Content-Type': 'text/plain'});
          res.send();
        });

      break;

    case 'OPEN':  // 

      condicion.where = { nom_tab: nom_tab };
      console.log('============== Definicion de la tabla', nom_tab);
      console.log('============== Definicion Where ', condicion);


     

      db.vi_lla1_dat.findAll(condicion)
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
              new : [{}],
              old : [{}]
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
            view.new[0][nom_campo]=null;
            view.old[0][nom_campo]=null;

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
          db.vi_lla1_ind.findAll(condicion)
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
              res.writeHead(400,"No pudo leer la tabla de indices",{'Content-Type': 'text/plain'});
              res.send();
    
            });


        }) // fin then.data
        .catch(err => {
          res.writeHead(400,"Ocurrio un error al leer de la Base de DAtos",{'Content-Type': 'text/plain'});
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
        res.writeHead(409,'No hay datos as insertar',{'Content-Type': 'text/plain'});
        res.send();

        return;
      }

      db.sequelize.transaction({autocommit:false})
      .then( transaction =>{
      db[nom_vis].create( datos,{
        returning: true,
        plain: true,
        transaction: transaction} )
        .then((result) => {
        
          // Obtiene el timestamp y key_pri actual
          condicion.atributes=['timestamp','key_pri'];
          console.log('==========Condicion insercion =======',condicion);
          db[nom_vis].findAll(condicion)
            .then(data => {
              // envia el timestamp
              transaction.commit();
              res.send(data);
            })
            .catch(err => {     // Error al leer el TimeStamp
              transaction.rollback();
              res.writeHead(400,err.message,{'Content-Type': 'text/plain'});
              res.send();
            });
          ///////////////////
          //res.send(data);
        })
        .catch(err => {
          transaction.rollback();
          res.writeHead(409,err.message,{'Content-Type': 'text/plain'});
          res.send();

        });
      })

      break;

    case 'UPDATE':

      if (!datos) {
        res.writeHead(400,"No DATA to update",{'Content-Type': 'text/plain'});
        res.send();

        return;
      }
    
     
      const key_pri=datos.key_pri;
            

      if (datos.key_pri == 0) {
        res.writeHead(400,"No se puede actualizar un registro con key_pri=0",{'Content-Type': 'text/plain'});
        res.send();

      }
      delete datos['val_vista'];
      console.log('========== Objeto =======',db[nom_vis]);

      db.sequelize.transaction({autocommit:false})
      .then( transaction =>{
      db[nom_vis].update( datos, { where : { key_pri: key_pri },
        returning: true,
        plain: true,
        transaction: transaction  } )
    // db[nom_vis].upsert(dat_act, condicion)
      .then((result) => {
          console.log('==========Dato actualizado=======',result);
          // Obtiene el timestamp actual
         db[nom_vis].findAll({  // busca el timestamp 
            attributes: ['timestamp'],
            where: { key_pri: key_pri},transaction :transaction
          })
            .then(data_key => {  // envia el timestamp
              transaction.commit();
              res.send(data_key);
            })
            .catch(err => {     // Error al leer el TimeStamp
              transaction.rollback();
              res.writeHead(400,err.message,{'Content-Type': 'text/plain'});
              res.send();
            });
          ///////////////////
          //res.send(data);
        })
        .catch(err => {
          transaction.rollback();
          res.writeHead(409,err.message,{'Content-Type': 'text/plain'});
          res.send();

        });
      })  

      break;


    case 'DELETE':

      if (!condicion) {
        res.writeHead(400,"No hay condicion WHERE",{'Content-Type': 'text/plain'});
        res.send();
        return;
      }



      db[nom_vis].destroy(condicion)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.writeHead(409,err.message,{'Content-Type': 'text/plain'});
          res.send();
        });

      break;
    case 'QUERY':

      if (!condicion) {
        res.writeHead(400,"No hay QUERY para procesar",{'Content-Type': 'text/plain'});
        res.send();
        return;
      }



      que_int.query(ins_sql)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.writeHead(409,err.message,{'Content-Type': 'text/plain'});
          res.send();
        });

      break;


    default:
    // code block
  }





};




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

  var dir_emp = process.cwd() + '/app/empresas/' + nom_emp // directorio de empresas 

  options = require(dir_emp + '/db.config.js') //[env] // crea el archivo de env
  console.log('Lee empresa options', options)
  //console.log('Lee archivo de configuracion====>>>',options)
  if (!options) {
    res.writeHead(400, 'No existe empresa', { 'Content-Type': 'text/plain' });
    res.send();
  }


  options['username'] = user
  options['password'] = pass
  options['dir_emp'] = dir_emp
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
      //      const sistemas = ['come']  // poner todos los sistemas 
      const sistemas = ['files']  // poner todos los sistemas 

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
            console.log('Siavcom controllers Sequalize Model===> ', model)
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
        db: db,
        dir_emp: dir_emp,
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
      res.writeHead(401, err.message, { 'Content-Type': 'text/plain' });
      res.send();
    });
  return
}


// comienzan los requerimientos a la base de datos
exports.sql = (req, res) => {
  // const conexion=this.conexion; 
  //console.log('Conexion Sql =====>', conexion)


  const { id_con } = req.body; // Id de conexion   es lo mismo id_con=req.body.id_con


  //{googggle, xcos, ...resultado} excluye objetos y en resultado que el objeto resultante


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
    res.writeHead(408, 'No hay conexion o expiro el tiempo de conexion', { 'Content-Type': 'text/plain' });
    res.send();
    return;
  }

  const db = conexion[id_con].db // asignamos el objeto de base de datos
  const dir_emp = conexion[id_con].dir_emp


  //console.log('Base de datos',db)
  // console.log('db a utilizar=====>',db)

  var tip_lla = req.body.tip_llamada; // Tipo de llamada USE , USE NODATA  
  const condicion = { where: {}, atributes: {} }
  const opciones = {
    plain: false,
  }
  //const condicion = { where: {} }
  //console.log('condicion.where =',req.body.where)
  condicion.where = req.body.where
  //eval('condicion.where ='+req.body.where); // Condicion Where de busqueda
  let nom_vis = ''
  let nom_tab = ''

  if (req.body.nom_vis && req.body.nom_vis != null)
    nom_vis = req.body.nom_vis
  if (req.body.nom_tab && req.body.nom_tab != null)
    nom_tab = req.body.nom_tab.trim()

  if (nom_tab == '') nom_tab = nom_vis
  if (req.body.opciones && req.body.opciones.replacements) opciones['replacements'] = req.body.opciones.replacements

  nom_tab = nom_tab.toLowerCase()
  nom_tab = nom_tab.trim()

  nom_vis = nom_vis.toLowerCase()
  nom_vis = nom_vis.trim()

  //if (req.body.nom_vis) nom_vis = req.body.nom_vis.toLowerCase();  // Nombre de la vista indice a utilizar 

  // nom_vis = nom_vis.replace('vi_', '')


  //let nom_tab = 'man_come' + nom_vis.substr(-3, 3); // Nombre de la tabla de mantenimiento


  console.log('req ======>>>>>>>', req.body, condicion)
  // aqui me quede , no hay condicion 
  const orden = { order: {} }
  let ins_sql = ''
  if (req.body.order) orden.order = req.body.order; // Orden de la consulta

  ins_sql = req.body.query;
  const datos = req.body.dat_act;


  //console.log(llamada);


  tip_lla = tip_lla.toUpperCase()

  switch (tip_lla) {
    case 'USE':
      // console.log('=========== USE ==============', nom_vis)
      // console.log('====== Where ================', condicion);
      //  console.log('====== IN nom_tab ================', nom_tab);

      //  console.log('====== Order by  ================', orden);
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


    case 'USENODATA':
      nom_vis = nom_vis.toLowerCase()

      ins_sql = "select * from vi_schema where nom_vis='" + nom_vis + "' order by con_dat"

      // buscar en la tabla de indices cual es la tabla a utilizar

      db.sequelize.query(ins_sql) // lee el diccionaro de datos
        .then(data => {
          //console.log('============== Definicion Schema>>>>', data);
          // console.log('=====USENODATA data=======',data)

          if (!data.length || !data[0][0].tip_obj) {  //  No hay tabla
            res.writeHead(400, 'No existe sqlView ===> ' + nom_vis, { 'Content-Type': 'text/plain' });
            res.send();
            return false;
          }
          // console.log('==USENODATA ===>', data[0][0])
          let tip_campo = '';
          let nom_campo = '';
          let val_campo = '';
          let val_defa = null



          let fec_blanco = '1900-01-01';
          let tim_blanco = '1900-01-01 00:00:00';
          //let date=date();
          //let datetime=date();
          //let today=date+' '+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

          // Definimos nuestra vista y asignamos el nombre dela tabla de mantenimiento
          const view = {
            tip_obj: data[0][0].tip_obj,
            nom_tab: data[0][0].vac_vis,      // vista de actualizacion (mantenimiento) (anterior nom_tab)
            exp_where: data[0][0].wjs_vis,     //  wjs_vis=where javascript  sql_vis,   condicion where 
            exp_indice: '',                    // expresión  del indice
            ord_vis: data[0][0].ord_vis.trim().toLowerCase(),         // orden de la vista
            est_tabla: {},                     // estructura de la tabla
            new: [{}],                         // registro new
            old: [{}]                          //  regsitro old
          };


          // var est_campo = {};
          var sw_timestamp = false
          //  Generamos la estructura de la tabla en base de los datos traidos
          for (var i = 0; i < data[0].length; i++) {

            nom_campo = data[0][i].cam_dat.trim().toLowerCase(); // pasamos a minusculas
            tip_campo = data[0][i].tip_dat.toLowerCase().substring(0, 3);
            val_defa = data[0][i].val_dat ? data[0][i].val_dat.trim() : ''
            // val_defa = data[0][i].vvu_dat.trim();  // valor vue

            if (nom_campo == 'timestamp') {
              sw_timestamp = true
              tip_cam = 'tsp'
            }
            switch
            (tip_campo) {
              case 'cha':
                tip_campo = 'STRING'
                val_campo = "''"
                break;
              case 'tex':
                tip_campo = 'TEXT'
                val_campo = "''"
                break;
              case 'var':
                tip_campo = 'TEXT'
                val_campo = "''"
                break;
              case 'big':
                tip_campo = 'BIGINT'
                val_campo = '0'
                break;
              case 'int':
                tip_campo = 'INTERGER'
                val_campo = '0'
                break;
              case 'bit':
                tip_campo = 'SMALLINT'
                val_campo = '0'
                break;
              case 'sma':
                tip_campo = 'SMALLINT'
                val_campo = '0'
                break;
              case 'tim':
                tip_campo = 'TIME'
                val_campo = "'1900-01-01 00:00:00'"

                break;
              case 'dat':
                tip_campo = 'DATE'
                val_campo = "'1900-01-01'"

                break;
              case 'num':
                tip_campo = 'NUMBER'
                val_campo = '0'

                break;
              case 'tsp':  // Timestamp MSSQL
                tip_campo = 'TBD'
                val_campo = null
                break;
              case 'bol':  // boolean Logico 1=verdadero 0=Falso
                tip_campo = 'BOOLEAN'
                val_campo = '0'

                break;


              default:
                tip_campo = 'STRING'
                val_campo = "''"

            }

            if (val_defa.length == 0) val_defa = val_campo


            // asignamos los valores a la estructura del campo
            const est_campo = {
              des_cam: data[0][i].ref_dat.trim(),  // Nombre delcampo
              tip_cam: tip_campo,   // tipo de dato
              val_cam: val_campo, //data[0][i].val_dat.trim()    // Valor al insertar campo en blanco
              val_def: val_defa
            }

            if (nom_campo != 'usu_usu')
              view.est_tabla[nom_campo] = est_campo; // generamos la definicion campo por campo
            // Segun el tipo de campo, inicializamos su valor en blanco, cero , fecha ,etc   
            // Generamos el renglo en null
            view.new[0][nom_campo] = null;
            view.old[0][nom_campo] = null;

          } // Fin del for


          if (!sw_timestamp) { // No hay campo timestamp (se supone postgres)
            const est_campo = {
              des_cam: 'timestamp',  // Nombre delcampo
              tip_cam: 'BIGINT',   // tipo de dato
              val_cam: '0' //data[0][i].val_dat.trim()    // Valor al insertar campo en blanco
            }
            view.est_tabla['timestamp'] = est_campo; // generamos la definicion campo timestamp

          }

          //   console.log('view.est_tabla Tabla===>',view.est_tabla)
          //console.log('Data===>',data[0][0])
          let exp_ind = ''
          if (data[0][0].fil_vis != null)
            exp_ind = data[0][0].fil_vis.trim().toLowerCase();

          let con_ind = ''
          let nom_cam = ''
          let pos = exp_ind.indexOf(',')
          //console.log('Exp Indice ===>',exp_ind,pos)  
          // console.log(' Use nodata Vista 1 model======>',data[0][0])
          let comillas = ''

          if (pos <= 0) // si solo lo compone una variable
            pos = exp_ind.length

          nom_cam = exp_ind.slice(0, pos);

          while (nom_cam.length > 0) {   // Recorremos todas las variables del indice
            // comillas="${"+"'"+"}"
            comillas = "'"

            //console.log('Indice campo===>',nom_cam,data[0]) 
            // busca el campo en la definicion para ver su tipo de valor 
            for (var i = 0; i < data[0].length; i++) {
              //console.log('Busca campo===>',nom_cam,data[0][i].cam_dat.toLowerCase()) 


              if (nom_cam.trim().toLocaleLowerCase() == data[0][i].cam_dat.trim().toLowerCase()) {
                // console.log('Encontre campo===>',nom_cam,data[0][i].tip_dat.toLowerCase().substring(0, 3)) 
                const tip_dat = data[0][i].tip_dat.toLowerCase().substring(0, 3)
                if (tip_dat == 'big' ||
                  tip_dat == 'int' ||
                  tip_dat == 'big' ||
                  tip_dat == 'sma' ||
                  tip_dat == 'num' ||
                  tip_dat == 'bol') comillas = ''
                i = data[0].length
              }
            }

            if (view.tip_obj == 'MODEL') {
              //  con_ind = con_ind + nom_cam + ' : '+comillas+'${m.' + nom_cam + '}'+comillas+','
              con_ind = con_ind + nom_cam + ' : m.' + nom_cam + ',';
            }
            if (view.tip_obj == 'VIEW') {
              if (con_ind.length > 0)
                con_ind = con_ind + ' and '
              con_ind = con_ind + exp_ind + '=' + comillas + '${m.' + exp_ind + '}' + comillas
            }

            exp_ind = exp_ind.substring(pos + 1);
            pos = exp_ind.indexOf(',')


            if (pos <= 0) // si solo lo compone una variable
              pos = exp_ind.length

            if (pos > 0)
              nom_cam = exp_ind.slice(0, pos);
            else
              nom_cam = ''


            //   console.log(' Use nodata Vista 1 ======>exp_ind=',exp_ind,'con_ind='+ con_ind,'nom_cam='+nom_cam)

          }

          if (con_ind.length > 0) {
            if (view.tip_obj == 'MODEL')
              con_ind = '{' + con_ind + '}'
            //  con_ind = ' { ' + con_ind + exp_ind + ': m.' + exp_ind + '}'
            if (view.tip_obj == 'VIEW')
              con_ind = "`" + con_ind + "`"
          }

          view.exp_indice = con_ind // Indice a utilizar

          //console.log(' Use nodata Vista ======>',nom_vis,data[0][0].fil_vis.trim().toLowerCase(),'Cond Indice==>'+ con_ind)
          //console.log('===================================================================== ')
          // console.log('USENODATA con_ind ===>',con_ind)


          res.send(view); // enviamos la vista
          return
          /* ver 1
          }) // fin then.data

            .catch(err => {
              res.writeHead(400, err.message, { 'Content-Type': 'text/plain' });
              res.send();

            });
            */

        }) // fin then.data
        .catch(err => {
          console.log('No se pudo ejecutar', err)
          res.writeHead(400, "SQL ERROR " + ins_sql, { 'Content-Type': 'text/plain' });
          res.send();
          return
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
        res.writeHead(400, 'No hay datos as insertar', { 'Content-Type': 'text/plain' });
        res.send();

        return;
      }
      //console.log('INSERT datos ========>', datos,condicion)
      db.sequelize.transaction({ autocommit: false })
        .then(transaction => {
          db[nom_tab].create(datos, {
            returning: false,
            plain: false,
            transaction: transaction,
            validate: true
          })
            .then((result) => {
              // Obtiene el timestamp y key_pri actual
              transaction.commit();

              console.log('================ datos insertados  condicion >>>>>', result, condicion)
              db[nom_tab].findAll(

                {
                  attributes: ['timestamp', 'key_pri'],
                  where: condicion.where
                })

                // db[nom_tab].findAll(condicion)
                .then(data => {
                  console.log('======== datos insertados leidos =======', data);
                  // envia el timestamp
                  res.send(data);
                })
                .catch(err => {     // Error al leer el TimeStamp
                  console.error('Insert commit Error', err)
                  transaction.rollback();
                  res.writeHead(400, err.message, { 'Content-Type': 'text/plain' });
                  res.send();
                });
              ///////////////////
              //res.send(data);
            })
            .catch(err => {
              console.error('Insert Error ', err)
              transaction.rollback();
              res.writeHead(400, err.message, { 'Content-Type': 'text/plain' });
              res.send();

            });
        })
        .catch(err => {     // Error al leer el modelo en  sequelize
          console.error('Insert transaction Error', err)
          transaction.rollback();
          res.writeHead(400, err.message, { 'Content-Type': 'text/plain' });
          res.send();
        });


      break;

    case 'UPDATE':

      if (!datos) {
        res.writeHead(400, "No DATA to update", { 'Content-Type': 'text/plain' });
        res.send();

        return;
      }


      if (datos.key_pri == 0) {
        res.writeHead(400, "No se puede actualizar un registro con key_pri=0", { 'Content-Type': 'text/plain' });
        res.send();

      }


      const key_pri = datos.key_pri;
      // aqui voy
      delete datos['key_pri']   // borramos el key pri de los datos a actualizar
      delete datos['val_vista'];

      db.sequelize.transaction({ autocommit: false })
        .then(transaction => {
          console.log('========== Begin trans datos a actualizar =======', nom_tab, key_pri, datos);

          db[nom_tab].update(datos, {
            where: { key_pri: key_pri },
            returning: false,
            plain: false,
            transaction: transaction
          })


            // db[nom_vis].upsert(dat_act, condicion)
            .then((result) => {
              console.log('update respuesta  =====>>>', result)
              transaction.commit()
              // Obtiene el timestamp actual
              db[nom_tab].findAll(
                {
                  attributes: ['timestamp','key_pri'],
                  where: { key_pri: key_pri },
                  raw: true,
                })
                .then(datos => {  // envia el timestamp aqui voy checar demas findall
                  console.log('==========Dato actualizado datos=======>>>>', datos[0].timestamp) 
                  res.send(datos[0]);

                })
                .catch(err => {     // Error al leer el TimeStamp
                  res.writeHead(400, err.message, { 'Content-Type': 'text/plain' });
                  res.send();
                  console.error('Update Commit Error', err)
                  transaction.rollback();

                });
              ///////////////////
              //res.send(data);
            })
            .catch(err => {
              res.writeHead(400, err.message, { 'Content-Type': 'text/plain' });
              res.send();
              console.error('Update Error ', err)
              transaction.rollback();

            })
        })
        .catch(err => {
          res.writeHead(400, err.message, { 'Content-Type': 'text/plain' });
          res.send();
          console.error('Update Transaction Error ', err)
          transaction.rollback();

        });


      break;


    case 'DELETE':

      if (!condicion) {
        res.writeHead(400, "No hay condicion WHERE", { 'Content-Type': 'text/plain' });
        res.send();
        return;
      }
      /*
      db[nom_tab].findOne(condicion). //Busca si todavia existe el renglon
        then(row => {
          row.destroy() // deletes the row
            .then(data => {
              console.log('DELETE  data=====>',data)
              // res.sendStatus();
            })
            .catch(err => {
              console.log('DELETE error===>', err)
              res.writeHead(400, err.message, { 'Content-Type': 'text/plain' });
              res.sendStatus(err);
            });

        })

      */

      delete condicion.atributes
      db[nom_tab].destroy(condicion)
        .then(data => {
          console.log('DELETE condicion =====', condicion, data)
          data = { result: true }
          res.send(data);
        })
        .catch(err => {
          console.log('DELETE error===>', err)
          res.writeHead(400, err.message, { 'Content-Type': 'text/plain' });
          res.sendStatus(err);
        });

      break;
    // aqui me quede
    case 'GETDEF':  // Obttine la definicion de la tabla o la vistas
      const est_tabla = {}
      ////////////////////////////////////////////////////////////////////////////////
      //opciones.model = true

      ins_sql = "select COLUMN_NAME,DATA_TYPE from INFORMATION_SCHEMA.COLUMNS where lower(TABLE_NAME) ='" + ins_sql + "'"
      console.log('GETDEF =============', ins_sql)

      //      db.sequelize.query(ins_sql, { type: db.sequelize.QueryTypes.SELECT })
      db.sequelize.query(ins_sql, { type: db.sequelize.QueryTypes.SELECT })

        .then(function (result) {

          console.log('GETDEF===>', result)
          if (result.length > 0) {
            for (var i = 0; i < result.length; i++) {

              if (result[i].COLUMN_NAME) {
                nom_campo = result[i].COLUMN_NAME.trim().toLowerCase(); // pasamos a mayusculas
                tip_campo = result[i].DATA_TYPE.trim();
              }

              if (result[i].column_name) {
                nom_campo = result[i].column_name.trim().toLowerCase(); // pasamos a mayusculas
                tip_campo = result[i].data_type.trim();
              }

              tip_campo = tip_campo.substr(0, 3).toUpperCase()
              console.log('GETDEF tip_camp ====>', tip_campo)

              switch
              (tip_campo) {
                case 'CHA':
                  tip_campo = 'STRING'
                  val_campo = ''
                  break;
                case 'TEX':
                  tip_campo = 'TEXT'
                  val_campo = ''
                  break;
                case 'VAR':
                  tip_campo = 'TEXT'
                  val_campo = ''
                  break;
                case 'BIG':
                  tip_campo = 'BIGINT'
                  val_campo = 0
                  break;
                case 'INT':
                  tip_campo = 'INTERGER'
                  val_campo = 0
                  break;
                case 'BIT':
                  tip_campo = 'SMALLINT'
                  val_campo = 0
                  break;
                case 'SMA':
                  tip_campo = 'SMALLINT'
                  val_campo = 0
                  break;
                case 'TIM':
                  tip_campo = 'TIME'
                  val_campo = '1900-01-01 00:00:00'

                  break;
                case 'DAT':
                  tip_campo = 'DATE'
                  val_campo = '1900-01-01'

                  break;
                case 'NUM':
                  tip_campo = 'NUMBER'
                  val_campo = 0

                  break;
                default:
                  tip_campo = 'STRING'
                  val_campo = ''

              }




              // asignamos los valores a la estructura de la tabla
              est_tabla[nom_campo] = {

                des_cam: nom_campo,
                tip_cam: tip_campo,
                val_cam: val_campo
              }

              //              view.est_tabla[nom_campo] = est_tabla; // generamos la definicion campo por campo
              //              // Segun el tipo de campo, inicializamos su valor en blanco, cero , fecha ,etc   
              //              view.new[0][nom_campo] = null;
              //              view.old[0][nom_campo] = null;

            } // Fin del for

          }
          res.send(est_tabla);


          //res.send(result[0]);  
          //          console.log('Resultado GET',result[0].DATA_TYPE, result[0].CHARACTER_MAXIMUM_LENGTH)
          //return callback(result[0].DATA_TYPE, result[0].CHARACTER_MAXIMUM_LENGTH);
          //callback(false, false)
        })
        .catch(err => {
          console.log('No se pudo ejecutar ==', err)
          res.writeHead(400, "SQL ERROR " + ins_sql, { 'Content-Type': 'text/plain' });
          res.send();
        });

      break;
    /////////////////////////     


    case 'SQLEXEC':
      //console.log('SQLEXEC ins_sql====>>>>',ins_sql)
      opciones.mapToModel = true
      console.log('SQLEXEC opciones====>>>>', ins_sql, opciones)

      db.sequelize.query(ins_sql, opciones)
        .then(data => {
          console.log('<=========query resultado===>', data)
          res.send(data[0]);
        })
        .catch(err => {
          console.log('No se pudo ejecutar ==', err)
          res.writeHead(400, "SQL ERROR " + ins_sql, { 'Content-Type': 'text/plain' });
          res.send();
        });

      break;

    case 'GENTABLA':

      opciones.mapToModel = true

      // se pasa el nombre de la tabla y si es posgres o MSSQL
      ins_sql = `select P_gen_todo('${options.dialect}','${nom_tab}') as query`
      console.log('<========= P_gen_todo ===>', ins_sql)

      db.sequelize.query(ins_sql) // genera query
        .then(data => {

          for (let ren = 0; ren < data[0].length; ren++) { // genera tantas vistas como sea posible
            const query = data[0][ren].query;

            console.log('<========= Ejecuta  query===>', query)

            db.sequelize.query(query)
              .then(data => {
                console.log('<=========Query ejecutado =======>', query)
              })
              .catch(err => {
                console.log('No se pudo ejecutar query ==', err)
                res.writeHead(400, "query :" + query + ' SQL ERROR :' + err, { 'Content-Type': 'text/plain' });
                res.send()
                return
              })

          }
        }).
        catch(err => {
          console.log('No se pudo ejecutar ==', err)
          res.writeHead(400, "query :" + ins_sql + ' SQL ERROR :' + err, { 'Content-Type': 'text/plain' });
          res.send();
          return
        })

      break


    /*
    ins_sql = `select F_gen_tabla('${options.dialect}','${nom_tab}') as query`
    var query = ''
    db.sequelize.query(ins_sql) // genera query
      .then(data => {
        query = data[0][0].query 
        console.log('=================================================')
        console.log('genera query======> ',query)

        console.log('=================================================')

        db.sequelize.query(query) // ejecuto query
          .then(data => {
            console.log('<=========TABLA GENERADA =======>', data)
            ins_sql = `select F_gen_vista_man('${options.dialect}','${nom_tab}') as query `
            db.sequelize.query(ins_sql)
              .then(data => {
                query = data[0][0].query
                db.sequelize.query(query)
                  .then(data => {
                    console.log('<=========VISTA DE MTO GENERADA =======>', data)
                    ins_sql = `select F_gen_trigger_fun('${options.dialect}','${nom_tab}') as query`
                    db.sequelize.query(ins_sql)
                      .then(data => {
                        console.log('<========= SCRIPT FUNCION DE MTO GENERADA =======>', data)
                        query = data[0][0].query
                        db.sequelize.query(query)
                          .then(data => {
                            console.log('<========= FUNCION DE MTO GENERADA =======>', data)
                            ins_sql = `select F_gen_trigger_man('${options.dialect}','${nom_tab}') as query`
                            db.sequelize.query(ins_sql)
                              .then(data => {
                                console.log('<========= SCRIPT trigger DE MTO GENERADA =======>', data)
                                query = data[0][0].query
                                db.sequelize.query(query)
                                  .then(async data => {
                                    let result = ''
                                    console.log('<=========TRIGGER GENERADO =======>', data)

                                    //const promesa = genModel(nom_tab, db, dir_emp)

                                    genModel(nom_tab, db, dir_emp)
                                      .then((data) => {

                                        if (data == 'Ok') {
                                          res.send('Se genero tabla ' + nom_tab);
                                        }
                                        else {
                                          res.writeHead(400, "SQL ERROR " + res, { 'Content-Type': 'text/plain' });
                                          res.send();
                                        }
                                      }) //  Fin promesa
                                      .catch(err => {
                                        console.log('No se pudo generar MODEL ', err)
                                        res.writeHead(400, "NODE ERROR :" + err, { 'Content-Type': 'text/plain' });
                                        res.send();
                                      });



                                  }) // trigger generado
                              }) // trigger de mto generado

                              .catch(err => {
                                console.log('No se pudo ejecutar ==', err)
                                res.writeHead(400, "query :" + ins_sql + ' SQL ERROR :' + err, { 'Content-Type': 'text/plain' });
                                res.send();
                              });
                          })
                          .catch(err => {
                            console.log('No se pudo ejecutar ==', err)
                            res.writeHead(400, "query :" + ins_sql + ' SQL ERROR :' + err, { 'Content-Type': 'text/plain' });
                            res.send();
                          });
                      })
                      .catch(err => {
                        console.log('No se pudo ejecutar ==', err)
                        res.writeHead(400, "query :" + ins_sql + ' SQL ERROR :' + err, { 'Content-Type': 'text/plain' });
                        res.send();
                      });
                  })
                  .catch(err => {
                    console.log('No se pudo ejecutar ==', err)
                    res.writeHead(400, "query :" + ins_sql + ' SQL ERROR :' + err, { 'Content-Type': 'text/plain' });
                    res.send();
                  });
              })
              .catch(err => {
                console.log('No se pudo ejecutar ==', err)
                res.writeHead(400, "query :" + ins_sql + ' SQL ERROR :' + err, { 'Content-Type': 'text/plain' });
                res.send();
              })
          })
          .catch(err => {
            console.log('No se pudo ejecutar ==', err)
            res.writeHead(400, "query :" + ins_sql + ' SQL ERROR :' + err, { 'Content-Type': 'text/plain' });
            res.send();
          })
      })
      .catch(err => {
        console.log('No se pudo ejecutar ==', err)
        res.writeHead(400, "query :" + ins_sql + ' SQL ERROR :' + err, { 'Content-Type': 'text/plain' });
        res.send();
      })

    break;
   */
    case 'GENINDICES':

      opciones.mapToModel = true
      // se pasa el nombre de la tabla y si es posgres o MSSQL

      ins_sql = `select F_gen_indices('${options.dialect}','${nom_tab}') as query`

      db.sequelize.query(ins_sql, opciones)
        .then(data => {
          console.log('<========= f_gen_indices===>', data)
          const query = data[0][0].query
          db.sequelize.query(query)
            .then(data => {
              console.log('<=========query GENERA INDICES=======>', data)
              res.send(query);
            })
            .catch(err => {
              console.log('No se pudo ejecutar ==', err)
              res.writeHead(400, "query :" + ins_sql + ' SQL ERROR :' + err, { 'Content-Type': 'text/plain' });
              res.send();
            });
        })
        .catch(err => {
          console.log('No se pudo ejecutar ==', err)
          res.writeHead(400, "query :" + ins_sql + ' SQL ERROR :' + err, { 'Content-Type': 'text/plain' });
          res.send();
        });

      break;

    case 'GENVISTASSQL':
      opciones.mapToModel = true
      // se pasa el dialecto (posgres o MSSQL) y nombre de la tabla y si es 
      if (options.dialect = 'postgres')
        ins_sql = `select P_gen_vista('${options.dialect}','${nom_tab}') as query`
      else
        ins_sql = `exec  P_gen_vista '${options.dialect}','${nom_tab}' `

      db.sequelize.query(ins_sql, opciones)
        .then(data => {
          console.log('<========= P_gen_vistas_sql  ===>', data[0].length, data[0], data[0].length)
          for (let ren = 0; ren < data[0].length; ren++) { // genera tantas vistas como sea posible
            const query = data[0][ren].query;

            console.log('<========= P_gen_vistas_sql query===>', query)

            db.sequelize.query(query, opciones)
              .then(data => {
                console.log('<=========Vistas SQL Generada=======>', query)
              })
              .catch(err => {
                console.log('No se pudo ejecutar ==', err)
                res.writeHead(400, "query :" + ins_sql + ' SQL ERROR :' + err, { 'Content-Type': 'text/plain' });
                res.send();
              });
          }

        })
        .catch(err => {
          console.log('No se pudo ejecutar ==', err)
          res.writeHead(400, "SQL ERROR " + ins_sql, { 'Content-Type': 'text/plain' });
          res.send();
        });

      break;

    case 'GENMODELO':
      opciones.mapToModel = true

      genModel(nom_tab, db, dir_emp)
        .then((data) => {

          if (data == 'Ok') {
            res.send('Se genero tabla ' + nom_tab);
          }
          else {
            res.writeHead(400, "SQL ERROR " + res, { 'Content-Type': 'text/plain' });
            res.send();
          }
        }) //  Fin promesa
        .catch(err => {
          console.log('No se pudo generar MODEL ', err)
          res.writeHead(400, "NODE ERROR :" + err, { 'Content-Type': 'text/plain' });
          res.send();
        });

      break;


    default:
    // code block
  }


};

//////////////////////////////////////////////////////
/////////////////  Funciones /////////////////////////
//////////////////////////////////////////////////////


///////////////////////////////////////////
// Genera Model para sequelize 
//////////////////////////////////////////

async function genModel(nom_tab, db, dir_emp) {

  console.log('GENERA MODELO ')
  try {
    ins_sql = `select F_gen_modelo(nom_ind) as query,nom_ind from comeind where lower(nom_tab)=lower('${nom_tab}') and num_ind=1 `
    db.sequelize.query(ins_sql)
      .then(data => {
        if (!data[0][0] || data[0][0].query.trim() == '') { // No hay modelo a generar
          return
        }
        query = data[0][0].query
        const nom_ind = data[0][0].nom_ind
        const modelo = dir_emp + 'files/' + nom_ind.toLowerCase() + '.js'
        console.log('<=========Escribe Sequelize MODEL  Node Server=======>', modelo)
        //const fs = require('fs')

        fs.writeFile(modelo, query, (err) => {
          if (err) {
            console.log('<=========Error escribiento MODEL >', modelo, err)
            return "NODE ERROR. Can't write Sequelize MODEL " + modelo + " " + err
          }
        });

        return 'Ok'
      })
      .catch(err => {
        console.log('ERROR :', err)
        return 'error' + ins_sql
      });
  } catch (error) {
    console.error(`NODE ERROR. Can't write Sequelize MODEL: ${error}`);
    return 'error' + error
  }
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

// Ultima Modificacion  :
// 15/Octubre/2025 Se quita  if (nom_campo != 'usu_usu')


// funcion $(nom_fun) podemos definir una funcion basada en su nombre 

//const { siavcom, Sequelize, queryInterface } = require("../models"); // llama aqui (index.js) que es donde esta la definicion de comenom


//const dbConfig = require("../config/db.config.js");

// npm install requestify  

// query options={ type: QueryTypes.SELECT}


/////////////////////// Fernando Cuadras //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
// Allocating os module
const util = require('util');
const { exec } = require('child_process')
const execAsync = util.promisify(exec);
const os = require('os');
var { join } = require('path');
//var xml2js = require('xml2js');

var CryptoJS = require('crypto-js');

const fs = require('fs');
const openssl = require('openssl-nodejs');

const { Sequelize, DataTypes, QueryTypes } = require('sequelize');
const { Connection } = require('tedious');

const Op = Sequelize.Op;  // Operaciones logicas del Sequelize

const conexion = {}

//const que_int = sequelize.getQueryInterface(); // Se trae las funciones de QueryInterface

//.describeTable;
//getQueryInterface.describeTable;
//const des_tabla =db.getQueryInterface.describeTable;



// Override timezone formatting for MSSQL
/*
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
  return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS');
};
*/



exports.login = (req, res, callback) => {

  // const broadcast = req.body.broadcast //? req.body.broadcast : callback; // busca el broadcast


  // asignamos socket si existe

  const socket = res.handshake ? res : false
  // const broadcast = req.body.broadcast ? req.body.broadcast : callback; // busca el broadcast


  //  const socket = res.handshake.address ? res : false
  console.log('===========login Socket===========', socket.handshake.address)

  //console.log('siavcom.controlers login=>>>>>>>', JSON.parse(req))
  let obj_json = {}
  if (req && req.query && req.query.json)
    obj_json = JSON.parse(req.query.json)
  else
    obj_json = JSON.parse(req)



  console.log('json de conexion====>>>>>', obj_json)
  const fec_act = new Date().toISOString().slice(0, 10); //  Fecha actual del servidor de node

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

  // Generamps el path a la empresa en BackEnd 
  var dir_emp = process.cwd() + '/app/empresas/' + nom_emp // directorio de empresas 
  try {
    options = require(dir_emp + '/db.config.js')
  } catch (error) {

    // console.log('Lee empresa options', options)
    //console.log('Lee archivo de configuracion====>>>',options)

    console.log('No existe archivo de definicion empresa ', nom_emp)
    socket.emit('desconecta', nom_emp + ' Company definition invalid ')

    //  writeHead(false, 408, res, nom_emp + ' Company definition invalid ')// , { 'Content-Type': 'text/plain' });

    return
  }


  options['username'] = user
  options['password'] = pass
  options['dir_emp'] = dir_emp

  //  options['connetionTimeout']=300000 
  //  options['options']= { 'enableArithAbort': true, 'idleTimeoutMillis': 130000 }



  // options['requestTimeout']=0
  // console.log('Config de conexion =====>>>', options);


  const sequelize = new Sequelize(null, null, null, options); // trata de hacer la conexion
  //console.log('Squelize =====>>>', sequelize);

  // Faltaria el timeOut al autentificar
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
        fs // Revisa los archivos que se generaron en la carpeta, para representar la informaciï¿½n de los modelos
          .readdirSync(dir_emp + sistemas[i])
          .filter(file => {
            return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
          })
          .forEach(file => {
            //            const model = require(dir_emp + sistemas[i] + '/' + file)(sequelize, Sequelize.DataTypes);
            const model = require(dir_emp + sistemas[i] + '/' + file)(sequelize, DataTypes);
            //model.removeAttribute('id'); 

            db[model.name] = model;

            //console.log('Siavcom controllers Sequalize Model===> ', model)
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
        dialect: options.dialect,  // viene del archivo de configuracion
        jasperServer: options.jasperServer
      }

      // module.exports.conexion 

      //this.conexion[name].db= db ;
      // console.log('Base de datos====>',conexion)

      //   module.export=db // exportamos el ID como nombre de clase

      console.log('Se genero la conexion =', name)
      let ins_sql = ''
      if (options.dialect == 'postgres')
        ins_sql = 'select cast(current_timestamp as timestamp(3)) as fec_act'
      else
        ins_sql = 'select getdate() as fec_act'

      let fpo_pge = ''
      db.sequelize.query(ins_sql)
        .then(data => {
          fpo_pge = data[0][0].fec_act

          if (socket) {

            //        res=JSON.stringify({ id: name, dialect: options.dialect, fpo_pge })
            res = { id: name, dialect: options.dialect, fpo_pge }
            // console.log('Login res=',res,data[0][0])
            socket.emit('loginOk', res)
            return
            /////////////////////
          }

          res.json({ id: name, dialect: options.dialect, fpo_pge })
        })
    })
    .catch(err => {
      console.log('Usuario o password invalido ');
      // res.writeHead(408, 'Invalid user '+user+' or ivalid password',{ 'Content-Type': 'text/plain' });
      // await res_send(res,);

      if (socket) {
        console.log('Fail to SQL connect.', 'Invalid user "' + user + '" or password=', pass);
        socket.emit('loginFail', 'Invalid user "' + user + '" or password')
        //socket.disconnect()
        return
      }

      writeHead(false, 408, res, 'Invalid user "' + user + '" or password');
      return
    });
  return
}


/////////// comienzan los requerimientos a la base de datos /////////
exports.sql = async (req, res, callback) => {
  // funcion para quitar el error en MSSQL con las fechas 
  Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
    date = this._applyTimezone(date, options);
    // Z here means current timezone, _not_ UTC
    // return date.format('YYYY-MM-DD HH:mm:ss.SSS Z');
    // return date.format('YYYY-MM-DD HH:mm:ss.SSS');
    return date.format('YYYY-MM-DD HH:mm');

  };


  if (req.id_con)
    req.body = req


  // asignamos socket si existe
  const socket = res.handshake ? res : false
  const broadcast = req.body.broadcast ? req.body.broadcast : callback; // busca el broadcast


  if (socket)
    console.log('===========sql Socket=========== req=', req)

  //try  {
  // const conexion=this.conexion; 
  //console.log('Conexion Sql =====>', conexion)
  if (!req || !req.body || !req.body.id_con) {
    writeHead(broadcast, 422, res, 'bad requeriment') //, { 'Content-Type': 'text/plain' });

    return;

  }


  const { id_con } = req.body; // Id de conexion   es lo mismo id_con=req.body.id_con


  //const jrxml = req.body.jrxml?req.body.jrxml:''
  //const jasperServer =conexion[id_con].jasperServer? conexion[id_con].jasperServer + '/json':''


  //{googggle, xcos, ...resultado} excluye objetos y en resultado que el objeto resultante


  const fec_act = new Date().toISOString().slice(0, 10); //  Fecha actual


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


    const socket = res.handshake ? res : false

    if (socket) {
      res.emit('error', 'Timeout or connection error')
      return
    }

    /*
     if (broadcast) {// si es llamdo del socket
       res.emit('error', 'Timeout or connection error')
       res.disconnect()
     }
     */
    writeHead(broadcast, 408, res, 'Timeout or connection error')// , { 'Content-Type': 'text/plain' });

    return;
  }

  const db = conexion[id_con].db // asignamos el objeto de base de datos
  const dir_emp = conexion[id_con].dir_emp
  const dialect = conexion[id_con].dialect
  const empresa = conexion[id_con].empresa

  const jrxml = req.body.jrxml ? req.body.jrxml : ''
  const dataView = req.body.dataView ? req.body.dataView : ''
  const jasperServer = conexion[id_con].jasperServer ? conexion[id_con].jasperServer + '/json' : ''


  //console.log('Base de datos',db)
  // console.log('db a utilizar=====>',db)

  var tip_lla = req.body.tip_llamada; // Tipo de llamada USE , USE NODATA  
  const condicion = { where: {}, atributes: {} }
  const opciones = {
    plain: false,
    raw: true,
    logging: false // Disables SQL query logging for all queries
  }
  //const condicion = { where: {} }
  //console.log('condicion.where =',req.body.where)
  condicion.where = req.body.where

  //eval('condicion.where ='+req.body.where); // Condicion Where de busqueda
  let nom_vis = ''
  let nom_tab = ''
  let tdo_tdo = ''
  let ndo_doc = 0

  if (req.body.tdo_tdo && req.body.tdo_tdo != null)
    tdo_tdo = req.body.tdo_tdo

  if (req.body.ndo_doc && req.body.ndo_doc != null)
    ndo_doc = req.body.ndo_doc

  if (req.body.nom_vis && req.body.nom_vis != null)
    nom_vis = req.body.nom_vis
  if (req.body.nom_tab && req.body.nom_tab != null)
    nom_tab = req.body.nom_tab.trim()

  if (nom_tab == '') nom_tab = nom_vis
  if (req.body.opciones && req.body.opciones.replacements)
    opciones['replacements'] = req.body.opciones.replacements

  nom_tab = nom_tab.toLowerCase()
  nom_tab = nom_tab.trim()

  nom_vis = nom_vis.toLowerCase()
  nom_vis = nom_vis.trim()



  //if (req.body.nom_vis) nom_vis = req.body.nom_vis.toLowerCase();  // Nombre de la vista indice a utilizar 

  // nom_vis = nom_vis.replace('vi_', '')


  //let nom_tab = 'man_come' + nom_vis.substr(-3, 3); // Nombre de la tabla de mantenimiento
  // aqui me quede , no hay condicion 
  const orden = { order: {} }
  let ins_sql = ''
  if (req.body.order) orden.order = req.body.order; // Orden de la consulta

  ins_sql = req.body.query;
  const datos = req.body.dat_act;


  //console.log(llamada);

  tip_lla = tip_lla.toUpperCase()


  if ((tip_lla == 'USE' ||
    // tip_lla == 'USENODATA' ||
    tip_lla == 'INSERT' ||
    tip_lla == 'UPDATE' ||
    tip_lla == 'DELETE'
  ) &&
    !db[nom_tab]) {


    let men_err = 'Not exist sequelize model of ' + nom_tab
    console.error('Insert  Error', men_err)
    writeHead(broadcast, 400, res, men_err, error);
    return
  }

  switch (tip_lla) {
    case 'CHECK':
      res.emit('loginOk')
      break

    case 'USE':

      if (db[nom_tab]) {

        db[nom_tab].findAll(condicion, orden)
          .then(async data => {
            console.log('USE tabla=', nom_tab, 'condicion=', condicion, 'Datos=', data)
            await res_send(res, data, broadcast);
          })
          .catch(err => {
            console.log('Error AXIOS', err);
            writeHead(broadcast, 400, res, err.message)//, { 'Content-Type': 'text/plain' });
            return
          });

      } else {
        console.error('No existe sequelize model', nom_tab)
        writeHead(broadcast, 400, res, "Don't exists sequelize model " + nom_tab)//, { 'Content-Type': 'text/plain' });
        return
      }
      break;


    case 'USENODATA':
      //console.log('USENODATA dialect===>', dialect)
      if (dialect == 'postgres')
        ins_sql = `select * from p_schema('${nom_vis}')`
      else
        ins_sql = `exec p_schema '${nom_vis}'`

      // buscar en la tabla de indices cual es la tabla a utilizar

      db.sequelize.query(ins_sql) // lee el diccionaro de datos
        .then(async data => {
          //console.log('============== Definicion Schema=====', data[0][0]);
          // console.log('=====USENODATA data=======',data)
          //console.log('USENODATA data.length===>', data[0])
          if (!data[0][0] || data[0][0].length == 0) {  //  No hay tabla
            writeHead(broadcast, 400, res, 'sqlView Invalid : ' + nom_vis) //, { 'Content-Type': 'text/plain' });

            return
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
            exp_indice: '',                    // expresiï¿½n  del indice
            ord_vis: data[0][0].ord_vis.trim().toLowerCase(),         // orden de la vista
            est_tabla: {},                     // estructura de la tabla
            new: [{}],                         // registro new
            old: [{}]                          //  regsitro old
          };


          // var est_campo = {};
          var sw_timestamp = false
          //  Generamos la estructura de la tabla en base de los datos traidos
          for (let i in data[0]) {
            // console.log('Nombre del campo=', nom_campo,',tipo=', tip_campo,'val_defa=', val_defa)
            nom_campo = data[0][i].cam_dat.trim().toLowerCase(); // pasamos a minusculas
            tip_campo = data[0][i].tip_dat.toLowerCase().substring(0, 3);
            val_defa = data[0][i].vue_dat ? data[0][i].vue_dat.trim() : ''
            des_campo = !data[0][i].ref_dat || data[0][i].ref_dat == null ? ' ' : data[0][i].ref_dat.trim() // Descripcion del campo

            // val_defa = data[0][i].vvu_dat.trim();  // valor vue
            //  console.log('Nombre del campo=', nom_campo, ',tipo=', tip_campo, 'val_defa=', val_defa)

            if (nom_campo == 'timestamp') {
              sw_timestamp = true
              tip_campo = 'tsp'
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
                tip_campo = 'TEXT' //antes 'TBD'
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

              des_cam: des_campo,  // Descripcion del campo
              tip_cam: tip_campo,   // tipo de dato
              val_cam: val_campo, //data[0][i].val_dat.trim()    // Valor al insertar campo en blanco
              val_def: val_defa,
              lon_dat: data[0][i].lon_dat
            }

            // 15/Octubre/2025 Se quita  if (nom_campo != 'usu_usu')
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
            exp_ind = data[0][0].fil_vis.trim() //.toLowerCase();

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

            // busca el campo en la definicion para ver su tipo de valor 
            //for (var i = 0; i < data[0].length; i++) {
            for (let i in data[0]) {
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

            if (view.tip_obj.trim() == 'MODEL') {
              //  con_ind = con_ind + nom_cam + ' : '+comillas+'${m.' + nom_cam + '}'+comillas+','
              con_ind = con_ind + nom_cam + ' : m.' + nom_cam + ',';
            }
            if (view.tip_obj.trim() == 'VIEW') {
              if (con_ind.length > 0)
                con_ind = con_ind + ' and '
              //              con_ind = con_ind + exp_ind + '=' + comillas + '${m.' + exp_ind + '}' + comillas
              con_ind = con_ind + nom_cam + '=' + comillas + '${m.' + nom_cam + '}' + comillas
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
            if (view.tip_obj.trim() == 'MODEL')
              con_ind = '{' + con_ind + '}'
            //  con_ind = ' { ' + con_ind + exp_ind + ': m.' + exp_ind + '}'
            if (view.tip_obj.trim() == 'VIEW')
              con_ind = "`" + con_ind + "`"
          }

          view.exp_indice = con_ind // Indice a utilizar

          console.log(' Use nodata Vista ======>', view.nom_tab, 'est_tabla=null', 'Index=', view.exp_indice)
          //console.log('===================================================================== ')
          // console.log('USENODATA con_ind ===>',con_ind)


          await res_send(res, view, broadcast); // enviamos la vista
          return
          /* ver 1
          }) // fin then.data

            .catch(err => {
              res.writeHead(400, err.message, { 'Content-Type': 'text/plain' });
              await res_send(res,);

            });
            */

        }) // fin then.data
        .catch(err => {
          console.log('USENODATA SQLError' + ins_sql, err)
          writeHead(broadcast, 400, res, "USENODATA SQL SERVER ERROR " + ins_sql)

          return
        });
      // await res_send(res,db[nom_vis]);

      break;
    /*     console.log('============== Estructura ====================', nom_vis);
         que_int.describeTable(nom_vis).then(data => {
   
           console.log(data);
           await res_send(res,data);
         })
           .catch(err => {
             res.writeHead(400,"Ocurrio un error al leer de la Base de DAtos",{'Content-Type': 'text/plain'});
             await res_send(res,);
           });
   
         break;
    */
    case 'INSERT':

      if (!datos) {
        writeHead(broadcast, 400, res, 'No hay datos as insertar')

        //        res.writeHead(400, 'No hay datos as insertar', { 'Content-Type': 'text/plain' });
        //        await res_send(res,);

        return;
      }
      let campos = ''
      let valores = ''
      const datosEnviar = {}
      datos.key_pri = 0
      let coma = ''

      let replacement = ''
      for (const campo in datos) {
        //  convirtiendo buffer a enviar
        if (campo != 'key_pri' &&
          campo != 'tie_cre' &&
          campo != 'tie_uac' &&
          campo != 'usu_usu' &&
          campo != 'usu_cre' &&
          campo != 'timestamp'
        ) {
          if (datos[campo].type && datos[campo].type == 'Buffer') {
            console.log('UPDATE campo buffer ===>>>', campo)
            const buffer = datos[campo]
            datos[campo] = Buffer.from(buffer)
          }

          datosEnviar[campo] = datos[campo]

          campos = campos + coma + campo
          replacement = replacement + coma + '$' + campo
          coma = ','
          /*    Genera valores de campos
          let comillas = ''
          if (typeof datos[campo] == 'string')
            comillas = "'"
  
                    const valor = `${comillas}${datos[campo]}${comillas}`
                    valores = valores + coma + `${valor}`
         */
        }
      }
      //      let insSql = 'INSERT INTO  ' + db[nom_tab].tableName + ' (' + campos + ') VALUES (?)'
      let insSql = 'INSERT INTO  ' + db[nom_tab].tableName + ' (' + campos + ') VALUES (' + replacement + ')'



      //      let insSql = 'INSERT INTO  ' + db[nom_tab].tableName + ' (' + campos + ') VALUES (' + valores + ')'

      datosEnviar.id = 0
      datosEnviar.key_pri = 0
      datosEnviar.timestamp = null

      //console.log('INSERT  =====>>>', nom_tab,insSql)

      // db.sequelize.transaction({ autocommit: false })
      //  .then(transaction => {


      try {
        //await db.sequelize.query(insSql,values)

        await db.sequelize.query(insSql, {
          bind: datosEnviar,
          type: QueryTypes.INSERT,
          returning: false,
        }
        )



        //await db.sequelize.query(insSql)

        /*
        result=await db[nom_tab].create(datosEnviar, {
          silent:true,
          returning: false,
          // plain: false,
          // transaction: transaction,
          validate: false,
          returning:false
        })
        
        */
        // obtiene el key_pri y timestamp
        const data = await db[nom_tab].findAll(

          {
            attributes: ['timestamp', 'key_pri'],
            where: condicion.where,
            raw: true,
          })

        // db[nom_tab].findAll(condicion)
        console.log('condicion where', condicion.where, '======== datos insertados leidos =======', data[0]);
        // envia el timestamp
        await res_send(res, data[0], broadcast);

      } catch (error) {

        console.error('Insert  Error', error)
        let men_err = 'Insert error ' + error
        console.error('Insert  Error', men_err)// transaction.rollback();
        writeHead(broadcast, 400, res, men_err, error);
        return;



      }
      /*
      break;
      db[nom_tab].create(datosEnviar, {
        returning: false,
        plain: false,
        // transaction: transaction,
        validate: false
      })
        .then((result) => {
          // Obtiene el timestamp y key_pri actual
          // transaction.commit();

          console.log('================ datos insertados  condicion >>>>>', result, condicion.where)
          db[nom_tab].findAll(

            {
              attributes: ['timestamp', 'key_pri'],
              where: condicion.where,
              raw: true,
            })

            // db[nom_tab].findAll(condicion)
            .then(data => {
              console.log('======== datos insertados leidos =======', data[0]);
              // envia el timestamp
              await res_send(res,data[0]);
            })
 
        })
        .catch(error => {
          console.error('Insert  Error', error)
          let men_err = 'Insert error ' + error
          console.error('Insert  Error', men_err)// transaction.rollback();
          writeHead(broadcast,res, men_err, error);


        });
      */
      break;

    case 'UPDATE':

      if (!datos) {
        writeHead(broadcast, 400, res, "No DATA to update")
        return;
      }

      if (datos.key_pri == 0) {
        writeHead(broadcast, 400, res, "Can't not update key_pri=0")
        return
      }


      const key_pri = datos.key_pri;

      delete datos['key_pri']   // borramos el key pri de los datos a actualizar
      delete datos['val_vista'];


      console.log('UPDATE datos==========>', datos)

      for (const campo in datos) {  // Checamos todos los campos buffer
        //campo!='timestamp' &&//Buffer.isBuffer(datos[campo])
        console.log('1) UPDATE campo =', campo, 'Type=', datos[campo].type)


        if (!socket && datos[campo].type && datos[campo].type == 'Buffer') {
          console.log('UPDATE campo buffer axios ===>>>', campo)
          const buffer = datos[campo]
          datos[campo] = Buffer.from(buffer)
        } else
          if (typeof datos[campo] == 'object') {

            const arrBuffer = new ArrayBuffer(datos[campo]);
            datos[campo] = Buffer.from(arrBuffer);

            console.log('=======0UPDATE campo buffer socket ===>>>', datos[campo])

            //    const buffer =new DataView(datos[campo])  // view.getUint8())    //new Uint8Array( datos[campo])
            //    datos[campo] =buffer.getUint8()       //new Uint8Array(datos[buffer]);

          }

        console.log('2) UPDATE campo=', campo, 'Type=', typeof datos[campo])
      }

      // No es Postgres . Cambiamos el TimeStamp to Buffer para comparar actualizacion

      /*
      if (typeof datos.timestamp != 'number') {
        const buffer = datos.timestamp
        datos.timestamp = Buffer.from(buffer);

        // base64 
        //Buffer.from(binaryPhoto).toString('base64')
      }
      */

      ///////////////   TRANSACTION ////////////
      /*
       db.sequelize.transaction({ autocommit: false })
        .then(transaction => {
          console.log('========== Begin trans datos a actualizar =======', nom_tab, key_pri, datos);

       */

      console.log('3) ===============(   UPDATE     )    datos=', datos, 'key_pri=', key_pri)
      db[nom_tab].update(datos, {
        where: { key_pri: key_pri }
      })
        // se quito porque daba error en MSSQL
        // returning: false,
        // plain: false,
        // transaction: transaction 


        // db[nom_vis].upsert(dat_act, condicion)
        .then((result) => {
          console.log('UPDATE respuesta  =====>>>', result, result[0])
          // transaction.commit()
          // Obtiene el timestamp actual
          db[nom_tab].findAll(
            {
              attributes: ['timestamp', 'key_pri'],
              where: { key_pri: key_pri },
              raw: true,
            })
            .then(async datos => {  // envia el timestamp     aqui voy checar demas findAll
              /*
              if (typeof datos[0].timestamp != 'number') {  // No es Postgres
                // MSSQL buffer
                console.log('UPDATE timestamp=>>',datos[0].timestamp)
                const buffer = datos[0].timestamp
                datos[0].timestamp = Buffer.from(buffer);
        
                // base64 
                //Buffer.from(binaryPhoto).toString('base64')
              }
              */
              console.log('UPDATE Datos actualizados =======>>>>', datos[0])


              await res_send(res, datos[0], broadcast)

            })
            .catch(err => {     // Error al leer el TimeStamp
              writeHead(broadcast, 400, res, 'Update error', err)
              console.error('Update Error', err)
              return
              // transaction.rollback();

            });
          ///////////////////
          //await res_send(res,data);
        })
        .catch(error => {
          console.error('Update SQL error=>> ', error)

          writeHead(broadcast, 400, res, 'Update Error', error)
          return

          //transaction.rollback();

        })
      //} )  fin transaction
      /*/////////////// Transaction Error ///////////
      
      .catch(err => {
        writeHead(broadcast,res, err.message)

        console.error('Update Transaction Error ', err)
        transaction.rollback();

      });
      */




      break;


    case 'DELETE':

      if (!condicion) {
        writeHead(broadcast, 400, res, 'Invalid condition WHERE')

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

      /*
         db[nom_tab].destroy(condicion)
        .then(async data => {
          console.log('DELETE condicion =====', condicion, data)
          data = { result: true }
          await res_send(res, data, broadcast);
        })
        .catch(err => { 
          console.log('DELETE error===>', err)
          writeHead(broadcast, 400, res, err.message);
          return;
        });

     */
      // se cambia promesa por async await
      try {
        const data = await db[nom_tab].destroy(condicion)
        await res_send(res, 'OK', broadcast);
        console.log('============>>>>>>DELETE OK data=', data)


        //res_send(res, data, broadcast);
      } catch (error) {
        for (const mensaje in error) {
          //console.warn('============>>>>>>Errores',mensaje,error[mensaje])
          for (const men in error[mensaje])
            console.warn('============>>>>>>Errores', mensaje, men, error[mensaje][men])
        }
        console.error('Delete  Error', error)
        let men_err = 'Delete error ' + error
        writeHead(broadcast, 400, res, men_err, error);
        return;
      }


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

        .then(async function (result) {

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

              if (nom_campo == 'timestamp') {
                sw_timestamp = true
                tip_campo = 'tsp'
              }

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
                case 'tsp':  // Timestamp MSSQL
                  tip_campo = 'TEXT' //antes 'TBD'
                  val_campo = null
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
          await res_send(res, est_tabla, broadcast);


          //await res_send(res,result[0]);  
          //          console.log('Resultado GET',result[0].DATA_TYPE, result[0].CHARACTER_MAXIMUM_LENGTH)
          //return callback(result[0].DATA_TYPE, result[0].CHARACTER_MAXIMUM_LENGTH);
          //callback(false, false)
        })
        .catch(err => {
          console.log('No se pudo ejecutar ==', err)
          writeHead(broadcast, 400, res, " ERROR " + ins_sql);
          return
        });

      break;
    /////////////////////////     


    case 'SQLEXEC':
      //console.log('SQLEXEC ins_sql====>>>>',ins_sql)
      opciones.mapToModel = true
      // opciones.dialectOptions={requestTimeout: 300000 }
      //opciones.requestTimeout= 60000*2

      console.log('SQLEXEC opciones====>>>>', ins_sql, opciones)

      await db.sequelize.query(ins_sql, opciones)
        .then(async data => {
          console.log('=====Regresando datos SQLEXEC ======')
          res_send(res, data[0], broadcast);
          return;
        })
        .catch(err => {
          console.log('SQLEXEC ERROR ==' + ins_sql, err)
          writeHead(broadcast, 400, res, "SQLEXEC ERROR " + ins_sql)
          return

        });

      break;

    case 'GENTABLA':

      opciones.mapToModel = true

      // se pasa el nombre de la tabla y si es posgres o MSSQL
      if (dialect == 'postgres')
        ins_sql = `select P_gen_todo('${dialect}','${nom_tab}') as query`
      else
        ins_sql = `exec P_gen_todo '${dialect}','${nom_tab}' `

      console.log('<========= P_gen_todo ===>', ins_sql)
      var query = ''
      var error = ''
      var swError = false
      db.sequelize.query(ins_sql) // genera query
        .then(async data => {
          //let ren = 0

          let swEnd = false


          for (let ren = 0; ren < data[0].length; ren++) { // genera tantas vistas como sea posible
            query = data[0][ren].query;

            console.log('GENERA TABLA <========= Ejecutara query===>', query, '<=====')
            // do {
            swEnd = true
            swError = true
            await db.sequelize.query(query)
              .then(async data => {
                console.log('GENERA TABLA<========= Query ejecutado correctamente=======>', data)
                swEnd = false
                swError = false

              })
            /*
            .catch(que_err => {
              swEnd = true
              swError=true
              error = query + ', ' + que_err
              console.log('Error al ejecutar el query =====> ', error)
              writeHead(broadcast,res, "Error al ejecutar el query :" +query,'')
             
              return
            })
            */
            if (swEnd) break
            // } while (!swEnd)
          } // Fin For 

          if (!swEnd) { // Si no hay error
            console.log('Genero Todo con exito. Generarï¿½ modelo===>', nom_tab)
            await genModel(dialect, nom_tab, db, dir_emp)
              .then(async data => {

                console.log('1)============= Genero  Modelo data=', data)
                res_send(res, ['Ok'], broadcast);

              })

            //  res_send(res, ['Ok'], broadcast);

          }
          //         else { // Hay error
          //           writeHead(broadcast,res, "query :" + error,'');
          //           return
          //         }
        }).
        catch(err => {
          console.log('Genera todo query :' + ins_sql)
          //        if (!swError) {

          console.log('Error al ejecutar el query =====> ', query)
          //            writeHead(broadcast,res, "Error al ejecutar el query :" + query, err)
          //          writeHead(broadcast, 400, res, "", err)
          writeHead(broadcast, 400, res, "query :" + query + ' SQL SERVER ERROR :' + err, { 'Content-Type': 'text/plain' });

          //      }

          // writeHead(broadcast,res, "query :" + ins_sql + err);
          return
        })

      break

    case 'GENINDICES':

      opciones.mapToModel = true
      // se pasa el nombre de la tabla y si es posgres o MSSQL
      if (dialect == 'postgres')
        ins_sql = `select * P_gen_indices('${dialect}','${nom_tab}','${nom_vis}') `
      else
        ins_sql = `execute P_gen_indices '${dialect}','${nom_tab}','${nom_vis}' `

      await db.sequelize.query(ins_sql, opciones)
        .then(data => {
          console.log('<========= P_gen_indices===>', data)
          const query = data[0][0].query
          const modelo = data[0][0].modelo
          db.sequelize.query(query)
            .then(async data => {
              console.log('<=========query GENERA INDICES=======>', data)
              //   this.genModel(nom_tab, db, dir_emp)
              await res_send(res, 'Se genero el indice ' + nom_vis + ' de la tabla ' + nom_tab, broadcast);
              return

            })
            .catch(err => {
              console.log('No se pudo ejecutar ==', err)
              writeHead(broadcast, 400, res, "query :" + ins_sql + ' SQL SERVER ERROR :' + err, { 'Content-Type': 'text/plain' });
              return
            });
        })
        .catch(err => {
          console.log('No se pudo ejecutar ==', err)
          writeHead(broadcast, 400, res, "query :" + ins_sql + ' SQL SERVER ERROR :' + err);
          return
        });

      break;

    case 'GENVISTASSQL':
      opciones.mapToModel = true
      // se pasa el dialecto (posgres o MSSQL) y nombre de la tabla y si es 
      if (dialect == 'postgres')
        ins_sql = `select P_gen_vista('${dialect}','${nom_tab}','${nom_vis}') as query`
      else
        ins_sql = `exec  P_gen_vista '${dialect}','${nom_tab}','${nom_vis}' `

      await db.sequelize.query(ins_sql, opciones)
        .then(async data => {
          console.log('<========= P_gen_vistas_sql resultado ===>', data[0].length, data[0])
          let sw_err = false
          for (let ren = 0; ren < data[0].length && !sw_err; ren++) { // genera tantas vistas como sea posible

            const query = data[0][ren].query;

            console.log('<========= P_gen_vistas_sql query===>', query)

            await db.sequelize.query(query, opciones)
              .then(async data => {
                console.log('<=========Vistas SQL Generada=======>', query)

              })
              .catch(err => {
                console.log('No se pudo ejecutar 1==', err)
                writeHead(broadcast, 400, res, "query :" + ins_sql + ' SQL SERVER ERROR :' + err);
                console.log('Fin errror 1==')
                sw_err = true

                return
              });
          }
          if (sw_err) return
          res_send(res, 'Se genero la vistas ' + nom_vis, broadcast);
          return

        })
        .catch(err => {
          console.log('No se pudo ejecutar 2 ==', err)
          writeHead(broadcast, 400, res, "SQL SERVER ERROR " + ins_sql);
          console.log('Fin errror 2==')
          return;
        });

      break;

    case 'GENMODEL':
      console.log('GENMODEL', nom_tab)
      opciones.mapToModel = true

      genModel(dialect, nom_tab, db, dir_emp)
        .then(async data => {
          console.log('<========= GENMODEL Escribio Sequelize MODEL Node Server Table=', nom_tab, data)
          res_send(res, ['Ok'], broadcast);


          /* if (data == 'Ok') {
            res_send(res, 'Se genero tabla ' + nom_tab, broadcast);
            return;
          }
          else {
            writeHead(broadcast, 400, res, "SQL SERVER ERROR " + res, { 'Content-Type': 'text/plain' });
            return
          }
          */
        }) //  Fin promesa
        .catch(err => {
          console.log('No se pudo generar MODEL ', err)
          writeHead(broadcast, 400, res, "NODE ERROR :" + err,)
          return
        });

      break;
    //*****************
    case 'GENMODELS':
      opciones.mapToModel = true
      ins_sql = "select nom_tab from vi_schema where tip_obj='MODEL' group by nom_tab"

      console.log('<========= GENMODELS ===>', ins_sql)
      await db.sequelize.query(ins_sql, opciones)
        .then(async data => {
          console.log('<========= GENMODELS data ===>', data[0])
          for (let ren = 0; ren < data[0].length; ren++) { // genera tantas vistas como sea posible
            const nom_tab = data[0][ren].nom_tab;
            console.log('<========= Generara sequelize Model ===>', nom_tab)
            genModel(dialect, nom_tab, db, dir_emp)
          } // Fin For 
        }).catch(err => {
          console.log('No se pudo ejecutar ==', err)
          writeHead(broadcast, 400, res, "SQL SERVER ERROR " + ins_sql)
          return
        });
      break

    case 'JASPERREPORT':
      console.log('JASPERREPORT', ins_sql)
      const axios = require('axios')
      console.log('JASPERREPORT ', jasperServer)
      opciones.mapToModel = true
      const data = {
        //json: {},
        format: 'pdf',
        jrxml: jrxml,
        fileJson: empresa + '_' + fec_act + '_' + jrxml + '_' + Math.random().toString(36).slice(2, 14)
      }

      //  if (dataView.length > 0)
      //    ins_sql = 'select * from ' + dataView + ';' + ins_sql

      console.log('<=========JASPER ins_sql ===>', ins_sql)

      db.sequelize.query(ins_sql, opciones)
        .then(async result => {

          if (!result || !result[0] || !result[0][0] ||
            result[0].length == 0 || result[0][0].length == 0) {  // no hay datos
            writeHead(broadcast, 400, res, "No hay datos para generar el reporte");
            return
          }

          // console.log('JASPER result[0]=', result[0])
          for (const campo in dataView) {
            result[0][0][campo] = dataView[campo]
          }
          //console.log('JASPER result[0]=', result)
          const jsonFile = JSON.stringify(result[0])  // aumentamos el resultado
          result = []  // Borramos el result
          const fileJson = 'tmp/' + data.fileJson
          fs.writeFileSync(fileJson, jsonFile)  // escribe el archivo json

          //result=[] 

          //******************
          //console.log('JASPERREPORT llama Axios ', data)
          // json = JSON.stringify(data)


          console.log('===================>LLAMA a JASPER ')
          result = []

          //  const { exec } = require('child_process');
          let output = 'pdf/' + empresa + '_' + fec_act + '_' + jrxml + '_' + Math.random().toString(36).slice(2, 14)
          const ins_eje = `jasperstarter/bin/jasperstarter pr jrxml/${jrxml} -f ${data.format} -o ${output} -t json --data-file ${fileJson} `
          console.log('JASPER ins_eje=', ins_eje)

          output = output.trim() + '.' + data.format
          exec(ins_eje, (error, stdout, stderr) => {
            if (error) {
              console.error(`Jasper Error =====: ${error}`);
              // fs.rmSync(fileJson, { force: true, })
              writeHead(broadcast, 400, res, "Error :", error)
              return
            }
            fs.rmSync(fileJson, { force: true, }) // borramos el archivo json 

            const data = fs.readFileSync(output);
            fs.rmSync(output, { force: true, }) //  borramos el archivo pdf
            res_send(res, data, broadcast)

            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);

            return

          });

          /*
          axios.get(jasperServer + '?json=' + json, { responseType: 'arraybuffer' })
            .then(async result => {
              console.log('=======GENERO reporte con JASPER ========')
              res_send(res, result.data, broadcast)
              return
            })
            .catch(err => {
              console.log('Jasper Error =====', err)
              writeHead(broadcast, 400, res, "Error :", err)
              return
            })

            */
        })
        .catch(err => {
          console.log('No se pudo ejecutar SQL ==', err)
          writeHead(broadcast, 400, res, "Error SQL:", err)

          return
        });
      break;

    /////////////// Genera CFDI //////////////////  
    case 'GENCFDI':
      if (dialect == 'postgres')
        ins_sql = `
                DO $$
                BEGIN
                  DECLARE M_TIP_CFD  CHAR(2);
                  select M_tip_cfd=tip_cfd from man_cometdo where tdo_tdo='${tdo_tdo}'; 
                  if M_tip_cfd='P' then
                       update man_comedoc set fel_doc=NOW()  where tdo_tdo='${tdo_tdo}' and ndo_doc='${ndo_doc}' and sta_doc='P';
                  end if;
                END;
                select * from P_gen_cfdi('${tdo_tdo}',${ndo_doc})
         
                $$`
      else

        ins_sql = ` 
                DECLARE @M_TIP_CFD AS CHAR(2);
                select @M_tip_cfd=tip_cfd from man_cometdo where tdo_tdo='${tdo_tdo}'; 
                if @M_tip_cfd='P'
                   update man_comedoc set fel_doc=GETDATE() from man_comedoc where tdo_tdo='${tdo_tdo}' and ndo_doc='${ndo_doc}' and sta_doc='P';
                execute P_gen_cfdi '${tdo_tdo}',${ndo_doc} ;`

      //   const datos = sqlExec(ins_sql,db, opciones)
      //   console.log('GENCFDI datos ===>', datos)
      // cadena original generar el sello digital
      console.log('=========== GENCFDI ===>', tdo_tdo, ndo_doc)
      await db.sequelize.query(ins_sql, opciones)
        .then(async data => {
          const cfdi_xml = data[0][0].cfdi_xml
          //  const cad_ori = data[0][0].cad_ori
          let emp_tim = data[0][0].emp_tim
          const usu_tim = data[0][0].usu_tim
          const pas_tim = data[0][0].pas_tim
          const web_tim = data[0][0].web_tim
          let cfd_cer = data[0][0].cfd_cer
          const cad_ori = data[0][0].cad_ori
          //const cer_cer = data[0][0].cer_cer
          const add_xml = data[0][0].add_xml
          console.log('=======>>>>>>> GENCFDI cfd_cer :')
          let posmes = 6
          let cer_priv = ''

          ins_sql = `select rfc_pge from man_comepge `

          let rfc = ''
          await db.sequelize.query(ins_sql, opciones)
            .then(async data => {
              rfc = data[0][0].rfc_pge.trim()

            })
            .catch(err => {
              console.log('No se pudo ejecutar ==', err)
              writeHead(broadcast, 400, res, "Error SQL:", err)
              return
            });

          if (rfc.length == 12)
            posmes = 5
          const mes = +rfc.substring(posmes, posmes + 2)

          if (rfc.length > 11) {

            cer_priv = cfd_cer.slice(0, mes + 99) + cfd_cer.slice(mes + 100)
            cfd_cer = cer_priv
            cer_priv = cfd_cer.slice(0, mes + 199) + cfd_cer.slice(mes + 200)
            cfd_cer = cer_priv
            cer_priv = cfd_cer.slice(0, mes + 299) + cfd_cer.slice(mes + 300)
            cfd_cer = cer_priv
            cer_priv = cfd_cer.slice(0, mes + 399) + cfd_cer.slice(mes + 400)
            cfd_cer = cer_priv
            cer_priv = cfd_cer.slice(0, mes + 499) + cfd_cer.slice(mes + 500)
          }

          const tempInput = join(os.tmpdir(), `input_${Date.now()}${genRandStr(4)}.der`);
          const tempOutput = join(os.tmpdir(), `output_${Date.now()}${genRandStr(4)}.pem`);
          const tempCadOri = join(os.tmpdir(), `cfdi_${Date.now()}${genRandStr(4)}.cad`);

          //const tempInput = join('tmp', `input_${Date.now()}${genRandStr(4)}.der`);
          //const tempOutput = join('tmp', `output_${Date.now()}${genRandStr(4)}.pem`);
          //const tempCadOri = join('tmp', `cfdi_${Date.now()}${genRandStr(4)}.cad`);
          //console.log('Archivos temporales :', tempInput, tempOutput, tempCfdi);

          cer_priv = atob(cer_priv); // Decodificamos de base64
          fs.writeFileSync(tempInput, cer_priv);
          fs.writeFileSync(tempCadOri, cad_ori); //cfdi_xml

          // escribimos el resultado
          let command = `openssl dgst -sha256 -sign ${tempInput} -out ${tempOutput} ${tempCadOri}`
          //        const command = `openssl pkcs8 -passin ${pwd_cer} -inform DER -in ${tempInput} -out ${tempOutput}`;

          try {
            // Ejecutar el comando
            const { stdout, stderr } = await execAsync(command);
            // Leer resultado
            const resLec = fs.readFileSync(tempOutput);
            const sello = resLec.toString('base64');

            if (sello.length == 0) {
              console.log('No se pudo certificar el CFDI ==', err)
              writeHead(broadcast, 400, res, "Certificado invalido ", err)
              return
            }
            //cfdi_xml = cfdi_xml.replace('<<selloDigital>>', sello)  // agregamos el sello digital

            emp_tim = emp_tim.replaceAll('.fxp', '')
            emp_tim = emp_tim.toLowerCase()

            if (dialect == 'postgres') {

              ins_sql = `
                DO $$

                DECLARE M_STA_DOC  CHAR(1);
                DECLARE M_tdo_cdo  CHAR(3);
                select  M_tip_cfd=tip_cfd from man_cometdo where tdo_tdo='${tdo_tdo}'; 
                M_STA_DOC=' '

                BEGIN
                  SELECT M_sta_doc=STA_DOC from man_comedoc where tdo_tdo='${tdo_tdo}' AND ndo_doc=${ndo_doc}
                  if M_STA_DOC>' ' AND 
                    M_STA_DOC<>'X' AND 
                    M_STA_DOC<>'T' AND
                    M_STA_DOC<>'C' AND 
                    M_STA_DOC<>'N' THEN
                    update man_comedoc set sta_doc='X' where tdo_tdo='${tdo_tdo}' AND ndo_doc=${ndo_doc};
                    select 1 as ok;
                  else
                    select 0 as ok;
                  END IF
                COMMIT
                $$
                `
            } else {   // MSSQL y SYBASE

              ins_sql = `
                DECLARE @STA_DOC AS CHAR(1)
                DECLARE @tip_cfd AS CHAR(2)
                select @tip_cfd=tip_cfd from man_cometdo where tdo_tdo='${tdo_tdo}'; 
                SET @STA_DOC=' '

                BEGIN TRANSACTION
                  SET @STA_DOC=(SELECT sta_doc from man_comedoc where tdo_tdo='${tdo_tdo}' AND ndo_doc=${ndo_doc})
                  if @STA_DOC>' ' AND @STA_DOC<>'X' AND @STA_DOC<>'T' AND @STA_DOC<>'C' AND @STA_DOC<>'N' 
                    begin
                      update man_comedoc set sta_doc='X' where tdo_tdo='${tdo_tdo}' AND ndo_doc=${ndo_doc};
                     select 1  as ok;
                    end
                  else
                    select 0 as ok ;
                COMMIT TRANSACTION
                `
            }

            //* Grabanos el xml en la base de datos

            await db.sequelize.query(ins_sql, opciones).
              then(async data => {
                if (data[0][0].ok == 0) {
                  writeHead(broadcast, 400, res, 'Error al timbrar', "El documento no se puede timbrar, su estatus es diferente de 'Proceso' ")
                  return
                }

              })
              .catch(err => {
                console.log('No se pudo ejecutar ==', err)
                writeHead(broadcast, 400, res, "Error SQL:", err)
                return
              });

            const cfdi_tim = await timbraCFDI('timbrado', cfdi_xml.replace('<<selloDigital>>', sello), emp_tim, usu_tim, pas_tim, web_tim, tdo_tdo, ndo_doc, db, opciones, res, broadcast)
            if (!cfdi_tim || !cfdi_tim.length) {
              console.log('No se pudo timbrar el CFDI ==', err)
              writeHead(broadcast, 400, res.res_timbre, "Erorr al timbrar ", err)
              return
            }

            ///////// Graba el CFDI timbrado en la base de datos /////////////////
            await grabaCfdi(tdo_tdo, ndo_doc, cfdi_tim, emp_tim, add_xml, 'T', dialect, db, opciones, res, broadcast)
            /*
                        const parser = require('xml2json');
                        let xmlDoc = await parser.toJson(cfdi_tim, { object: true });
                        const tim_digital = xmlDoc["cfdi:Comprobante"]['cfdi:Complemento']['tfd:TimbreFiscalDigital']
            
                        const UUID = tim_digital["UUID"]
            
                        if (add_xml.length > 1) { // Si hay hay addenda
                          cfdi_tim = cfdi_tim.replaceAll('</cfdi:Comprobante>', add_xml + '</cfdi:Comprobante>')
                        }
                        const sta_doc = 'T'  // Timbrado
                        const arc_xml = ''
                        if (dialect == 'postgres') {
                          ins_sql = `
                            DO $$
                           
                            DECLARE M_key_pri  int ;
                            DECLARE M_TDO_TDO  CHAR(3);
                            DECLARE M_NDO_DOC  INT;
                            DECLARE M_STA_DOC  CHAR(1);
                            DECLARE M_fel_doc  TIMESTAMP(3);
            
                             BEGIN
                                M_TDO_TDO='${tdo_tdo}';
                                M_NDO_DOC=${ndo_doc};
                                M_STA_DOC='${sta_doc}';
                            
                                select M_STA_DOC=sta_DOC from man_comedoc where tdo_tdo=M_TDO_TDO AND ndo_doc=M_NDO_DOC;
                                M_key_pri=0;
                                SELECT M_key_pri=ISNULL(key_pri,0) from man_comexml  where tdo_tdo=M_tdo_tdo AND ndo_doc=M_ndo_doc;
                         
                                IF M_key_pri is null OR M_key_pri=0 THEN  -- NO EXISTE REGISTRO DE TIMBRADI
                                    INSERT INTO man_COMEXML (tdo_tdo,ndo_doc,STA_DOC) VALUES (M_tdo_tdo,M_ndo_doc,M_STA_DOC);
                                    SELECT M_key_pri=ISNULL(key_pri,0) from man_comexml  where tdo_tdo=M_tdo_tdo AND ndo_doc=M_ndo_doc;
                                END IF
                                
                                IF M_STA_DOC<>'C' and M_STA_DOC<>'N' and M_key_pri>0 THEN
                                   UPDATE man_COMEXML SET CFD_XML='${cfdi_tim}',STA_DOC=M_STA_DOC,emt_xml='${emp_tim}',uuid='${UUID}'
                                      WHERE key_pri=M_key_pri;
                                 END IF
            
                                IF M_STA_DOC='C' or M_STA_DOC='N' and M_key_pri>0 THEN
                                    UPDATE man_COMEXML SET ARC_XML=[${arc_xml}], STA_DOC=M_STA_DOC WHERE key_pri=M_key_pri;
                                END IF
            
                                UPDATE man_comedoc SET  sta_doc='${sta_doc}' WHERE tdo_tdo=M_tdo_tdo AND ndo_doc=M_ndo_doc
                            COMMIT;
                            $$;
              `
                        }
                        else {   // MSSQL y SYBASE
            
                          ins_sql = `
                            SET TEXTSIZE 524288
                            DECLARE @key_pri as int
                            DECLARE @TDO_TDO AS CHAR(3)
                            DECLARE @NDO_DOC AS INT
                            DECLARE @STA_DOC AS CHAR(1)
            
                            SET @TDO_TDO='${tdo_tdo}'
                            SET @NDO_DOC=${ndo_doc}
                            SET @STA_DOC='${sta_doc}';
             
                            BEGIN tran
                            select @sta_doc=sta_doc from man_comedoc where tdo_tdo=@TDO_TDO AND ndo_doc=@NDO_DOC
                            SET @key_pri=0
            
                            SELECT @key_pri=ISNULL(key_pri,0) from man_comexml  where tdo_tdo=@tdo_tdo AND ndo_doc=@ndo_doc
                              IF @key_pri is null OR @key_pri=0
                                  BEGIN
                                    INSERT INTO man_COMEXML (tdo_tdo,ndo_doc,STA_DOC) VALUES (@tdo_tdo,@ndo_doc,@STA_DOC)
                                    SELECT @key_pri=ISNULL(key_pri,0) from man_comexml  where tdo_tdo=@tdo_tdo AND ndo_doc=@ndo_doc;
                                  END
                                
                                IF @STA_DOC<>'C' and @STA_DOC<>'N' and @key_pri>0
                                  BEGIN
                                    UPDATE man_COMEXML SET CFD_XML='${cfdi_tim}', STA_DOC=@sta_doc,emt_xml='${emp_tim}',uuid='${UUID}' 
                                      WHERE key_pri=@key_pri
                                  END
            
                                IF @STA_DOC='C' or @STA_DOC='N' and @key_pri>0
                                   UPDATE man_COMEXML SET ARC_XML='${arc_xml}', STA_DOC=@sta_doc WHERE key_pri=@key_pri
            
                                UPDATE man_comedoc SET  sta_doc=@sta_doc WHERE tdo_tdo=@tdo_tdo AND ndo_doc=@ndo_doc
            
                             commit tran `
                        }
            
                        ins_sql = ins_sql.replaceAll('  ', ' ')
                        //  console.log('Graba CFDI SQL ====>', ins_sql)
            
                        //* Grabanos el xml en la base de datos
                        await db.sequelize.query(ins_sql, opciones)
                          .then(async data => {
                            console.log('Grabo el CFDI timbrado en la base de datos ====>')
                            res_send(res, ['Ok'], broadcast);
                          })
                          .catch(err => {
                            writeHead(broadcast, 400, res, "Error SQL:", err)
                          }
                          )
                        ////////////////////////////////// 
            */
          }
          catch (error) {
            console.log('No se pudo grabar el CFDI timbrado ==', error)
            writeHead(broadcast, 400, res, "No se pudo grabar el CFDI timbrado", error)
            return
          } finally {
            // Limpiar archivos temporales
            try { unlinkSync(tempInput); } catch (e) { }
            try { unlinkSync(tempOutput); } catch (e) { }
            try { unlinkSync(tempCadOri); } catch (e) { }
          }
        })
  }
}

//////////////////////////////////////////////////////////////////
/////////////////  Funciones de timbrado /////////////////////////
//////////////////////////////////////////////////////////////////

//////////////   Genera CFDI  //////////////////////
async function grabaCfdi(tdo_tdo, ndo_doc, cfdi_tim, emp_tim, add_xml, sta_doc, dialect, db, opciones, res, broadcast) {

  ///////// Graba el CFDI timbrado en la base de datos /////////////////
  //            await grabaCfdi(tdo_tdo, ndo_doc, cfdi_tim, emp_tim, add_xml, 'T', dialect, db, opciones, res, broadcast)

  const parser = require('xml2json');
  let xmlDoc = await parser.toJson(cfdi_tim, { object: true });
  const tim_digital = xmlDoc["cfdi:Comprobante"]['cfdi:Complemento']['tfd:TimbreFiscalDigital']

  const UUID = tim_digital["UUID"]

  if (add_xml.length > 1) { // Si hay hay addenda
    cfdi_tim = cfdi_tim.replaceAll('</cfdi:Comprobante>', add_xml + '</cfdi:Comprobante>')
  }

  const arc_xml = ''
  if (dialect == 'postgres') {
    ins_sql = `
                DO $$
               
                DECLARE M_key_pri  int ;
                DECLARE M_TDO_TDO  CHAR(3);
                DECLARE M_NDO_DOC  INT;
                DECLARE M_STA_DOC  CHAR(1);
                DECLARE M_fel_doc  TIMESTAMP(3);

                 BEGIN
                    M_TDO_TDO='${tdo_tdo}';
                    M_NDO_DOC=${ndo_doc};
                    M_STA_DOC='${sta_doc}';
                
                    select M_STA_DOC=sta_DOC from man_comedoc where tdo_tdo=M_TDO_TDO AND ndo_doc=M_NDO_DOC;
                    M_key_pri=0;
                    SELECT M_key_pri=ISNULL(key_pri,0) from man_comexml  where tdo_tdo=M_tdo_tdo AND ndo_doc=M_ndo_doc;
             
                    IF M_key_pri is null OR M_key_pri=0 THEN  -- NO EXISTE REGISTRO DE TIMBRADI
                        INSERT INTO man_COMEXML (tdo_tdo,ndo_doc,STA_DOC) VALUES (M_tdo_tdo,M_ndo_doc,M_STA_DOC);
                        SELECT M_key_pri=ISNULL(key_pri,0) from man_comexml  where tdo_tdo=M_tdo_tdo AND ndo_doc=M_ndo_doc;
                    END IF
                    
                    IF M_STA_DOC<>'C' and M_STA_DOC<>'N' and M_key_pri>0 THEN
                       UPDATE man_COMEXML SET CFD_XML='${cfdi_tim}',STA_DOC='${sta_doc}',emt_xml='${emp_tim}',uuid='${UUID}'
                          WHERE key_pri=M_key_pri;
                     END IF

                    IF M_STA_DOC='C' or M_STA_DOC='N' and M_key_pri>0 THEN
                        UPDATE man_COMEXML SET ARC_XML=[${arc_xml}], STA_DOC='${sta_doc}' WHERE key_pri=M_key_pri;
                    END IF

                    UPDATE man_comedoc SET  sta_doc='${sta_doc}' WHERE tdo_tdo=M_tdo_tdo AND ndo_doc=M_ndo_doc
                COMMIT;
                $$;
	`
  }
  else {   // MSSQL y SYBASE

    ins_sql = `
                SET TEXTSIZE 524288
                DECLARE @key_pri as int
                DECLARE @TDO_TDO AS CHAR(3)
                DECLARE @NDO_DOC AS INT
                DECLARE @STA_DOC AS CHAR(1)

                SET @TDO_TDO='${tdo_tdo}'
                SET @NDO_DOC=${ndo_doc}

 
                BEGIN tran
                select @sta_doc=sta_doc from man_comedoc where tdo_tdo=@TDO_TDO AND ndo_doc=@NDO_DOC
                SET @key_pri=0

                SELECT @key_pri=ISNULL(key_pri,0) from man_comexml  where tdo_tdo=@tdo_tdo AND ndo_doc=@ndo_doc
                  IF @key_pri is null OR @key_pri=0
                      BEGIN
                        INSERT INTO man_COMEXML (tdo_tdo,ndo_doc,STA_DOC) VALUES (@tdo_tdo,@ndo_doc,@STA_DOC)
                        SELECT @key_pri=ISNULL(key_pri,0) from man_comexml  where tdo_tdo=@tdo_tdo AND ndo_doc=@ndo_doc;
                      END
                    
                    IF @STA_DOC<>'C' and @STA_DOC<>'N' and @key_pri>0
                      BEGIN
                        
                        UPDATE man_COMEXML SET CFD_XML='${cfdi_tim}', STA_DOC='${sta_doc}',emt_xml='${emp_tim}',uuid='${UUID}' 
                          WHERE key_pri=@key_pri
                      END

                    IF @STA_DOC='C' or @STA_DOC='N' and @key_pri>0
                       UPDATE man_COMEXML SET ARC_XML='${arc_xml}', STA_DOC='${sta_doc}' WHERE key_pri=@key_pri

                    UPDATE man_comedoc SET  sta_doc='${sta_doc}' WHERE tdo_tdo=@tdo_tdo AND ndo_doc=@ndo_doc

                 commit tran `
  }

  ins_sql = ins_sql.replaceAll('  ', ' ')
  //  console.log('Graba CFDI SQL ====>', ins_sql)

  //* Grabanos el xml en la base de datos
  await db.sequelize.query(ins_sql, opciones)
    .then(async data => {
      console.log('Grabo el CFDI timbrado en la base de datos ====>')
      res_send(res, ['Ok'], broadcast);
    })
    .catch(err => {
      writeHead(broadcast, 400, res, "Error SQL:", err)
    }
    )

}


/////////////////////////////////
// Timbrado con formas digitales
/////////////////////////////////

async function timbraCFDI(tip_llamada, cfdi_xml, emp_timbradora, usu_tim, pas_tim, web_tim, tdo_tdo, ndo_doc, db, opciones, res, broadcast) {
  let soapEnvelope = fs.readFileSync(`app/controllers/envelopes/${emp_timbradora}/auth.xml`, "utf-8")
  soapEnvelope = soapEnvelope.replace('<<login>>', usu_tim)
  soapEnvelope = soapEnvelope.replace('<<password>>', pas_tim)  //pas_tim
  // console.log('timbraCFDI soapEnvelope=>>>>', soapEnvelope); // envelope de autentificacion 
  // console.log(' Web tiombrado = ', web_tim)
  let response = await fetch(web_tim,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml; charset=utf-8',
        'Content-Length': `${soapEnvelope.length} `
      },
      body: soapEnvelope

    })

  let xml = await response.text()

  if (response.status != 200) {
    writeHead(broadcast, 400, res, 'No se puede conectar con el servicio de timbrado. Verifique su conexion a Internet o sus datos de acceso. Empresa:' + emp_timbradora + ' ' + res.mensaje)
    return
  }

  const ins_sql = ` update man_comedoc set sta_doc='X' where tdo_tdo=' ${tdo_tdo}' and ndo_doc=${ndo_doc}`
  await db.sequelize.query(ins_sql, opciones)
    .then(async data => {
      console.log('Comedoc actualizado a X por proceso de timbrado ======>', data)

    })
    .catch(err => {
      console.log('No se pudo ejecutar ==', err)
      writeHead(broadcast, 400, res, "Error SQL:", err)
      return
    });

  const parser = require('xml2json');

  let resJson = await parser.toJson(xml, { object: true });

  // obtenemos el token de autentificacion
  const token = resJson["S:Envelope"]["S:Body"]['ns2:AutenticarResponse']['return']['token']

  // console.log('Token de autentificacion = ', token)

  if (token.length < 2) {
    writeHead(broadcast, 400, res, 'No se puede autentificar con el servicio de timbrado. Verifique su conexion a Internet o sus datos de acceso. Empresa:' + emp_timbradora + ' ' + res.mensaje)
    return
  }

  // procedemos a timbrar
  soapEnvelope = fs.readFileSync(`app/controllers/envelopes/${emp_timbradora}/${tip_llamada}.xml`, "utf-8")
  soapEnvelope = soapEnvelope.replace('<<token>>', token.trim())
  soapEnvelope = soapEnvelope.replace('<<xml_xml>>', cfdi_xml)

  // console.log('timbraCFDI soapEnvelope=>>>>', soapEnvelope); // envelope de timbrado

  response = await fetch(web_tim,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml; charset=utf-8',
        'Content-Length': `${soapEnvelope.length} `
      },
      body: soapEnvelope,
    })

  xml = await response.text()

  if (response.status != 200) {
    writeHead(broadcast, 400, res, 'No se puede conectar con el servicio de timbrado. Verifique su conexion a Internet o sus datos de acceso. Empresa:' + emp_timbradora + ' ' + res.mensaje)
    return
  }

  // pasamos a json la respuesta para obtener el resulltado del timbrado
  resJson = await parser.toJson(xml, { object: true });

  const result = resJson['S:Envelope']['S:Body']['ns2:TimbrarResponse'].return

  // console.log(' RESPUESTA TIMBRADO  result =====>', result)

  // si hay error
  if (result['codigo']) {
    writeHead(broadcast, 400, res, 'No se pudo timbrar el CFDI. ' + result['mensaje'])
    return
  }

  // obtenemos el cfdi timbrado
  let xmlString = result['cfdi']

  const he = require('he'); // HTML Entities

  const xmlDoc = he.decode(he.decode(xmlString));
  //  const xmlDoc = he.decode(xmlString);

  // Paso 2: Parsear el XML decodificado
  console.log('TIMBRADO EXITOSO =====>', tdo_tdo, ndo_doc)
  return xmlDoc
}


function decodeHTMLEntities(text) {
  const entities = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&apos;': "'"
  };

  return text.replace(/&(amp|lt|gt|quot|apos);/g, (match, entity) => {
    return entities[`&${entity};`];
  });
}


// Envia la respuesta por socket o axios al front end
async function res_send(res, data, broadcast) {

  // asignamos socket si existe
  //  const socket=res.handshake? res:false

  // si es socket y hay broadcast 

  //console.log('=======res_send ============== broadcast=',typeof broadcast)



  if (typeof broadcast == 'string') {
    console.log('=======res_send data sockect broadcast = ', broadcast)

    res.emit(broadcast, [data])
    return
  }

  if (res.client) {
    console.log('=======res_send data sockect callback ============== ', res.send)
    broadcast(data)
    return
  }
  // si es Axios  
  //console.log('=======res_send data Axios ============== ', res.id, res.client)

  res.send(data)

  return

}

async function writeHead(broadcast, num_err, res, men_err, error) {

  //if (typeof error == 'string') {
  if (error) {
    for (const com in error)
      console.log('=========<Error Componente>====', com, 'error=', error[com])
    /*
  for (const com in error){
    console.log('=========<Error Componente>====',com,'error=',error[com] ) 
   
    if (typeof error[com].isArray==='undefined' &&  error[com][0])
       console.log('======<error com array >====== ',com,error[com][0])
      for (const comSeq in error[com])
        if (typeof error[com][comSeq]!='string' && error[com][comSeq][0] )
           console.log('======<error com array>======> ',comSeq,error[com][comSeq][0])
  }
  */
    if (error.detail) {
      men_err = men_err + ': ' + error.detail
    }



    if (error.message) {
      men_err = men_err + ': ' + error.message

      if (error.sql) men_err = men_err + ' in ' + error.sql
    }


    if (error.original) {
      const original = error.original
      if (original.errors) {
        for (let i = 0; i < original.errors.length; i++) {
          console.error('Agregate.errors ===>>>', original.errors[i], '<<<========')
          men_err = men_err + ':' + original.errors[i]
        }

      }
      else {
        men_err = men_err + ':' + original
      }
    }


    /*message
    const errObj = {};
    error.errors.map( er => {
       errObj[er.path] = er.message;
    })
    console.log('errObj Sequelize errores',errObj);
    */


    if (error.errors) {


      for (let i = 0; i < error.errors.length; i++) {
        console.error('error.errors ===>>>', error.errors[i], error.errors[i].message, '<<<========')
        men_err = men_err + ':' + error.errors[i].message
      }

    }
  }
  //}

  //var message = Buffer.from(men_err, 'utf-8').toString();
  // remplazo de rt/lf
  //men_err = men_err.replace(/(\r\n|\n|\r)/gm, "")
  let messageError = ''
  for (let I = 0; I < men_err.length; I++) {

    if (men_err[I].charCodeAt() > 0 && men_err[I].charCodeAt() < 256)
      messageError = messageError + men_err[I]

  }


  const socket = res.handshake ? res : false

  if (socket) {
    socket.emit('error', messageError)
    try {
      if (res.client)
        broadcast(false)

      return
    } catch {

      res.status(num_err).send(messageError);

      //     res.writeHead(num_err, error)
      //     res.send()
      return

    }
  }

  //  res.writeHead(400, message, { 'Content-Type': 'text/plain' });

  try {
    // Quitamos el mensaje de error de sequelize

    messageError = messageError.replace('SequelizeDatabaseError:Error:', '')
    messageError = messageError.replace(':Error: The transaction ended in the trigger. The batch has been aborted.', '')
    console.error('BackEnd error messageError ==========>', messageError, 'and num_err=', num_err, '<=============')
    // 5 Febrero 2024
    //  res.statusMessage =messageError
    //  res.status(num_err).end()
    console.error('BackEnd error res ==========>', res)




    if (res.status)
      res.status(num_err).send(messageError);
    else
      res.writeHead(num_err).end()

    //res.writeHead(num_err)
    //res.end(messageError)

    //res.writeHead(num_err, messageError, { 'Content-Type': 'text/plain' })
    // res.send()
  } catch (error) {
    console.error('res.writeHead error', error, 'num_err', num_err, 'men_err', men_err)
    if (res.status)
      res.status(num_err).send(error);
    else
      res.writeHead(num_err).end()

    // res.writeHead(num_err, error, { 'Content-Type': 'text/plain' })
    // res.send()

  }


  return
}

///////////////////////////////////////////
// Genera Model para sequelize 
//////////////////////////////////////////
async function genModel(dialect, nom_tab, db, dir_emp) {

  if (dialect == 'postgres')
    ins_sql = `select F_gen_modelo(nom_ind) as query,nom_ind from man_comeind where lower(nom_tab)=lower('${nom_tab}') and num_ind=1 `
  else
    ins_sql = `select dbo.F_gen_modelo(nom_ind) as query,nom_ind from man_comeind where lower(nom_tab)=lower('${nom_tab}') and num_ind=1 `

  // console.log('GENERA MODELO ', ins_sql)


  await db.sequelize.query(ins_sql)
    .then(async data => {
      if (!data[0][0] || data[0][0].query == null || data[0][0].query.trim() == '') { // No hay modelo a generar
        return
      }
      query = data[0][0].query
      const nom_ind = data[0][0].nom_ind.trim()
      const modelo = dir_emp + 'files/' + nom_ind.toLowerCase() + '.js'
      //    console.log('<=========Escribe Sequelize MODEL  Node Server=======>', modelo)
      //const fs = require('fs')

      try {
        fs.writeFileSync(modelo, query)

        /*
                fs.writeFileSync(modelo, query, (err) => {
                  if (err) {
                    console.log('<=========Error escribiento MODEL >', modelo, err)
                    return "NODE ERROR. Can't write Sequelize MODEL " + modelo + " " + err
                  }
                 console.log('<=========Escribio Sequelize MODEL  Node Server=======>', modelo)
                });
            
            */
        console.log('2) <=========Escribio Sequelize MODEL  Node Server=======>', modelo)
        return 'Ok'
      } catch (error) {
        console.log('ERROR :', error)
        return 'ERROR : writing sequelyze MODEL file ' + nom_tab
      };


    })
    .catch(err => {
      console.log('ERROR :', err)
      return 'ERROR :' + ins_sql
    });
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

// Genera una cadena aleatoria de string de longitud n
function genRandStr(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
function sqlExec(ins_sql, db, opciones) {
  db.sequelize.query(ins_sql, opciones)
    .then(async data => {
      console.log('<=========query SQLExec=======>', data)

    }).error(err => {
      console.log('No se pudo ejecutar ==', err)
    });
}
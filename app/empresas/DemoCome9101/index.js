

const db = require("./models");  // vistas de las base de datos


//{alter : true} - This checks what is the current state of the table in the database 
//                 (which columns it has, what are their data types, etc), and then
//                 performs the necessary changes in the table to make it match the model.

//db.sequelize.sync({alter : true});   
db.sequelize.sync(); //{ force: true } This creates the table, dropping it first if it already existed

//const sequelize = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password)

// Export this database so it can be used for the graphQL schemas.
//export default db.sequelize

console.log(`Inicializo sync`);


///////////////////////////////////
const dbConfig = require("db.config.js");
const { Sequelize,DataTypes,QueryTypes} = require('sequelize');
//QueryTypes,,QueryInterface 
//const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});



const db = {};
const QI = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Inicializa la base de datos
//db.siavcom = require("./siavcom.model.js")(sequelize, Sequelize);

// asignamos todas las vistas de captura

//db.vi_lla1_nom = require("./siavcom.comenom.js")(sequelize, Sequelize);
db.vi_lla1_nom = require("./come/comenom.js")(sequelize, Sequelize);
db.vi_lla1_con = require("./come/comecon.js")(sequelize, Sequelize);
db.vi_lla1_ven = require("./come/comeven.js")(sequelize, Sequelize);
db.vi_lla1_tdo = require("./come/cometdo.js")(sequelize, Sequelize);
db.vi_lla1_doc = require("./come/comedoc.js")(sequelize, Sequelize);

db.vi_lla1_dat = require("./come/comedat.js")(sequelize, Sequelize);
db.vi_lla1_ind = require("./come/comeind.js")(sequelize, Sequelize);
db.vi_lla1_vis = require("./come/comevis.js")(sequelize, Sequelize);






module.exports = db;
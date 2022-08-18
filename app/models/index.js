const dbConfig = require("../config/db.config.js");
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
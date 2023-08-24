/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comeban', {
'ban_ban': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "CLAVE DEL BANCO"  },
'nom_ban': {type: DataTypes.CHAR(120),allowNull: false,defaultValue: ' ',comment: "NOMBRE DEL BANCO"  },
'nco_ban': {type: DataTypes.CHAR(40),allowNull: false,defaultValue: ' ',comment: "NOMBRE CORTO"  },
'rfc_ban': {type: DataTypes.CHAR(13),allowNull: false,defaultValue: ' ',comment: "RFC DEL BANCO"  },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeban'});
};


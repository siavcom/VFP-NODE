/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_cometfi', {
'fac_tfi': {type: DataTypes.CHAR(2),allowNull: false,defaultValue: ' ',comment: "FACTOR DE IMPORTANCIA"  },
'des_tfi': {type: DataTypes.CHAR(15),allowNull: false,defaultValue: ' ',comment: "DESCRIPCION DE FACTOR DE IMPORTANCIA"  },
'cal_tfi': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: "FORMULA DE CALCULO"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometfi'});
};


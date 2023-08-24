/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comeima', {
'tab_ima': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "TABLA QUE GENERA LA IMAGEN"  },
'key_ima': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "KEY_PRI QUE GENERA LA IMAGEN"  },
'ima_ima': {type: DataTypes.G,allowNull: false,comment: "IMAGEN"  },
'par_ima': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "PARAMETRO DE LA IMAGEN"  },
'tip_ima': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "TIPO DE IMAGEN"  },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeima'});
};


/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_cometda', {
'alm_tda': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "ALMACEN"  },
'des_tda': {type: DataTypes.CHAR(35),allowNull: false,defaultValue: ' ',comment: "NOMBRE DEL ALMACEN"  },
'ubi_tda': {type: DataTypes.CHAR(35),allowNull: false,defaultValue: ' ',comment: "UBICACION DEL ALMACEN"  },
'ave_tda': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "ALMACEN DE VENTA (CONTABLE)"  },
'alc_tda': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "ALMACEN DE CLIENTE"  },
'cod_nom': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: "CLIENTE AL CUAL PERTENECE EL ALMACEN"  },
'mub_tda': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "MANEJA UBICACONES"  },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometda'});
};


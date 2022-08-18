/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comelot', {
'ser_mov': {type: DataTypes.CHAR(17),allowNull: false,defaultValue: ' ',comment: "SERIE O LOTE"  },
'fpo_lot': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE PRODUCCION"  },
'fca_lot': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE CADUCIDAD"  },
'ob1_lot': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: "OBSERVACION 1"  },
'ob2_lot': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: "OBSERVACION 2"  },
'ob3_lot': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: "OBSERVACION 3"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comelot'});
};


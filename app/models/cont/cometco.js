/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_cometco', {
'con_tco': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DEL CONCEPTO"  },
'des_tco': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: "DESCRIPCION DEL CONCEPTO"  },
'imp_pol': {type: DataTypes.DECIMAL(15,2),allowNull: false,defaultValue: '0',comment: "IMPORTE TOTAL DE LA POLIZA"  },
'mon_pol': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "MONEDA DE LA POLIZA"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometco'});
};


/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_cometdf', {
'tip_tdn': {type: DataTypes.CHAR(2),allowNull: false,defaultValue: ' ',comment: "TIPO DE CLIENTE"  },
'cla_fam': {type: DataTypes.CHAR(5),allowNull: false,defaultValue: ' ',comment: "FAMILIA"  },
'de1_tdf': {type: DataTypes.DECIMAL(5,2),allowNull: false,defaultValue: '0',comment: "DESCUENTO 1 SOBRE PRECIO"  },
'de2_tdf': {type: DataTypes.DECIMAL(5,2),allowNull: false,defaultValue: '0',comment: "DESCUENTO 2 SOBRE PRECIO"  },
'de3_tdf': {type: DataTypes.DECIMAL(5,2),allowNull: false,defaultValue: '0',comment: "DESCUENTO 3 SOBRE PRECIO"  },
'de4_tdf': {type: DataTypes.DECIMAL(5,2),allowNull: false,defaultValue: '0',comment: "DESCUENTO 4 SOBRE PRECIO"  },
'de5_tdf': {type: DataTypes.DECIMAL(5,2),allowNull: false,defaultValue: '0',comment: "DESCUENTO 5 SOBRE PRECIO POR VOLUMEN"  },
'can_tdf': {type: DataTypes.DECIMAL(12,5),allowNull: false,defaultValue: '0',comment: "CANTIDAD PARA OTORGAR DESCUENTO POR VOLUMEN"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometdf'});
};


/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_cometdn', {
'cop_nom': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "C=CLIENTE P=PROVEEDOR"  },
'tip_tdn': {type: DataTypes.CHAR(2),allowNull: false,defaultValue: ' ',comment: "TIPO"  },
'des_tdn': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: "DESCRIPCION"  },
'ctb_tdn': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: "CUENTA DE CONTABILIDAD"  },
'ai0_tdn': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "APLICA IMPUESTO 0"  },
'ai1_tdn': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "APLICA IMPUESTO 1"  },
'ai2_tdn': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "APLICA IMPUESTO 2"  },
'ai3_tdn': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "APLICA IMPUESTO 3"  },
'ai4_tdn': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "APLICA IMPUESTO 4"  },
'ai5_tdn': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "APLICA IMPUESTO 5"  },
'mos_tdn': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "ES CLIENTE DE MOSTRADOR"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometdn'});
};


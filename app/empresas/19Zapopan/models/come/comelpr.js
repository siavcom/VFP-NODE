/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comelpr', {
'cla_isu': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "CLAVE DEL INSUMO"  },
'fec_lpr': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE CAMBIO"  },
'pve_mov': {type: DataTypes.DECIMAL(16,5),allowNull: false,defaultValue: '0',comment: "PRECIO DE VENTA"  },
'lpr_lpr': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "LISTA DE PRECIOS"  },
'tip_tdn': {type: DataTypes.CHAR(2),allowNull: false,defaultValue: ' ',comment: "TIPO DE CLIENTE"  },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comelpr'});
};


/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_cometop', {
'cop_nom': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "CLIENTE O PROVEEDOR"  },
'cod_nom': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: "CODIGO DEL CLIENTE O PROVEEDOR"  },
'tip_tdn': {type: DataTypes.CHAR(2),allowNull: false,defaultValue: ' ',comment: "TIPO DE CLIENTE O PROVEEDOR"  },
'cla_isu': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: "CLAVE DEL INSUMO"  },
'per_top': {type: DataTypes.CHAR(6),allowNull: false,defaultValue: ' ',comment: "PERIODO (AAAAMM)"  },
'can_top': {type: DataTypes.DECIMAL(16,5),allowNull: false,defaultValue: '0',comment: "CANTIDAD VENDIDA	"  },
'imp_top': {type: DataTypes.DECIMAL(16,5),allowNull: false,defaultValue: '0',comment: "IMPORTE VENDIDO"  },
'est_top': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "ESTATUS"  },
'top_top': {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: '0',comment: "PERTENECE AL TOP DE VENTAS"  },
'nue_top': {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: '0',comment: "PRODUCTOS NUEVOS"  },
'des_top': {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: '0',comment: "PRODUCTOS DESTACADOS"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "TIMESTAMP"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometop'});
};


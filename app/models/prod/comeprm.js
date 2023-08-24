/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comeprm', {
'prd_prd': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "PROCESO DE PRODUCCION"  },
'cor_prd': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE CORRIDA"  },
'mov_prm': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE MOVIMIENTO"  },
'ser_mov': {type: DataTypes.CHAR(17),allowNull: false,defaultValue: ' ',comment: "LOTE DE PRODUCCION"  },
'cla_isu': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "CLAVE DE INSUMO"  },
'can_prm': {type: DataTypes.DECIMAL(16,5),allowNull: false,defaultValue: '0',comment: "CANTIDAD DE INSUMO"  },
'med_prm': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "MEDIDA DE INSUMO"  },
'ref_prm': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: "REFERENCIA"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeprm'});
};


/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comedrm', {
'prd_prd': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "PROCESO DE PRODUCCION"  },
'ser_mov': {type: DataTypes.CHAR(17),allowNull: false,defaultValue: ' ',comment: "SERIE O LOTE DE LA CORRIDA DE PRODUCCION"  },
'cor_prd': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "CORRIDA"  },
'mov_prm': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NO DE MOVIMIENTO"  },
'cla_isu': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "CLAVE DEL INSUMO"  },
'can_drm': {type: DataTypes.DECIMAL(16,5),allowNull: false,defaultValue: '0',comment: "CANTIDAD"  },
'med_drm': {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: '0',comment: "MEDIDA"  },
'ref_drm': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: "REFERENCIA"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comedrm'});
};


/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comeprd', {
'prd_prd': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "PROCESO DE PRODUCCION"  },
'ser_mov': {type: DataTypes.CHAR(17),allowNull: false,defaultValue: ' ',comment: "SERIE O LOTE DE PRODUCCION"  },
'cor_prd': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE CORRIDA"  },
'ten_prd': {type: DataTypes.DATE,allowNull: false,comment: "TIEMPO DE ENTRADA DEL LOTE"  },
'tsa_prd': {type: DataTypes.DATE,allowNull: false,comment: "TIEMPO DE SALIDA DEL LOTE"  },
'dep_prd': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE DOCUMENTO DE ENTRADA"  },
'nde_prd': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE DOCUMENTO DE ENTRADA"  },
'aep_prd': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "ALMACEN DE ENTRADA"  },
'dpp_prd': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE DOCUMENTO DE SALIDA"  },
'ndp_prd': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE DOCUMENTO DE SALIDA"  },
'app_prd': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "ALMACEN DE SALIDA"  },
'drp_prd': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "DOCUMENTO DE RESULTADO DE PROCESO"  },
'ndr_prd': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE DOCUMENTO DE RESULTADO DE PROCESO"  },
'arp_prd': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "ALMACEN DOCUMENTO DE RESULTADO DE PROCESO"  },
'can_prd': {type: DataTypes.DECIMAL(16,5),allowNull: false,defaultValue: '0',comment: "CANTIDAD PRODUCIDA O A SELECCIONAR"  },
'med_prd': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "MEDIDA"  },
'tpr_prd': {type: DataTypes.DECIMAL(9,4),allowNull: false,defaultValue: '0',comment: "TIEMPO DE OPERACION"  },
'est_prd': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "ESTATUS  P=PROCESO   D=DETENIDO  T=TERMINADO"  },
'chm_prd': {type: DataTypes.DECIMAL(16,5),allowNull: false,defaultValue: '0',comment: "COSTO MAQUINA"  },
'chh_prd': {type: DataTypes.DECIMAL(15,5),allowNull: false,defaultValue: '0',comment: "COSTO HOMBRE"  },
'obs_prd': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "OBSERVACION"  },
'can_prm': {type: DataTypes.DECIMAL(16,5),allowNull: false,defaultValue: '0',comment: "CANTIDAD DE MOVIMIENTOS DE PRODUCCION"  },
'can_drm': {type: DataTypes.DECIMAL(16,5),allowNull: false,defaultValue: '0',comment: "CANTIDAD DE DETALLE POR MOVIMIENTO DE PRODUCCION"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeprd'});
};


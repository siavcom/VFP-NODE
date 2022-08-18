/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_cometdp', {
'prd_prd': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "PROCESO DE PRODUCCION"  },
'des_tdp': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: "DESCRIPCION DEL PROCESO"  },
'tip_tdp': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "TIPO DE PROCESO R=RECEPCION S=SUBENSAMBLE P=PRODUCTO TERMINADO"  },
'cla_isu': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "INSUMO A PROCESAR"  },
'gen_tdp': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "GENERA UNA  I=IMPLOSION  E=EXPLOSION"  },
'dep_prd': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "DOCUMENTO DE ENTRADA AL PROCESO"  },
'aep_prd': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "ALMACEN DOCUMENTO DE ENTRADA AL PROCESO"  },
'dpp_prd': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "DOCUMENTO DEL PROCESO DE PRODUCCION"  },
'app_prd': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "ALMACEN DOCUMENTO DE SALIDA  DEL PROCESO"  },
'drp_prd': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "DOCUMENTO SI EL RESULTADO DEL PROCESO ES POSITIVO"  },
'arp_prd': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "ALMACEN SI EL RESULTADO DEL PROCESO ES POSITIVO"  },
'crp_tdp': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "CALCULO DEL RESULTADO POR DIFERENCIA DE  P=PESO; U=UNIDAD"  },
'irp_tdp': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: "INSUMO RESULTANTE DEL PROCESO"  },
'drn_prd': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "DOCUMENTO SI EL RESULTADO ES NEGATIVO"  },
'arn_prd': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "ALMACEN SI EL RESULTADO ES NEGATIVO"  },
'chm_tdp': {type: DataTypes.DECIMAL(16,5),allowNull: false,defaultValue: '0',comment: "COSTO POR HORA MAQUINA"  },
'chh_tdo': {type: DataTypes.DECIMAL(16,5),allowNull: false,defaultValue: '0',comment: "COSTO POR HORA HOMBRE"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'obs_tdp': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: "OBSERVACIONES"  },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometdp'});
};


/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comepga', {
'num_pry': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE PROYECTO"  },
'pga_pga': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: "PRESUPUESTO DE GASTO"  },
'per_pga': {type: DataTypes.CHAR(6),allowNull: false,defaultValue: ' ',comment: "PERIODO DEL PRESUPUESTO, AAAAMM DONDE SI MM=00, SIGNIFICA PRESUPUES ANUAL	"  },
'num_pga': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "NUMERO DE PRESUPUESTO, 0=PRIMER PRESUPUESTO, 1...N=NUMERO DE APLIACION DEL PRESUPUESTO"  },
'imp_pga': {type: DataTypes.DECIMAL(18,2),allowNull: false,defaultValue: '0',comment: "IMPORTE DEL PRESUPUESTO	"  },
'obs_pga': {type: DataTypes.STRING(512),allowNull: false,comment: "OBSERVACION"  },
'unn_unn': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "UNIDAD DE NEGOCIO"  },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "TIMESTAMP"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comepga'});
};


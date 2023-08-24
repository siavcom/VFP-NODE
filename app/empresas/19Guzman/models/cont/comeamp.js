/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comeamp', {
'cta_cta': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: "NUMERO DE CUENTA"  },
'per_per': {type: DataTypes.CHAR(6),allowNull: false,defaultValue: ' ',comment: "PERIODO DE AMPLIACION DEL PRESUPUESTO"  },
'imp_amp': {type: DataTypes.DECIMAL(15,2),allowNull: false,defaultValue: '0',comment: "IMPORTE DE LA AMPLIACION"  },
'obs_amp': {type: DataTypes.STRING(256),allowNull: false,comment: "OBSERVACIONES DE LA AMPLIACION"  },
'cco_cco': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "CENTRO DE COSTO"  },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeamp'});
};


/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comepre', {
'cta_cta': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: "NUMERO DE CUENTA"  },
'ano_pre': {type: DataTypes.CHAR(4),allowNull: false,defaultValue: ' ',comment: "AÑO DEL PRESUPUESTO"  },
'ene_pre': {type: DataTypes.DECIMAL(15,2),allowNull: false,defaultValue: '0',comment: "PRESUPUESTO DE ENERO"  },
'feb_pre': {type: DataTypes.DECIMAL(15,2),allowNull: false,defaultValue: '0',comment: "PRESUPUESTO DE FEBRERO"  },
'mar_pre': {type: DataTypes.DECIMAL(15,2),allowNull: false,defaultValue: '0',comment: "PRESUPUESTO DE MARZO"  },
'abr_pre': {type: DataTypes.DECIMAL(15,2),allowNull: false,defaultValue: '0',comment: "PRESUPUESTO DE ABRIL"  },
'may_pre': {type: DataTypes.DECIMAL(15,2),allowNull: false,defaultValue: '0',comment: "PRESUPUESTO DE MAYO"  },
'jun_pre': {type: DataTypes.DECIMAL(15,2),allowNull: false,defaultValue: '0',comment: "PRESUPUESTO DE JUNIO"  },
'jul_pre': {type: DataTypes.DECIMAL(15,2),allowNull: false,defaultValue: '0',comment: "PRESUPUESTO DE JULIO"  },
'ago_pre': {type: DataTypes.DECIMAL(15,2),allowNull: false,defaultValue: '0',comment: "PRESUPUESTO DE AGOSTO"  },
'sep_pre': {type: DataTypes.DECIMAL(15,2),allowNull: false,defaultValue: '0',comment: "PRESUPUESTO DE SEPTIEMBRE"  },
'oct_pre': {type: DataTypes.DECIMAL(15,2),allowNull: false,defaultValue: '0',comment: "PRESUPUESTO DE OCTUBRE"  },
'nov_pre': {type: DataTypes.DECIMAL(15,2),allowNull: false,defaultValue: '0',comment: "PRESUPUESTO DE NOVIEMBRE"  },
'dic_pre': {type: DataTypes.DECIMAL(15,2),allowNull: false,defaultValue: '0',comment: "PRESUPUESTO DE DICIEMBRE"  },
'cco_cco': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "CENTRO DE COSTO"  },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comepre'});
};


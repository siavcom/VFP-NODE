/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comeque', {
'rep_que': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: "REPORTE"  },
'nco_que': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE CONDICION"  },
'ren_que': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE RENGLON"  },
'pai_que': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "PARENTESIS IZQUIERDO"  },
'cam_que': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "CAMPO"  },
'con_que': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: "CONDICION"  },
'val_que': {type: DataTypes.CHAR(120),allowNull: false,defaultValue: ' ',comment: "VALOR"  },
'pad_que': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "PARENTESIS DERECHO"  },
'uni_que': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "OPERADOR LOGICO (AND/OR)"  },
'gru_gru': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "GRUPO DE TRABAJO"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "TIMESTAMP"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeque'});
};


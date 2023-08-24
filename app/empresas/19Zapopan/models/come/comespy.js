/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comespy', {
'tpy_tpy': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE PROYECTO"  },
'num_pry': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE PROYECTO"  },
'sol_spy': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "NUMERO DE SOLUCION"  },
'des_spy': {type: DataTypes.STRING(256),allowNull: false,comment: "DESCRIPCION DE LA SOLUCION"  },
'est_spy': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "EST. DE LA SOLUCION I=INICIO M=CONFORMADO C=COSTEADO A=AUTORIZADO Z=COTIZADO B=BLOQUEADO P=ACEPTADO"  },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comespy'});
};


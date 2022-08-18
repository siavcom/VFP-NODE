/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comedia', {
'dia_dia': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "DIARIO"  },
'des_dia': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: "DESCRIPCION DEL DIARIO"  },
'con_dia': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "FOLIO CONSECUTIVO DEL DIARIO"  },
'tip_dia': {type: DataTypes.CHAR(2),allowNull: false,defaultValue: ' ',comment: "TIPO  IN=INGRESOS ; EG=EGRESOS ; DI=DIARIO ; CH=CHEQUE ; DE=DEPOSITO; CA=CARGO; AB=ABONO"  },
'cta_cta': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: "CUENTA PRICIPAL DE AFECTACION"  },
'tip_mvt': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "TIPO DE AFECTACION CONTABLE C=CARGO A=ABONO"  },
'mon_dia': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "MONEDA DEL DIARIO"  },
'ini_dia': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "INDICA SI SE INICIALIZA CADA PERIODO NUEVO INICIALIZABLE N=NO INICIALIZABLE"  },
'for_dia': {type: DataTypes.CHAR(16),allowNull: false,defaultValue: ' ',comment: "FORMA DE IMPRESION"  },
'per_per': {type: DataTypes.CHAR(6),allowNull: false,defaultValue: ' ',comment: "PERIODO CONTABLE (AAAAMM)"  },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comedia'});
};


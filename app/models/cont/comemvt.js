/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comemvt', {
'dia_dia': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE DIARIO DE LA POLIZA"  },
'num_pol': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE POLIZA"  },
'per_per': {type: DataTypes.CHAR(6),allowNull: false,defaultValue: ' ',comment: "PERIODO CONTABLE (AAAAMM)"  },
'mvt_mvt': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "MOVIMIENTO DE LA POLIZA"  },
'fec_pol': {type: DataTypes.DATE,allowNull: false,comment: "FECHA"  },
'ref_mvt': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: "DESCRIPCION DEL MOVIMIENTO"  },
'cta_cta': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: "CUENTA"  },
'tip_mvt': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "TIPO DE MOVIMIENTO C=CARGO A=ABONO"  },
'imp_mvt': {type: DataTypes.DECIMAL(18,6),allowNull: false,defaultValue: '0',comment: "IMPORTE DEL MOVIMIENTO"  },
'fdc_mvt': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE CONCILIACION"  },
'rfc_pve': {type: DataTypes.CHAR(13),allowNull: false,defaultValue: ' ',comment: "RFC DE LA CUENTA"  },
'iva_mvt': {type: DataTypes.DECIMAL(8,4),allowNull: false,defaultValue: '0',comment: "PORCENTAJE DE IMPUESTO"  },
'cco_cco': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "CENTRO DE COSTO"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comemvt'});
};


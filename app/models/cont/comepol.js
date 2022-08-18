/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comepol', {
'dia_dia': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE DIARIO"  },
'num_pol': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE POLIZA"  },
'per_per': {type: DataTypes.CHAR(6),allowNull: false,defaultValue: ' ',comment: "PERIODO CONTABLE (AAAAMM)"  },
'fec_pol': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE LA POLIZA"  },
'sis_pol': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "SISTEMA QUE GENERO LA POLIZA D=CONTABILIDAD C=COMERCIALIZADORAS"  },
'car_pol': {type: DataTypes.DECIMAL(18,6),allowNull: false,defaultValue: '0',comment: "CARGOS DE LA POLIZA"  },
'abo_pol': {type: DataTypes.DECIMAL(18,6),allowNull: false,defaultValue: '0',comment: "ABONOS DE LA POLIZA"  },
'est_pol': {type: DataTypes.CHAR(2),allowNull: false,defaultValue: ' ',comment: "ESTADO DE LA POLIZA"  },
'con_tco': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE CONCEPTO"  },
'tit_pol': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: "TITULO DE LA POLIZA"  },
'mon_pol': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "MONEDA DE LA POLIZA"  },
'vmo_pol': {type: DataTypes.DECIMAL(9,4),allowNull: false,defaultValue: '0',comment: "VALOR DE LA MONEDA"  },
'cop_nom': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "CLIENTE O PROVEEDOR C=CLIENTE P=PROVEEDOR (EN CASO DE SER UN CHEQUE)"  },
'cod_nom': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: "CODIGO DE CLIENTE O PROVEEDOR  (EN CASO DE SER UN CHEQUE)"  },
'imp_pol': {type: DataTypes.DECIMAL(15,2),allowNull: false,defaultValue: '0',comment: "IMPORTE DE LA POLIZA ( EN CASO DE QUE SEA CHEQUE O DEPOSITO)"  },
'nom_nom': {type: DataTypes.CHAR(80),allowNull: false,defaultValue: ' ',comment: "NOMBRE DEL CLIENTE O PROVEEDOR EN CASO DE QUE SEA UN CHEQUE O UN DEPOSITO QUE NO EXISTE EN SIAVCOM"  },
'fde_pol': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE DEPOSITO"  },
'ban_ban': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "BANCO"  },
'nch_pol': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE CHEQUE"  },
'rde_pol': {type: DataTypes.CHAR(15),allowNull: false,defaultValue: ' ',comment: "REFERENCIA DEL DEPOSITO"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comepol'});
};


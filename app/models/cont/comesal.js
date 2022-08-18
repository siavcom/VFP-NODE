/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comesal', {
'cta_cta': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: "NUMERO DE CUENTA"  },
'per_per': {type: DataTypes.CHAR(6),allowNull: false,defaultValue: ' ',comment: "PERIODO CONTABLE (AAAAMM)"  },
'sct_sal': {type: DataTypes.DECIMAL(18,6),allowNull: false,defaultValue: '0',comment: "SALDO CONTABLE INICIAL AL PERIODO"  },
'cap_sal': {type: DataTypes.DECIMAL(18,6),allowNull: false,defaultValue: '0',comment: "CARGOS EN EL PERIODO"  },
'abp_sal': {type: DataTypes.DECIMAL(18,6),allowNull: false,defaultValue: '0',comment: "ABONOS EN EL PERIODO"  },
'sa2_sal': {type: DataTypes.DECIMAL(15,2),allowNull: false,defaultValue: '0',comment: "SALDO MONEDA 2"  },
'ca2_sal': {type: DataTypes.DECIMAL(15,2),allowNull: false,defaultValue: '0',comment: "CARGOS MONEDA 2"  },
'ab2_sal': {type: DataTypes.DECIMAL(15,2),allowNull: false,defaultValue: '0',comment: "ABONOS MONEDA 2"  },
'sa3_sal': {type: DataTypes.DECIMAL(15,2),allowNull: false,defaultValue: '0',comment: "SALDO MONEDA 3"  },
'ca3_sal': {type: DataTypes.DECIMAL(15,2),allowNull: false,defaultValue: '0',comment: "CARGOS MONEDA 3"  },
'ab3_sal': {type: DataTypes.DECIMAL(15,2),allowNull: false,defaultValue: '0',comment: "ABONOS MONEDA 3"  },
'sa4_sal': {type: DataTypes.DECIMAL(15,2),allowNull: false,defaultValue: '0',comment: "SALDO MONEDA 4"  },
'ca4_sal': {type: DataTypes.DECIMAL(15,2),allowNull: false,defaultValue: '0',comment: "CARGOS MONEDA 4"  },
'ab4_sal': {type: DataTypes.DECIMAL(15,2),allowNull: false,defaultValue: '0',comment: "ABONOS MONEDA 4"  },
'sa5_sal': {type: DataTypes.DECIMAL(15,2),allowNull: false,defaultValue: '0',comment: "SALDO MONEDA 5"  },
'ca5_sal': {type: DataTypes.DECIMAL(15,2),allowNull: false,defaultValue: '0',comment: "CARGO MONEDA 5"  },
'ab5_sal': {type: DataTypes.DECIMAL(15,2),allowNull: false,defaultValue: '0',comment: "ABONO MONEDA 5"  },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comesal'});
};


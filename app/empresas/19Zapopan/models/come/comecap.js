/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comecap', {
'tdo_tdo': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE DOCUMENTO"  },
'ndo_doc': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE DOCUMENTO"  },
'mov_mov': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "MOVIMIENTO"  },
'ens_mov': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "ENSABLE DEL MOVIMIENTO"  },
'cla_isu': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "CLAVE DEL INSUMO"  },
'can_cap': {type: DataTypes.DECIMAL(14,6),allowNull: false,defaultValue: '0',comment: "CANTIDAD DEL MOVIMIENTO EN UNIDAD PRINCIPAL"  },
'fec_mov': {type: DataTypes.DATE,allowNull: false,comment: "FECHA"  },
'cos_cap': {type: DataTypes.DECIMAL(16,6),allowNull: false,defaultValue: '0',comment: "COSTO TOTAL DEL MOV. EN MONEDA PRINCIPAL"  },
'cas_cap': {type: DataTypes.DECIMAL(14,6),allowNull: false,defaultValue: '0',comment: "SALIDAS ACUMULADA CAPAS"  },
'sap_cap': {type: DataTypes.DECIMAL(14,6),allowNull: false,defaultValue: '0',comment: "SALIDAS EN EL PERIODO CAPAS"  },
'spe_cap': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "SW DE PERIODO N=NUEVO A=ACT. D=DESACT."  },
'suc_pge': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "SUCURSAL"  },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comecap'});
};


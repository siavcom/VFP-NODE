/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comeped', {
'suc_pge': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "SUCURSAL"  },
'ped_ped': {type: DataTypes.CHAR(15),allowNull: false,defaultValue: ' ',comment: "PEDIMENTO ADUANAL"  },
'age_ped': {type: DataTypes.DECIMAL(5,0),allowNull: false,defaultValue: '0',comment: "AGENTE ADUANAL"  },
'pai_ped': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "PAIS DE ORIGEN"  },
'tdo_tdo': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE DOCUMENTO"  },
'ndo_doc': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE DOCUMENTO"  },
'fec_ped': {type: DataTypes.DATE,allowNull: false,comment: "FECHA"  },
'mon_ped': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "MONEDA"  },
'vmo_ped': {type: DataTypes.DECIMAL(9,4),allowNull: false,defaultValue: '0',comment: "VALOR DE LA MONEDA"  },
'fme_ped': {type: DataTypes.DECIMAL(9,4),allowNull: false,defaultValue: '0',comment: "FACTOR DE MONEDA EXTRANJERA"  },
'fac_ped': {type: DataTypes.DECIMAL(8,5),allowNull: false,defaultValue: '0',comment: "FACTOR DE AJUSTE"  },
'vac_ped': {type: DataTypes.DECIMAL(16,5),allowNull: false,defaultValue: '0',comment: "VALOR COMERCIAL"  },
'adv_ped': {type: DataTypes.DECIMAL(16,5),allowNull: false,defaultValue: '0',comment: "ADVALOREM TOTAL"  },
'dta_ped': {type: DataTypes.DECIMAL(16,5),allowNull: false,defaultValue: '0',comment: "DERECHO DE TRAMITES ADUANALES"  },
'rec_ped': {type: DataTypes.DECIMAL(16,5),allowNull: false,defaultValue: '0',comment: "RECARGOS Y GASTOS ASOCIADOS"  },
'iva_ped': {type: DataTypes.DECIMAL(16,5),allowNull: false,defaultValue: '0',comment: "IVA"  },
'tdo_ped': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE DOCUMENTO DE GASTOS ADUANALES"  },
'ndo_ped': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE DOCUMENTO DE GASTOS ADUANALES"  },
'cod_nom': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: "CODIGO DE PROVEEDOR (AGENCIA ADUANAL)"  },
'sco_ped': {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: '0',comment: "STATUS DE COSTEO"  },
'adu_adu': {type: DataTypes.CHAR(6),allowNull: false,defaultValue: ' ',comment: "ADUANA DE ENTRADA"  },
'pva_ped': {type: DataTypes.DECIMAL(16,5),allowNull: false,defaultValue: '0',comment: "PREVALIDACION"  },
'cnt_ped': {type: DataTypes.DECIMAL(16,5),allowNull: false,defaultValue: '0',comment: "CNT"  },
'vad_ped': {type: DataTypes.DECIMAL(16,5),allowNull: false,defaultValue: '0',comment: "VALOR ADUANA"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeped'});
};


/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comepct', {
'pct_pct': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE PARAMETRO GENERAL"  },
'ima_pct': {type: DataTypes.CHAR(28),allowNull: false,defaultValue: ' ',comment: "IMAGEN DE LA CUENTA"  },
'aci_pct': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "ACTIVO CIRCULANTE INICIAL"  },
'acf_pct': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "ACTIVO CIRCULANTE FINAL"  },
'afi_pct': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "ACTIVO FIJO INICIAL"  },
'aff_pct': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "ACTIVO FIJO FINAL"  },
'adi_pct': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "ACTIVO DIFERIDO INICIAL"  },
'adf_pct': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "ACTIVO DIFERIDO FINAL"  },
'pci_pct': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "PASIVO CIRCULANTE INCIAL"  },
'pcf_pct': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "PASIVO CIRCULANTE FINAL"  },
'pfi_pct': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "PASIVO FIJO INCIAL"  },
'pff_pct': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "PASIVO FIJO FINAL"  },
'pdi_pct': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "PASIVO DIFERIDO INICIAL"  },
'pdf_pct': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "PASIVO DIFERIDO FINAL"  },
'cai_pct': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "CAPITAL INICIAL"  },
'caf_pct': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "CAPITAL FINAL"  },
'rii_pct': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "RESULTADOS INGRESOS INCIAL"  },
'rif_pct': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "RESULTADOS INGRESOS FINAL"  },
'rei_pct': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "RESULTADOS EGRESOS INICIAL"  },
'ref_pct': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "RESULTADOS EGRESOS FINAL"  },
'ori_pct': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "ORDEN INICIAL"  },
'orf_pct': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "ORDEN FINAL"  },
'niv_pct': {type: DataTypes.CHAR(25),allowNull: false,defaultValue: ' ',comment: "NIVELES DE CUENTAS"  },
'fma_pct': {type: DataTypes.DATE,allowNull: false,comment: "FECHA  MINIMA DE AFECTACION DE SIAVCOM INTERNET 20000"  },
'tap_pct': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "APLICACION DEL PRESUPUESTO W=ADVERTENCIA A=ANUAL M=MENSUAL C=ACUMULADO D=DESACTIVO"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comepct'});
};


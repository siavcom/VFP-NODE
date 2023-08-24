/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comeapg', {
'apg_apg': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NO DE AUTORIZACION DE AMPLIACION DEL PRESUPUESTO DE GASTO"  },
'pga_pga': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: "PRESUPUESTO DE GASTO"  },
'tba_tba': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: "TRABAJADOR"  },
'sup_apg': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: "SUPERVISOR QUE AUTORIZA  LA AMPLIACION DE PRESUPUESTO (SUPERVISOR)"  },
'cla_isu': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "CLAVE DEL INSUMO"  },
'can_apg': {type: DataTypes.DECIMAL(18,5),allowNull: false,defaultValue: '0',comment: "CANTIDAD"  },
'med_apg': {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: '0',comment: "MEDIDA"  },
'fat_apg': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE AUTORIZACION DEL GASTO"  },
'fvi_apg': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE VIGENCIA DE LA AUTORIZACION"  },
'ob1_apg': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: "OBSERVACION 1"  },
'mot_apg': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "MOTIVO D=DEFECTUOSO; A=DAÑADO; M=MAL USO;"  },
'hdi_apg': {type: DataTypes.G,allowNull: false,comment: "HUELLA DIGITAL"  },
'ctr_apg': {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: '0',comment: "CON CARGO AL TRABAJADO 1=SI; 0=NO"  },
'tdo_tdo': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE DOCUMENTO"  },
'ndo_doc': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE DOCUMENTO"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeapg'});
};


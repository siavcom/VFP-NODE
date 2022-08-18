/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comecta', {
'cta_cta': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: "NUMERO DE CUENTA"  },
'nom_cta': {type: DataTypes.CHAR(150),allowNull: false,defaultValue: ' ',comment: "DESCRIPCION DE LA CUENTA"  },
'tip_cta': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "TIPO D=DEUDORA A=ACREDORA T=TITULO"  },
'per_per': {type: DataTypes.CHAR(6),allowNull: false,defaultValue: ' ',comment: "PERIODO CONTABLE (AAAAMM)"  },
'tcc_tcc': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "SUBCLASIFICACION DE LA CUENTA"  },
'acc_cta': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "AFECTA CENTRO DE COSTOS S=SI; N=NO"  },
'cas_csa': {type: DataTypes.CHAR(6),allowNull: false,defaultValue: ' ',comment: "CODIGO AGRUPADOR SEGUN SAT"  },
'nsa_cta': {type: DataTypes.CHAR(150),allowNull: false,defaultValue: ' ',comment: "NOMBRE DE LA CUENTA PARA SAT"  },
'val_dat': {type: DataTypes.CHAR(120),allowNull: false,defaultValue: ' ',comment: "validacion"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comecta'});
};


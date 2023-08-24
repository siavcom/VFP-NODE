/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comefim', {
'tdo_tdo': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE DOCUMENTO"  },
'num_fim': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE IMPRESION"  },
'ios_fim': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "I=IMPRESORA S=SPOOL"  },
'nom_fim': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "NOMBRE DE LA IMPRESORA O SPOOL DE IMPRESION"  },
'fim_fim': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: "FORMA DE IMPRESION"  },
'tpo_fim': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "TIPO DE PROCESO C=CONVERTIR; T=TRANSFORMAR; G=GENERAR"  },
'dge_fim': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "DOCUMENTO A GENERAR; CONVERTIR O TRANSFORMAR"  },
'cim_fim': {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: '0',comment: "CONTINUA LA IMPRESION  1=SI ;0=NO"  },
'mco_fim': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "MENSAJE DE CONTINUACION DE IMPRESION"  },
'ord_fim': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: "ORDEN DE IMPRESION"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comefim'});
};


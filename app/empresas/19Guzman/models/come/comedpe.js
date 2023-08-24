/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comedpe', {
'ped_ped': {type: DataTypes.CHAR(15),allowNull: false,defaultValue: ' ',comment: "PEDIMENTO"  },
'inc_dpe': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "1=INCREMENTABLE 0=NO INCREMENTABLE"  },
'tip_dpe': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "F=FLETE S=SEGUROS M=MANIOBRAS A=ADUANALES O=OTROS"  },
'tpr_dpe': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "PRORATEO DEL COSTO  BASE P=PRECIO V=VOLUMEN E=PESO"  },
'tdo_tdo': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE DOCUMENTO"  },
'ndo_doc': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE DOCUMENTO"  },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comedpe'});
};


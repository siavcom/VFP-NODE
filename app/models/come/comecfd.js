/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comecfd', {
'tdo_tdo': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE DOCUMENTO"  },
'cod_nom': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: "CODIGO DE CLIENTE"  },
'blo_cfd': {type: DataTypes.CHAR(128),allowNull: false,defaultValue: ' ',comment: "BLOQUE"  },
'cam_cfd': {type: DataTypes.CHAR(80),allowNull: false,defaultValue: ' ',comment: "CAMPO"  },
'var_cfd': {type: DataTypes.STRING(512),allowNull: false,comment: "VARIABLE DE SIAVCOM O VALOR"  },
'dec_cfd': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "DECIMALES QUE LLEVA EL CAMPO"  },
'cao_cfd': {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: '0',comment: "CADENA ORIGINAL 1=SI; 0=NO"  },
'ord_cfd': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "ORDEN DENTRO DEL COMPROBANTE"  },
'xml_cfd': {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: '0',comment: "ARCHIVO XML 1=SI ;0=NO"  },
'req_cfd': {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: '0',comment: "CAMPO REQUERIDO"  },
'cll_cfd': {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: '0',comment: "SE COLAPSA CON DATOS EN BLANCO"  },
'dbl_cfd': {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: '0',comment: "DATO NUMERICO"  },
'mee_cfd': {type: DataTypes.STRING(128),allowNull: false,comment: "MENSAJE DE ERROR"  },
'add_cfd': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE ADDENDA"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comecfd'});
};


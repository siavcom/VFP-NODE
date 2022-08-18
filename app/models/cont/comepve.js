/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comepve', {
'pve_pve': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "PROVEEDOR VARIOS"  },
'nom_pve': {type: DataTypes.CHAR(50),allowNull: false,defaultValue: ' ',comment: "NOMBRE DEL PROVEEDOR"  },
'rfc_pve': {type: DataTypes.CHAR(13),allowNull: false,defaultValue: ' ',comment: "RFC"  },
'tte_pve': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE TERCERO SEGUN SAT"  },
'top_pve': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE OPERACION SEGUN SAT"  },
'iva_pve': {type: DataTypes.DECIMAL(8,4),allowNull: false,defaultValue: '0',comment: "PORCENTAJE DE IMPUESTO"  },
'obs_pve': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "OBSERVACIONES"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
'tdc_pve': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE DOCUMENTO DE CARGO PARA CREAR DOCUMENTO A PARTIR DEL XML"  },
'cdc_pve': {type: DataTypes.CHAR(2),allowNull: false,defaultValue: ' ',comment: "CLASIFICACION DEL DOCUMENTO DE CARGO PARA CREAR DOCUMENTO A PARTIR DEL XML"  },
'tda_pve': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE DUCUMENTO DE ABONO PARA CREAR DOCUMENTO DE ABONO A PARTIR DEL XML"  },
'cda_pve': {type: DataTypes.CHAR(2),allowNull: false,defaultValue: ' ',comment: "CLASIFICACION DE DOCUMENTO DE ABONO PARA CREAR DOCUMENTO DE ABONO A PARTIR DEL XML"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comepve'});
};


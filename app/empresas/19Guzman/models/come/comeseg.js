/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comeseg', {
'gru_gru': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "GRUPO DE USUARIOS"  },
'tdo_tdo': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE DOCUMENTO"  },
'cla_seg': {type: DataTypes.CHAR(8),allowNull: false,defaultValue: ' ',comment: "CLAVE DE AUTORIZACION"  },
'per_seg': {type: DataTypes.CHAR(128),allowNull: false,defaultValue: ' ',comment: "PERMISOS POR CAMPOS"  },
'alm_tda': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "ALMACEN"  },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeseg'});
};


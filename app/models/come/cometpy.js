/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_cometpy', {
'tpy_tpy': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE PROYECTO"  },
'des_tpy': {type: DataTypes.CHAR(50),allowNull: false,defaultValue: ' ',comment: "DESCRIPCION DEL PROYECTO"  },
'cop_nom': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "Cliente o proveedor"  },
'con_tpy': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "CONCECUTIVO DE TIPO DE PROYECTO"  },
'fge_tpy': {type: DataTypes.CHAR(16),allowNull: false,defaultValue: ' ',comment: "FORMATO DE IMPRESION DEL GENERADOR"  },
'fco_tpy': {type: DataTypes.CHAR(16),allowNull: false,defaultValue: ' ',comment: "FORMATO DE IMPRESION DE LA COTIZACION"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometpy'});
};


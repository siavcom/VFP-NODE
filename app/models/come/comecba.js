/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comecba', {
'cba_cba': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "CUENTA BANCARIA"  },
'cop_nom': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "CLIENTE O PROVEEDOR"  },
'cod_nom': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: "CODIGO DEL CLIENTE O PROVEEDOR"  },
'ban_ban': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "BANCO"  },
'num_cba': {type: DataTypes.CHAR(50),allowNull: false,defaultValue: ' ',comment: "NUMERO DE CUENTA"  },
'cla_cba': {type: DataTypes.CHAR(18),allowNull: false,defaultValue: ' ',comment: "CLABE BANCARIA"  },
'mon_cba': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "MONEDA"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comecba'});
};


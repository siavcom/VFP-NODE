/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comecsa', {
'cas_csa': {type: DataTypes.CHAR(6),allowNull: false,defaultValue: ' ',comment: "CODIGO AGRUPADOR SEGUN SAT"  },
'des_csa': {type: DataTypes.CHAR(120),allowNull: false,defaultValue: ' ',comment: "DESCRIPCION DE LA CUENTA SEGUN EL SAT"  },
'ni1_csa': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NIVEL 1"  },
'ni2_csa': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NIVEL 2"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comecsa'});
};


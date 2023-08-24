/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comefam', {
'num_fam': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "NUMERO DE FAMILIA"  },
'cla_fam': {type: DataTypes.CHAR(5),allowNull: false,defaultValue: ' ',comment: "CLAVE"  },
'des_fam': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: "DESCRIPCION DE FAMILIA"  },
'esw_fam': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "ESTATUS WEB 1=SI"  },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comefam'});
};


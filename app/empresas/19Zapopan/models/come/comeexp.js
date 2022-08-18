/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comeexp', {
'cla_isu': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "CLAVE DEL INSUMO  A EXPLOTAR"  },
'cla_exp': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "CLAVE DEL PRODUCTO QUE COMPONE LA EXPLOSION"  },
'can_exp': {type: DataTypes.DECIMAL(12,5),allowNull: false,defaultValue: '0',comment: "CANTIDAD"  },
'med_exp': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "UNIDAD"  },
'ref_exp': {type: DataTypes.CHAR(15),allowNull: false,defaultValue: ' ',comment: "REFERENCIA"  },
'nod_exp': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: "NODO DE LA LINEA DONDE SE UBICA"  },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeexp'});
};


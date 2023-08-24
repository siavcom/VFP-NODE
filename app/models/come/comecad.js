/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comecad', {
'cop_nom': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "C=CLIENTE P=PROVEEDOR"  },
'cad_cad': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "CADENA COMERCIAL"  },
'nom_cad': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "NOMBRE DE LA CADENA"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comecad'});
};


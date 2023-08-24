/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comedxm', {
'nom_tab': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: "NOMBRE DE LA TABLA"  },
'par_dxm': {type: DataTypes.CHAR(15),allowNull: false,defaultValue: ' ',comment: "PARAMETRO"  },
'ord_dxm': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "ORDEN DE CAPTURA"  },
'var_dxm': {type: DataTypes.CHAR(25),allowNull: false,defaultValue: ' ',comment: "VARIABLE"  },
'des_dxm': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "DESCRIPCION"  },
'tip_dxm': {type: DataTypes.CHAR(2),allowNull: false,defaultValue: ' ',comment: "TIPO DE DATOS N=NUMERICO C=CARACTER F=FECHA"  },
'tam_dxm': {type: DataTypes.CHAR(6),allowNull: false,defaultValue: ' ',comment: "TAMAÑO DEL CAMPO"  },
'val_dxm': {type: DataTypes.STRING(4096),allowNull: false,comment: "VALOR"  },
'vca_dxm': {type: DataTypes.CHAR(256),allowNull: false,defaultValue: ' ',comment: "VALIDACION DEL CAMPO"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comedxm'});
};


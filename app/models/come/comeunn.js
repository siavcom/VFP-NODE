/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comeunn', {
'unn_unn': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "UNIDAD DE NEGOCIOS"  },
'des_unn': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "DESCRIPCION DE UNIDAD DE NEGOCIOS"  },
'suc_pge': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "SUCURSAL"  },
'dir_unn': {type: DataTypes.CHAR(100),allowNull: false,defaultValue: ' ',comment: "DIRECCION"  },
'ext_unn': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: "EXTERIOR"  },
'int_unn': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: "INTERIOR"  },
'col_unn': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: "COLONIA"  },
'pob_unn': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: "POBLACION"  },
'mun_unn': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: "MUNICIPIO"  },
'edo_edo': {type: DataTypes.CHAR(25),allowNull: false,defaultValue: ' ',comment: "ESTADO"  },
'cpo_unn': {type: DataTypes.CHAR(5),allowNull: false,defaultValue: ' ',comment: "CODIGO POSTAL"  },
'tel_unn': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: "TELEFONOS"  },
'obs_unn': {type: DataTypes.CHAR(1000),allowNull: false,defaultValue: ' ',comment: "OBSERVACION"  },
'pga_pga': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: "PRESUPUESTO DE GASTO"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeunn'});
};


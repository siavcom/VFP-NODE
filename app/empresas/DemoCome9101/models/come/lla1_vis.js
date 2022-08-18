/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_vis', {
'nom_tab': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "NOMBRE DE LA TABLA"  },
'nom_vis': {type: DataTypes.CHAR(15),allowNull: false,defaultValue: ' ',comment: "NOMBRE DE LA VISTA"  },
'fil_vis': {type: DataTypes.STRING(512),allowNull: false,comment: "FILVIS"  },
'des_vis': {type: DataTypes.CHAR(75),allowNull: false,defaultValue: ' ',comment: "DESCRIPCION DE LA VISTA"  },
'tab_vis': {type: DataTypes.STRING(512),allowNull: false,comment: "TABVIS"  },
'cam_vis': {type: DataTypes.STRING(512),allowNull: false,comment: "CAMVIS"  },
'sql_vis': {type: DataTypes.STRING(512),allowNull: false,comment: "SQLVIS"  },
'ord_vis': {type: DataTypes.CHAR(40),allowNull: false,defaultValue: ' ',comment: "ORDEN DE LA VISTA"  },
'tin_vis': {type: DataTypes.CHAR(15),allowNull: false,defaultValue: ' ',comment: "TINVIS"  },
'tbo_vis': {type: DataTypes.CHAR(15),allowNull: false,defaultValue: ' ',comment: "TBOVIS"  },
'tmo_vis': {type: DataTypes.CHAR(15),allowNull: false,defaultValue: ' ',comment: "TMOVIS"  },
'vre_vis': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "VISTA REMOTA EN LA BASE DE DATOS"  },
'vac_vis': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "VISTA de actualizacion"  },

'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "TIMESTAMP"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comevis'});
};


/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comerve', {
'rut_rut': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "RUTA"  },
'ven_ven': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "VENDEDOR"  },
'cam_cam': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "CAMIION"  },
'frt_rve': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE RUTA"  },
'sta_rve': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "STATUS 1=ACTIVO 0=DESACTIVO"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comerve'});
};


/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comegau', {
'gau_gau': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DEL GASTO"  },
'cam_cam': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE UNIDAD"  },
'fec_gau': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DEL MANTENIMIENTO"  },
'mnt_mnt': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: "CLAVE DEL MANTENIMIENTO"  },
'via_via': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE VIAJE"  },
'imp_gau': {type: DataTypes.DECIMAL(12,2),allowNull: false,defaultValue: '0',comment: "IMPORTE DEL GASTO"  },
'obs_gau': {type: DataTypes.CHAR(120),allowNull: false,defaultValue: ' ',comment: "OBSERVACIONES DEL GASTO"  },
'can_gau': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "KILOMETRAJE/HORAS EN LAS QUE SE EFECTUO EL MANTENIMIENTO"  },
'unn_unn': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "UNIDAD DE NEGOCIO QUE EFECTUO MANTENIMIENTO"  },
'per_mnt': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "PERIODICIDAD DEL MANTENIMIENTO"  },
'lit_gau': {type: DataTypes.DECIMAL(9,4),allowNull: false,defaultValue: '0',comment: "LITROS CAPTURADOS"  },
'rut_rut': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "	RUTA"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comegau'});
};


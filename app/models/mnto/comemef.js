/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comemef', {
'cam_cam': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE UNIDAD"  },
'fec_mef': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DEL MANTENIMIENTO"  },
'mnt_mnt': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: "CLAVE DEL MANTENIMIENTO"  },
'kms_mef': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "KILOMETRAJE DE LA UNIDAD"  },
'tip_mef': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "TIPO MANTENIMIENTO P=preventivo; C=correctivo"  },
'obs_mef': {type: DataTypes.STRING(256),allowNull: false,comment: "OBSERVACIONES DEL MECANICO REFERENTE AL MANTENIMIENTO"  },
'unn_unn': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "UNIDAD DE NEGOCIO EN DONDE SE EFECTUO"  },
'fac_mef': {type: DataTypes.CHAR(6),allowNull: false,defaultValue: ' ',comment: "FACTURA DEL PROVEEDOR DEL SERVICIO"  },
'hrs_mef': {type: DataTypes.DECIMAL(9,2),allowNull: false,defaultValue: '0',comment: "HORAS AL MANTENIMIENTO"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comemef'});
};


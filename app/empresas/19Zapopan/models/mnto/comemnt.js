/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comemnt', {
'mnt_mnt': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: "CLAVE DEL MANTENIMIENTO"  },
'des_mnt': {type: DataTypes.CHAR(128),allowNull: false,defaultValue: ' ',comment: "DESCRIPCION DEL MANTENIMIENTO"  },
'tiu_tiu': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "UNIDAD A LA QUE APLICA EL MANTENIMIENTO"  },
'rsp_mnt': {type: DataTypes.DECIMAL(5,3),allowNull: false,defaultValue: '0',comment: "RANGO SUPERIOR PERMITIDO"  },
'rip_mnt': {type: DataTypes.DECIMAL(5,3),allowNull: false,defaultValue: '0',comment: "RANGO INFERIOR PERMITIDO"  },
'per_mnt': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "PERIODICIDAD DEL MANTENIMIENTO  K=KILOMETRAJE H=HORAS; N=NO APLICA"  },
'can_mnt': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "CATIDAD DE KMS, MILLAS, HORAS ETC. QUE SE DEBE EFECTUAR ESTE MANTENIMOENTO"  },
'tie_mnt': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "TIEMPO ESPERADO DE INACTIVIDAD DEL VEHICULO"  },
'mar_mar': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "MARCA"  },
'mod_mod': {type: DataTypes.CHAR(32),allowNull: false,defaultValue: ' ',comment: "MODELO"  },
'cla_isu': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: "CLAVE DEL INSUMO"  },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comemnt'});
};


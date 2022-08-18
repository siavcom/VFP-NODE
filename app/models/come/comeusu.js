/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comeusu', {
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "NUMERO DE USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'log_usu': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "LOGIN DE USUARIO"  },
'nom_usu': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: "NOMBRE DEL USUARIO"  },
'pas_usu': {type: DataTypes.CHAR(40),allowNull: false,defaultValue: ' ',comment: "PASSWORD"  },
'gru_gru': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "GRUPO"  },
'alm_tda': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "ALMACEN DEFAULT"  },
'suc_pge': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "SUCURSAL"  },
'dpm_usu': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "DESPLIEGUE PRECIO MINIMO"  },
'pmv_usu': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "PRECIO MINIMO DE VENTA"  },
'alm_usu': {type: DataTypes.STRING(600),allowNull: false,comment: "ALMACENES PERMITIDOS POR USUARIO"  },
'foxy': {type: DataTypes.STRING(8000),allowNull: false,comment: "XML DE ARCHIVO SETTINGS DE FOXY"  },
'rol_usu': {type: DataTypes.CHAR(40),allowNull: false,defaultValue: ' ',comment: "ROLES DE SEGURIDAD QUE PERTENECE EN EL  SERVIDOR DE SQL"  },
'lic_usu': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE ACEPTACION DE LICENCIA DE USO"  },
'ven_ven': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "VENDEDOR"  },
'cop_nom': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "CLIENTE=C PROVEEDOR=P"  },
'cod_nom': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: "CODIGO DEL CLIENTE O PROVEEDOR"  },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeusu'});
};


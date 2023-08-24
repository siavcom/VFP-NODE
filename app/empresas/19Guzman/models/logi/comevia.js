/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comevia', {
'via_via': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE VIAJE"  },
'rut_rut': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "RUTA A SURTIR"  },
'fec_via': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DEL VIAJE"  },
'fll_via': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE LLEGADA  DEL CAMION PARA ENTEGAR LA CARGA (INCLUYE hh:mm:ss)"  },
'cod_nom': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: "CODIGO DEL PROVEEDOR (TRANSPORTISTA"  },
'cpo_via': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: "CARTA PORTE"  },
'ttr_via': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "TIPO DE VIAJE P =PROPIO;E=EXTERNO"  },
'noc_via': {type: DataTypes.CHAR(50),allowNull: false,defaultValue: ' ',comment: "NOMBRE DEL CONDUCTOR EN CASO DE SER EXTERNO EL VIAJE"  },
'lic_via': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: "LICENCIA DEL CONDUCTOR"  },
'tba_tba': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: "CODIGO DEL TRABAJADOR (CHOFER)"  },
'ffs_via': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE LA FIRMA AL SALIR (INCLUYE HH:MM:SS)"  },
'est_via': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "ESTATUS DEL VIAJE P=PROCESO DE CARGA ; T=Transito; D=DETENIDO; C=CANCELADO; F=Finalzado; R=Robo"  },
'oes_via': {type: DataTypes.CHAR(40),allowNull: false,defaultValue: ' ',comment: "OBSERVACIONES DE ESTATUS"  },
'ob1_via': {type: DataTypes.CHAR(40),allowNull: false,defaultValue: ' ',comment: "OBSERVCION 1 DEL VIAJE"  },
'ob2_via': {type: DataTypes.CHAR(40),allowNull: false,defaultValue: ' ',comment: "OBSERVACION 2 DEL VIAJE"  },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comevia'});
};


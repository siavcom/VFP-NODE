/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comevvi', {
'via_via': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE VIAJE"  },
'cam_cam': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE CAMION O VEHICULO"  },
'pla_vvi': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "NUMERO DE PLACA"  },
'bol_vvi': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "BOLETA DE PESADA DE ENTRADA"  },
'pen_vvi': {type: DataTypes.DECIMAL(16,5),allowNull: false,defaultValue: '0',comment: "PESO DE ENTRADA"  },
'bos_vvi': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "BOLETA DE PESADA AL SALIR"  },
'psa_vvi': {type: DataTypes.DECIMAL(16,5),allowNull: false,defaultValue: '0',comment: "PESO DE SALIDA"  },
'csa_vvi': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "CONTADOR DEL ODOMETRO A LA SALIDA"  },
'cll_vvi': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "CONTADOR DEL ODOMETRO A LA LLEGADA"  },
'sel_vvi': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: "SELLOS SEPARADOS CON COMAS"  },
'fsa_vvi': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE SALIDA AL VIAJE"  },
'est_vvi': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "ESTATUS T=TRANSITO;  L=LIBRE"  },
'fll_vvi': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE LLEGADA DEL VIAJE"  },
'car_vvi': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: "CARGO EL VEHICULO"  },
'caj_vvi': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "CAJAS CONTADAS"  },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comevvi'});
};


/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_cometif', {
'fol_tif': {type: DataTypes.DECIMAL(6,0),allowNull: false,defaultValue: '0',comment: "FOLIO DE TOMA DE INVENTARIO FISICO"  },
'nmo_tif': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE MOVIMIENTO DENTRO DEL FOLIIO"  },
'alm_tda': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "ALMACEN"  },
'fec_tif': {type: DataTypes.DATE,allowNull: false,comment: "FECHA"  },
'cla_isu': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "CLAVE DEL INSUMO"  },
'ped_tif': {type: DataTypes.CHAR(15),allowNull: false,defaultValue: ' ',comment: "PEDIMENTO"  },
'ser_tif': {type: DataTypes.CHAR(17),allowNull: false,defaultValue: ' ',comment: "SERIE O LOTE"  },
'med_tif': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "UNIDAD"  },
'pco_tif': {type: DataTypes.DECIMAL(12,5),allowNull: false,defaultValue: '0',comment: "CANTIDAD PRIMER CONTEO"  },
'sco_tif': {type: DataTypes.DECIMAL(12,5),allowNull: false,defaultValue: '0',comment: "SEGUNDO  CONTEO"  },
'tco_tif': {type: DataTypes.DECIMAL(12,5),allowNull: false,defaultValue: '0',comment: "TERCER CONTEO Y DEFINITIVO"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometif'});
};


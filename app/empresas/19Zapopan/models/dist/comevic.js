/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comevic', {
'cod_nom': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: "CODIGO DEL CLIENTE"  },
'rut_rut': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "RUTA"  },
'fec_mov': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE MOVIMIENTO ( FECHA DE VISITA)"  },
'hll_vis': {type: DataTypes.CHAR(8),allowNull: false,defaultValue: ' ',comment: "HORA DE LLEGADA"  },
'hsa_vis': {type: DataTypes.CHAR(8),allowNull: false,defaultValue: ' ',comment: "HORA DE SALIDA"  },
'est_vis': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "ESTATUS P=PROCESADO; N=NO PROCESADO; N=NO VENTA; A=AUSENTE"  },
'nve_vis': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "NOTA DE VENTA ENTREAGADA"  },
'rem_vis': {type: DataTypes.CHAR(14),allowNull: false,defaultValue: ' ',comment: "REMISION DE ENTREGA DE MERCANCIA DEL CLIENTE"  },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comevic'});
};


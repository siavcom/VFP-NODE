/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comebul', {
'tdo_tdo': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE DOCUMENTO"  },
'ndo_doc': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE DOCUMENTO"  },
'bul_bul': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "NUMERO DE BULTO"  },
'cla_isu': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "CLAVE DEL INSUMO"  },
'can_bul': {type: DataTypes.DECIMAL(16,5),allowNull: false,defaultValue: '0',comment: "CANTIDAD DEL MOVIMIENTO"  },
'med_bul': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "UNIDAD"  },
'pos_pos': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "POSICION DENTRO DEL ALMACEN"  },
'est_bul': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "ESTATUS DEL BULTO  A=ACTIVO D=DESACTIVO I=INVENTARIO A LA FECHA"  },
'alm_tda': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "ALMACEN DONDE ESTA LA POSICION"  },
'det_bul': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NO DE DETALLE"  },
'fea_bul': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE ENTREGA O UBICACION DE LA MERCANCIA"  },
'ver_bul': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "1=VERIFICADO 0=NO VERIFICADO"  },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comebul'});
};


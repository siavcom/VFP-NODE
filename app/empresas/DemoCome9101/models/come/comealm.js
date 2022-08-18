/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comealm', {
'alm_tda': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "CODIGO DE ALMACEN"  },
'cla_isu': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "CLAVE DEL INSUMO"  },
'exe_alm': {type: DataTypes.DECIMAL(14,6),allowNull: false,defaultValue: '0',comment: "EXISTENCIA ACUMULADA ANTES ACTUALIZACION"  },
'med_alm': {type: DataTypes.CHAR(5),allowNull: false,defaultValue: ' ',comment: "MEDIDA; SI TIENE CONTROL POR MEDIDAS"  },
'pre_alm': {type: DataTypes.DECIMAL(7,0),allowNull: false,defaultValue: '0',comment: "PUNTO DE REORDEN"  },
'min_alm': {type: DataTypes.DECIMAL(7,0),allowNull: false,defaultValue: '0',comment: "MINIMO"  },
'max_alm': {type: DataTypes.DECIMAL(7,0),allowNull: false,defaultValue: '0',comment: "MAXIMO"  },
'cpe_alm': {type: DataTypes.DECIMAL(7,0),allowNull: false,defaultValue: '0',comment: "CANTIDAD A PEDIR"  },
'exp_alm': {type: DataTypes.DECIMAL(14,4),allowNull: false,defaultValue: '0',comment: "EXISTENCIA DEL PERIODO"  },
'fex_alm': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE LA EXISTENCIA"  },
'ubi_alm': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "UBICACION DEL PRODUCTO DENTRO DEL ALMACE"  },
'est_alm': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "ESTATUS A=ACTIVO B=BLOQUEADO P=PROMOCION M=MANTENIMIENTO D=DESACTIVO"  },
'dst_alm': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "DESCRIPCION DEL ESTADO"  },
'tci_isu': {type: DataTypes.CHAR(2),allowNull: false,defaultValue: ' ',comment: "CLASIFICACION DE TIPO DE INVENTARIO"  },
'dac_alm': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "DIAS A CUBRIR"  },
'ins_alm': {type: DataTypes.DECIMAL(7,2),allowNull: false,defaultValue: '0',comment: "INVENTARIO DE SEGURIDAD"  },
'cci_alm': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "CONTEOS CICLICOS"  },
'fic_alm': {type: DataTypes.DECIMAL(10,5),allowNull: false,defaultValue: '0',comment: "FACTOR INCREMENTO DE COSTO"  },
'fiv_alm': {type: DataTypes.DECIMAL(10,5),allowNull: false,defaultValue: '0',comment: "FACTOR INCREMENTO EN VENTAS"  },
'oca_alm': {type: DataTypes.CHAR(4),allowNull: false,defaultValue: ' ',comment: "ORDEN EN LA  CARGA DEL CAMION"  },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comealm'});
};


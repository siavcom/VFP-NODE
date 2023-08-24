/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comepos', {
'pos_pos': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "POSICION DENTRO DEL ALMACEN"  },
'alm_tda': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "ALMACEN"  },
'des_pos': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "DESCRIPCION DE LA POSICION"  },
'tam_pos': {type: DataTypes.DECIMAL(16,5),allowNull: false,defaultValue: '0',comment: "TAMAÑO DE LA POSICION"  },
'med_pos': {type: DataTypes.CHAR(2),allowNull: false,defaultValue: ' ',comment: "P2=PIES CUADRADOS P3=PIES CUBICOS M2=METROS CUADRADOS M3=METROS CUBICOS KG=KILOGRAMOS"  },
'est_pos': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "ESTATUS DE LA POSICION A=ACTIVO B=BLOQUEADA N=NO RELLENAR S=NO SURTIR"  },
'obs_pos': {type: DataTypes.CHAR(50),allowNull: false,defaultValue: ' ',comment: "OBSERVACION"  },
'ppd_pos': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "PERMITE PRODUCTOS DIFERENTES S=SI N=NO"  },
'cla_isu': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "CLAVE DEL INSUMO"  },
'min_pos': {type: DataTypes.DECIMAL(16,5),allowNull: false,defaultValue: '0',comment: "CANTIDAD MINIMA QUE DEBE TENER LA POSICION"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comepos'});
};


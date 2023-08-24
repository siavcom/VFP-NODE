/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comeimp', {
'tar_imp': {type: DataTypes.CHAR(2),allowNull: false,defaultValue: ' ',comment: "TARIFA"  },
'imp_imp': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE IMPUESTO"  },
'dim_imp': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "DESCRIPCION DEL IMPUESTO"  },
'afe_imp': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "F=FIJO V=Volumen P=% variable"  },
'poi_imp': {type: DataTypes.DECIMAL(10,5),allowNull: false,defaultValue: '0',comment: "PORCENTAJE O VALOR DEL IMPUESTO"  },
'ctv_imp': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: "CUENTA EN CONTABILIDAD VENTAS"  },
'ctc_imp': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: "CUENTA DE CONTABILIDAD COMPRAS"  },
'acu_imp': {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: '0',comment: "IMPUESTO ACUMULATIVO"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeimp'});
};


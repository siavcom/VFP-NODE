/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comecin', {
'fco_cin': {type: DataTypes.DATE,allowNull: false,comment: "FECHA  DE CORTE DE INVENTARIO"  },
'alm_tda': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "ALMACEN"  },
'cla_isu': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "CLAVE DE INSUMOS"  },
'exi_cin': {type: DataTypes.DECIMAL(14,5),allowNull: false,defaultValue: '0',comment: "EXISTENCIA EN UNIDAD PRINCIPAL"  },
'sta_cin': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "ESTATUS DEL  CORTE C=CERRADO P=ABIERTO"  },
'usu_cin': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "USUARIO QUE EJECUTO EL PERMISO PARA MOVER EL CORTE"  },
'fau_cin': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE AUTORIZACION PARA MOVER EL CORTE"  },
'pve_cin': {type: DataTypes.DECIMAL(16,5),allowNull: false,defaultValue: '0',comment: "PRECIO DE VENTA DEL DIA"  },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comecin'});
};


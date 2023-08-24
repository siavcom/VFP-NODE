/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_cometca', {
'cla_isu': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "CLAVE DEL INSUMO"  },
'cop_nom': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "TIPO C=CLIENTES; P=PROVEEDORES"  },
'cod_nom': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: "CODIGO DEL CLIENTE O PROVEEDOR"  },
'cad_cad': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "CADENA"  },
'cla_tca': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "CLAVE ALTERNA DEL PRODUCTO"  },
'dea_tca': {type: DataTypes.CHAR(250),allowNull: false,defaultValue: ' ',comment: "DESCRIPCION ALTERNA DEL PRODUCTO"  },
'ppa_tca': {type: DataTypes.DECIMAL(16,6),allowNull: false,defaultValue: '0',comment: "PRECIO PACTADO"  },
'mop_tca': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "MONEDA PACTADA"  },
'fvi_tca': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE VIGENCIA"  },
'tip_tdn': {type: DataTypes.CHAR(2),allowNull: false,defaultValue: ' ',comment: "TIPO DE CLIENTE O PROVEEDOR"  },
'fin_tca': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE INICIO"  },
'cof_tca': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "CANTIDAD DE PRODUCTOS OFERTADA"  },
'cve_tca': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "CANTIDAD VENDIDA"  },
'fti_con': {type: DataTypes.CHAR(6),allowNull: false,defaultValue: ' ',comment: "FORMATO DE LA TIENDA"  },
'un1_tca': {type: DataTypes.CHAR(25),allowNull: false,defaultValue: ' ',comment: "DESCRIPCION DE UNIDAD UNO"  },
'un2_tca': {type: DataTypes.CHAR(25),allowNull: false,defaultValue: ' ',comment: "DESCRIPCION DE UNIDAD DOS"  },
'un3_tca': {type: DataTypes.CHAR(25),allowNull: false,defaultValue: ' ',comment: "DESCRIPCION DE UNIDAD TRES"  },
'est_tca': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "ESTATUS DE LA CLAVE B='BLOQUEDA'  A='ACTIVO'"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometca'});
};


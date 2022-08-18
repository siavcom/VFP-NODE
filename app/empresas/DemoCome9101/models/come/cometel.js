/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_cometel', {
'cod_nom': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: "CODIGO DEL CLIENTE O PROVEEDOR"  },
'cop_nom': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "CLIENTE O PROVEEDOR"  },
'suc_pge': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "SUCURSAL"  },
'ndo_doc': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE DOCUMENTO QUE GENERA EL TELEG."  },
'tdo_tdo': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE DOCUMENTO QUE GENERA EL TELEG."  },
'ntl_tel': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "NUMERO DE TELEGRAMA ENVIADO"  },
'sta_tel': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "ESTADO ENTREGADO; NO ENTREGRADO."  },
'ipr_tel': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "IMPRESO;    NO IMPRESO"  },
'sal_tel': {type: DataTypes.DECIMAL(13,5),allowNull: false,defaultValue: '0',comment: "SALDO DEL DOCUMENTO"  },
'fim_tel': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE IMPRESION"  },
'him_tel': {type: DataTypes.CHAR(8),allowNull: false,defaultValue: ' ',comment: "HORA DE IMPRESION"  },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO QUE REALIZO LA MODIFICACION"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometel'});
};


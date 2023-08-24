/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comepag', {
'suc_pge': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "SUCURSAL"  },
'tdo_tdo': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE DOCUMENTO"  },
'ndo_doc': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE DOCUMENTO"  },
'tia_pag': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE DOCUMENTO A PAGAR"  },
'nua_pag': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE DOCUMENTO A PAGAR"  },
'mon_pag': {type: DataTypes.DECIMAL(13,5),allowNull: false,defaultValue: '0',comment: "MONTO"  },
'ref_pag': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: "REFERENCIA DEL PAGO"  },
'tip_pag': {type: DataTypes.CHAR(2),allowNull: false,defaultValue: ' ',comment: "TIPO DE PAGO"  },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comepag'});
};


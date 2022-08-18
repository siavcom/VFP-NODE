/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comecpa', {
'tdo_tdo': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE DOCUMENTO"  },
'ndo_doc': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE DOCUMENTO"  },
'tia_pag': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE DOCUMENTO DEL DOCUMENTO QUE SE ESTA PAGANDO"  },
'nua_pag': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE DOCUMENTO QUE SE ESTA PAGANDO"  },
'num_pag': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE PAGO O PARCIALIDAD PAGADA"  },
'sal_doc': {type: DataTypes.DECIMAL(15,5),allowNull: false,defaultValue: '0',comment: "SALDO DEL DOCUMENTO ANTES DEL PAGO"  },
'uuid': {type: DataTypes.CHAR(36),allowNull: false,defaultValue: ' ',comment: "UUID DE DONDE QUEDO TIMBRADA LA PARCIALIDAD"  },
'est_cpa': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "ESTATUS DEL PROCESO P=PROCESO DE TIMBRADO T=TIMBRADO"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comecpa'});
};


/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comepsd', {
'tdo_tdo': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE DOCUMENTO"  },
'ord_psd': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "ORDEN DE CAPTURA"  },
'cla_isu': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "CLAVE DEL INSUMO"  },
'can_mov': {type: DataTypes.DECIMAL(12,4),allowNull: false,defaultValue: '0',comment: "CANTIDAD"  },
'med_mov': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "MEDIDA"  },
'pve_mov': {type: DataTypes.DECIMAL(12,4),allowNull: false,defaultValue: '0',comment: "PRECIO"  },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comepsd'});
};


/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_cometar', {
'arc_tar': {type: DataTypes.CHAR(8),allowNull: false,defaultValue: ' ',comment: "CLAVE ARANCEL"  },
'pai_tar': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "PAIS DEL ARANCEL"  },
'des_tar': {type: DataTypes.CHAR(45),allowNull: false,defaultValue: ' ',comment: "DESCRIPCION DEL ARANCEL"  },
'adv_tar': {type: DataTypes.DECIMAL(9,4),allowNull: false,defaultValue: '0',comment: "ADALOREM O ARANCEL"  },
'cuo_tar': {type: DataTypes.DECIMAL(9,4),allowNull: false,defaultValue: '0',comment: "CUOTA COMPENSATORIA"  },
'cpu_tar': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "CUOTA (P=PORCENTAJE U=UNIDAD)"  },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometar'});
};


/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_tab', {
'nom_tab': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "NOMBRE DE LA TABLA"  },
'des_tab': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: "DESCRIPCION DE LA TABLA"  },
'vis_tab': {type: DataTypes.CHAR(120),allowNull: false,defaultValue: ' ',comment: "VISTAB"  },
'man_tab': {type: DataTypes.CHAR(120),allowNull: false,defaultValue: ' ',comment: "MANTAB"  },
'tri_msq': {type: DataTypes.TEXT,allowNull: true,comment: "TRIMMSQ"  },
'tri_pos': {type: DataTypes.TEXT,allowNull: true,comment: "TRIPOS"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "TIMESTAMP"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometab'});
};


/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comesat', {
'cam_sat': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "CAMPO DE BUSQUEDA"  },
'cla_sat': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "CLAVE DEL SAT"  },
'des_sat': {type: DataTypes.STRING(100),allowNull: false,comment: "DESCRIPCION DEL SAT"  },
'ob1_sat': {type: DataTypes.STRING(250),allowNull: false,comment: "OBSERVACION 1"  },
'ob2_sat': {type: DataTypes.STRING(40),allowNull: false,comment: "OBSERVACION 2"  },
'nom_sat': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "NOMBRE DEL CATALOGO SAT"  },
'par_sat': {type: DataTypes.CHAR(2),allowNull: false,defaultValue: ' ',comment: "PARAMETRO"  },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comesat'});
};


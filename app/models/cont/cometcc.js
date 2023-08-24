/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_cometcc', {
'tcc_tcc': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TABLA DE CLASIFICACION DE CUENTAS"  },
'des_tcc': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "DESCRIPCION"  },
'dio_tcc': {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: '0',comment: "APLICA DIOT  1=SI; 0=NO"  },
'iet_tcc': {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: '0',comment: "APLICA IETU 1=SI; 0=NO"  },
'isr_tcc': {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: '0',comment: "APLICA ISR 1=SI; 0=NO"  },
'acf_tcc': {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: '0',comment: "APLICA ACTIVO FIJOS 1=SI; 0=NO"  },
'ap1_tcc': {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: '0',comment: "APLICACION 1  1=SI; 0=NO"  },
'ap2_tcc': {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: '0',comment: "APLICACION 2  1=SI; 0=NO"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometcc'});
};


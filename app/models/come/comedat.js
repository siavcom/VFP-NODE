/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comedat', {
'sis_dat': {type: DataTypes.CHAR(8),allowNull: false,defaultValue: ' ',comment: "SISTEMA"  },
'arc_dat': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: "ARCHIVO Y NUMERO DE CAMPO"  },
'des_dat': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: "VARIABLE"  },
'cam_dat': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: "CAMPO"  },
'tip_dat': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "TIPO DE DATO"  },
'lon_dat': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LONGITUD TOTAL DE LA VARIABLE"  },
'dec_dat': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "DECIMALES EN UN DATO NUMERICO"  },
'ref_dat': {type: DataTypes.CHAR(256),allowNull: false,defaultValue: ' ',comment: "DESCRIPCION DEL CAMPO"  },
'val_dat': {type: DataTypes.CHAR(256),allowNull: false,defaultValue: ' ',comment: "VALOR INICIAL CUANDO SE INSERTA UN REGISTRO EN UNA VISTA DE VFP"  },
'vue_dat': {type: DataTypes.CHAR(254),allowNull: false,defaultValue: ' ',comment: "VALOR INICIAL CUANDO SE INSERTA UN REGISTRO EN UNA VISTA EN VUE"  },
'cas_dat': {type: DataTypes.BOOLEAN,allowNull: false,comment: "CASDAT"  },
'sou_dat': {type: DataTypes.STRING(2048),allowNull: false,comment: "VALORES PARA LLENADO DE COMBOS"  },
'nom_tab': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "NOMBRE DE LA TABLA"  },
'con_dat': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO CONSECUTIVO"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "TIMESTAMP"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comedat'});
};


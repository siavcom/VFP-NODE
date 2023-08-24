/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comelen', {
'len_len': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "LENGUAJE"  },
'prg_prg': {type: DataTypes.CHAR(32),allowNull: false,defaultValue: ' ',comment: "PROGRAMA"  },
'obj_len': {type: DataTypes.CHAR(128),allowNull: false,defaultValue: ' ',comment: "OBJETO A TRADUCIR"  },
'tip_len': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE PROGRAMA EJ C=CLIENTES,P=PROVEEDORES"  },
'num_len': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE MENSAJE"  },
'cba_len': {type: DataTypes.CHAR(32),allowNull: false,defaultValue: ' ',comment: "CLASE BASE"  },
'cap_len': {type: DataTypes.STRING(128),allowNull: false,comment: "VALOR DEL CAPTION"  },
'txt_len': {type: DataTypes.STRING(128),allowNull: false,comment: "VALOR DEL TEXTO"  },
'val_len': {type: DataTypes.STRING(256),allowNull: false,comment: "VALOR A TRADUCIR"  },
'ttt_len': {type: DataTypes.STRING(128),allowNull: false,comment: "VALOR DEL TOOLTIPTEXT"  },
'rso_len': {type: DataTypes.STRING(128),allowNull: false,comment: "VALOR ROWSOURCE"  },
'rmo_len': {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: '0',comment: "REMOVEOBJECT"  },
'ima_len': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "INTPUTMASK"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "TIMESTAMP"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comelen'});
};


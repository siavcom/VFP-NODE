/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comelog', {
'arc_log': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "ARCHIVO ACTUALIZADO"  },
'fec_log': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE ACTUALIZACION"  },
'key_log': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "KEY_PRI QUE AFECTA LA MODIFICACION ;INCERCION O BORRADO"  },
'tip_log': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "TIPO DE LOG I=INCERCION; M=MODIFICACION; B=BORRADO"  },
'usu_nom': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "USUARIO QUE PROVOCO EL LOG"  },
'sta_log': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "STATUS"  },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comelog'});
};


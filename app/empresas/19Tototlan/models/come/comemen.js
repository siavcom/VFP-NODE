/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comemen', {
'cop_nom': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "TIPO C=CLIENTE P=PROVEEDOR"  },
'num_men': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO  DE MENSAJE"  },
'cod_nom': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: "CODIGO DEL CLIENTE O PROVEEDOR"  },
'men_men': {type: DataTypes.CHAR(120),allowNull: false,defaultValue: ' ',comment: "MENSAJE"  },
'fec_men': {type: DataTypes.DATE,allowNull: false,comment: "FECHA EN LA QUE SE CAPTURO EL MENSAJE"  },
'sta_men': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "ESTADO EN EL QUE SE ENCUENTRA ALERTA O PERMANENTE"  },
'con_con': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "CONSIGNATARIO"  },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "NUMERO DE USUARIO QUE REALIZO LA ULTIMA MODIFICACI"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comemen'});
};


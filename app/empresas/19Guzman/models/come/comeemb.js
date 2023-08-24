/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comeemb', {
'tdo_tdo': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE DOCUMENTO"  },
'ndo_doc': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE DOCUMENTO"  },
'emb_emb': {type: DataTypes.CHAR(40),allowNull: false,defaultValue: ' ',comment: "EMBARCADO POR"  },
'cnr_emb': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "CONTRARECIBO"  },
'fcn_emb': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE RECEPCION DE CONTRARECIBO"  },
'fpc_emb': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE PAGO SEGUN CONTRARECIBO"  },
'gui_emb': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "GUIA"  },
'fen_emb': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE ENVIO"  },
'apa_emb': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: "ARMO EL PAQUETE"  },
'tem_emb': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "TIPO DE EMPAQUE"  },
'fem_emb': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE EMPAQUE"  },
'cbu_emb': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "CANTIDAD DE BULTOS"  },
'fee_emb': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE ENTREGA DE MERCANCIA"  },
'ob1_emb': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: "OBSERVACION 1"  },
'ob2_emb': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "OBSERVACION 2"  },
'est_emb': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "ESTATUS DEL EMBARQUE C=COTEJADO; E=ENVIADO; R=RECIBIDO; S=SUSPENDIDO ; P=PROCESO"  },
'fre_emb': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE RECEPCION DE MERCANCIA"  },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeemb'});
};


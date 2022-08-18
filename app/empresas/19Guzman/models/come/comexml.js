/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comexml', {
'tdo_tdo': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE DOCUMENTO"  },
'ndo_doc': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE DOCUMENTO"  },
'cfd_xml': {type: DataTypes.TEXT,allowNull: true,comment: "COMPROBANTE FISCAL DIGITAL"  },
'sta_doc': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "STATUS DEL XML"  },
'fen_xml': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE ENVIO"  },
'ema_xml': {type: DataTypes.CHAR(250),allowNull: false,defaultValue: ' ',comment: "EMAIL DE ENVIO"  },
'uuid': {type: DataTypes.CHAR(36),allowNull: false,defaultValue: ' ',comment: "FOLIO UUID DEL SAT PARA CFDI"  },
'emt_xml': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "EMPRESA TIMBRADORA"  },
'fca_xml': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE CANCELACION"  },
'arc_xml': {type: DataTypes.TEXT,allowNull: true,comment: "ACUSE DE RECIBO DE CANCELACION"  },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comexml'});
};


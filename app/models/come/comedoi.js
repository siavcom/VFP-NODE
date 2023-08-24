/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comedoi', {
'cla_isu': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: "CLAVE DEL INSUMO"  },
'con_doi': {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: '0',comment: "CONSECUTIVO DEL DOCUMENTO POR CLAVE"  },
'nom_doi': {type: DataTypes.CHAR(64),allowNull: false,defaultValue: ' ',comment: "NOMBRE DEL DOCUMENTO GUARDADO"  },
'arc_doi': {type: DataTypes.TEXT,allowNull: false,comment: "ARCHIVO DEL DOCUMENTO BASE 64"  },
'tip_doi': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "TIPO DE DOCUMENTO F=FOTOGRAFIA, D=DESCRIPCION, M=MANUAL, C=CARACTERISTICAS O=OTRO"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "TIMESTAMP"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comedoi'});
};


/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comemos', {
'suc_pge': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "SUCURSAL"  },
'tdo_tdo': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE DOCUMENTO"  },
'ndo_doc': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "NUMERO DE DOCUMENTO"  },
'nom_mos': {type: DataTypes.CHAR(120),allowNull: false,defaultValue: ' ',comment: "NOMBRE"  },
'rfc_mos': {type: DataTypes.CHAR(13),allowNull: false,defaultValue: ' ',comment: "R.F.C."  },
'dir_mos': {type: DataTypes.CHAR(120),allowNull: false,defaultValue: ' ',comment: "DIRECCION"  },
'col_mos': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: "COLONIA"  },
'ext_mos': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: "NUMERO EXTERIOR"  },
'int_mos': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: "NUMERO INTERIOR"  },
'pob_mos': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: "POBLACION"  },
'cpo_mos': {type: DataTypes.CHAR(5),allowNull: false,defaultValue: ' ',comment: "CODIGO POSTAL"  },
'te1_mos': {type: DataTypes.CHAR(15),allowNull: false,defaultValue: ' ',comment: "TELEFONO"  },
'edo_edo': {type: DataTypes.CHAR(25),allowNull: false,defaultValue: ' ',comment: "ESTADO (ENTIDAD FEDERATIVA)"  },
'pai_mos': {type: DataTypes.CHAR(50),allowNull: false,defaultValue: ' ',comment: "PAIS"  },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comemos'});
};


/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comeven', {
'ven_ven': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "No. DE VENDEDOR"  },
'nom_ven': {type: DataTypes.CHAR(45),allowNull: false,defaultValue: ' ',comment: "NOMBRE DEL VENDEDOR"  },
'rfc_ven': {type: DataTypes.CHAR(13),allowNull: false,defaultValue: ' ',comment: "R.F.C."  },
'dir_ven': {type: DataTypes.CHAR(35),allowNull: false,defaultValue: ' ',comment: "DIRECCION"  },
'col_ven': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: "COLONIA"  },
'pob_ven': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: "POBLACION"  },
'cpo_ven': {type: DataTypes.CHAR(5),allowNull: false,defaultValue: ' ',comment: "CODIGO POSTAL"  },
'tel_ven': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: "TELEFONO"  },
'zon_ven': {type: DataTypes.CHAR(6),allowNull: false,defaultValue: ' ',comment: "ZONA O RUTA"  },
'pco_ven': {type: DataTypes.DECIMAL(5,2),allowNull: false,defaultValue: '0',comment: "% DE COMISION"  },
'mai_ven': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: "MAIL DEL VENDEDOR"  },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeven'});
};


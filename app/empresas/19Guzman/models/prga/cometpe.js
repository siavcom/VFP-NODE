/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_cometpe', {
'pga_pga': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: "PRESUPUESTO DE GASTO"  },
'des_tpe': {type: DataTypes.CHAR(90),allowNull: false,defaultValue: ' ',comment: "DESCRIPCION DEL PRESUPUESTO"  },
'tba_tba': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: "TRABAJADOR (SUPERVISOR QUE AUTORIZA ENTREGA DE MATERIAL)"  },
'mon_pga': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: "MONEDA"  },
'can_tpe': {type: DataTypes.DECIMAL(18,2),allowNull: false,defaultValue: '0',comment: "CANTIDAD O MONTO PRESUPUESTADAO"  },
'suc_pge': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "Sucursal"  },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA DE ULTIMA ACTUALIZACION"  },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometpe'});
};


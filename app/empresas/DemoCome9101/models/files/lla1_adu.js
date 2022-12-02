module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_adu', {
'adu_adu': {type: DataTypes.CHAR(6),allowNull: false,defaultValue: ' ',comment: 'ADUANA  DE MEXICO' },
'nom_adu': {type: DataTypes.CHAR(70),allowNull: false,defaultValue: ' ',comment: 'NOMBRE DE LA ADUANA' },
'cve_sat': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'CLAVE SEGUN SAT' },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: 'FECHA DE LA ULTIMA ACTUALIZACION' },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS', primaryKey: true },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: 'USUARIO' },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: 'TIEMPO DE CREACION' },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'USUARIO CREADOR' },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: 'TIMESTAMP' },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeadu'});
};

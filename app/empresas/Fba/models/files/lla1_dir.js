module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_dir', {
'rfc_dir': {type: DataTypes.CHAR(13),allowNull: false,defaultValue: ' ',comment: 'RFC' },
'num_dir': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'NUMERO DE DIRECCION' },
'nom_dir': {type: DataTypes.CHAR(254),allowNull: false,defaultValue: ' ',comment: 'NOMBRE' },
'cal_dir': {type: DataTypes.CHAR(120),allowNull: false,defaultValue: ' ',comment: 'CALLE' },
'ext_dir': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: 'NUMERO EXTERIOR' },
'int_dir': {type: DataTypes.CHAR(120),allowNull: false,defaultValue: ' ',comment: 'INTERIOR' },
'cpo_dir': {type: DataTypes.CHAR(6),allowNull: false,defaultValue: ' ',comment: 'CODIGO POSTAL' },
'col_dir': {type: DataTypes.CHAR(120),allowNull: false,defaultValue: ' ',comment: 'COLONIA' },
'pai_dir': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: 'PAIS' },
'gln_dir': {type: DataTypes.CHAR(14),allowNull: false,defaultValue: ' ',comment: 'CODIDO GLN' },
'not_dir': {type: DataTypes.STRING(512),allowNull: false,comment: 'NOTA DE LA DIRECCION' },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: 'USUARIO' },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: 'FECHA ULTIMA ACTUALIZACION' },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'USUARIO' },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: 'FECHA ULTIMA ACTUALIZACION' },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS', primaryKey: true },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: 'TIMESTAMP' },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comedir'});
};

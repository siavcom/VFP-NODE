module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_fis', {
'cla_isu': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: 'CLAVE DEL INSUMO' },
'fot_isu': {type: DataTypes.BLOB,allowNull: false,comment: 'FOTO DEL INSUMO' },
'dir_url': {type: DataTypes.CHAR(50),allowNull: false,defaultValue: ' ',comment: 'URL' },
'tip_fis': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'TIPO DE FOTOGRAFIA JPG;BMP;TIF ' },
'usu_usu': {field: 'USU_USU',type: DataTypes.SMALLINT,comment: 'USUARIO' },
'usu_cre': {field: 'USU_CRE',type: DataTypes.SMALLINT,comment: 'USUARIO CREADOR' },
'tie_uac': {field: 'TIE_UAC',type: DataTypes.DATE,comment: 'FECHA DE LA ULTIMA ACTUALIZACION' },
'tie_cre': {field: 'TIE_CRE',type: DataTypes.DATE,comment: 'TIEMPO DE CREACION' },
'timestamp': {type: DataTypes.BLOB('tiny'),allowNull: true,comment: 'MARCA ULTIMA ACTUALIZACION' },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS', primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comefis'});
};

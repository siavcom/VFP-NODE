module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_mod', {
'mar_mar': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'MARCA' },'mod_mod': {type: DataTypes.CHAR(32),allowNull: false,defaultValue: ' ',comment: 'MODELO' },'usu_usu': {field: 'USU_USU',type: DataTypes.SMALLINT,comment: 'USUARIO' },'usu_cre': {field: 'USU_CRE',type: DataTypes.SMALLINT,comment: 'USUARIO CREADOR' },'tie_uac': {field: 'TIE_UAC',type: DataTypes.DATE,comment: 'FECHA ULTIMA ACTUALIZACION' },'tie_cre': {field: 'TIE_CRE',type: DataTypes.DATE,comment: 'TIEMPO DE CREACION' },'timestamp': {type: DataTypes.BLOB('tiny'),allowNull: true,comment: 'TIMESTAMP' },'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS', primaryKey: true },createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comemod'});
};

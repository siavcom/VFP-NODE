module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_mar', {
'mar_mar': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'MARCA DE LA UNIDAD' },'des_mar': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: 'DESCRIPCION' },'usu_usu': {field: 'USU_USU',type: DataTypes.INTEGER,comment: 'USUARIO' },'usu_cre': {field: 'USU_CRE',type: DataTypes.INTEGER,comment: 'USUARIO CREADOR' },'tie_uac': {field: 'TIE_UAC',type: DataTypes.DATE,comment: 'FECHA DE LA ULTIMA ACTUALIZACION' },'tie_cre': {field: 'TIE_CRE',type: DataTypes.DATE,comment: 'TIEMPO DE CREACION' },'timestamp': {type: DataTypes.BLOB('tiny'),allowNull: true,comment: 'MARCA ULTIMA ACTUALIZACION' },'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS', primaryKey: true },createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comemar'});
};

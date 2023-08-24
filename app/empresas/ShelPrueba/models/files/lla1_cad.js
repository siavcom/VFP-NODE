module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_cad', {
'cop_nom': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: 'C=CLIENTE P=PROVEEDOR' },'cad_cad': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: 'CADENA COMERCIAL' },'nom_cad': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: 'NOMBRE DE LA CADENA' },'usu_usu': {field: 'USU_USU',type: DataTypes.SMALLINT,comment: 'USUARIO' },'usu_cre': {field: 'USU_CRE',type: DataTypes.SMALLINT,comment: 'USUARIO CREADOR' },'tie_uac': {field: 'TIE_UAC',type: DataTypes.DATE,comment: 'FECHA DE LA ULTIMA ACTUALIZACION' },'tie_cre': {field: 'TIE_CRE',type: DataTypes.DATE,comment: 'TIEMPO DE CREACION' },'timestamp': {type: DataTypes.BLOB('tiny'),allowNull: true,comment: 'MARCA ULTIMA ACTUALIZACION' },'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS', primaryKey: true },createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comecad'});
};

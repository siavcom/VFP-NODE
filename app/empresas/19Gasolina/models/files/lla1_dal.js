module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_dal', {
'tdo_tdo': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'TIPO DE DOCUMENTO' },'alm_tda': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: '' },'ale_dal': {type: DataTypes.SMALLINT,allowNull: false,comment: '1=Permite todos los almacenes 0=solo este almacen' },'als_dal': {type: DataTypes.SMALLINT,allowNull: false,comment: '1=Permite todos los almacenes 0=solo este almacen' },'usu_cre': {field: 'USU_CRE',type: DataTypes.SMALLINT,comment: '' },'tie_cre': {field: 'TIE_CRE',type: DataTypes.DATE,comment: '' },'usu_usu': {field: 'USU_USU',type: DataTypes.SMALLINT,comment: 'USUARIO' },'tie_uac': {field: 'TIE_UAC',type: DataTypes.DATE,comment: 'FECHA ULTIMA ACTUALIZACION' },'timestamp': {type: DataTypes.BLOB('tiny'),allowNull: true,comment: 'TIMESTAMP' },'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS', primaryKey: true },createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comedal'});
};

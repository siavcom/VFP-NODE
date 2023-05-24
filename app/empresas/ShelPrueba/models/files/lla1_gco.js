module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_gco', {
'ndo_doc': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'NUMERO DE DOCUMENTO' },'imp_gco': {type: DataTypes.DECIMAL(15,4),allowNull: false,defaultValue: '0',comment: 'IMPORTE DEL GASTO' },'usu_usu': {field: 'USU_USU',type: DataTypes.SMALLINT,comment: 'USUARIO' },'tie_uac': {field: 'TIE_UAC',type: DataTypes.DATE,comment: 'FECHA DE LA ULTIMA ACTUALIZACION' },'timestamp': {type: DataTypes.BLOB('tiny'),allowNull: true,comment: 'MARCA ULTIMA ACTUALIZACION' },'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS', primaryKey: true },createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comegco'});
};

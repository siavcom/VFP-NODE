module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_tcd', {
'tcd_tcd': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'TABLA DE CLASIFICACION DE DOCUMENTOS' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometcd'});
};
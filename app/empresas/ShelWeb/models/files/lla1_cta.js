module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_cta', {
'cta_cta': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: 'NUMERO DE CUENTA' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comecta'});
};
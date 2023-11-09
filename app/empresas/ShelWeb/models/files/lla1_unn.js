module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_unn', {
'unn_unn': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'UNIDAD DE NEGOCIOS' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeunn'});
};
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_gru', {
'gru_gru': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: 'NOMBRE GRUPO' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comegru'});
};
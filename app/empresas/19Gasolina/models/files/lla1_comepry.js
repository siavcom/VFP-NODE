module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_comepry', {
'tpy_tpy': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'TIPO DE PROYECTO' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comepry'});
};
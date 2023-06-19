module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_adu', {
'adu_adu': {type: DataTypes.CHAR(6),allowNull: false,defaultValue: ' ',comment: 'ADUANA' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeadu'});
};
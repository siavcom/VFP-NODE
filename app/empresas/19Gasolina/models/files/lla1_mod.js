module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_mod', {
'mar_mar': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'MARCA' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comemod'});
};
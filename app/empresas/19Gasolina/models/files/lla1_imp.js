module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_imp', {
'tar_imp': {type: DataTypes.CHAR(2),allowNull: false,defaultValue: ' ',comment: 'TARIFA' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeimp'});
};
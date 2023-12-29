module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_dpe', {
'ped_ped': {type: DataTypes.CHAR(15),allowNull: false,defaultValue: ' ',comment: 'PEDIMENTO' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comedpe'});
};
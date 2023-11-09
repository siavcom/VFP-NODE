module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_dir', {
'rfc_dir': {type: DataTypes.CHAR(13),allowNull: false,defaultValue: ' ',comment: 'RFC' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comedir'});
};
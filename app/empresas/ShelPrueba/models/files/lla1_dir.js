module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_dir', {
'rfc_dir': {type: DataTypes.CHAR(13),allowNull: false,defaultValue: ' ',comment: 'RFC' },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comedir'});
};
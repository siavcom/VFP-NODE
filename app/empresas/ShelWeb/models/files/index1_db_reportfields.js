module.exports = function(sequelize, DataTypes) {
  return sequelize.define('index1_db_reportfields', {
'view_report': {type: DataTypes.CHAR(128),allowNull: false,defaultValue: ' ',comment: 'View' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_db_reportfields'});
};
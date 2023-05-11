module.exports = function(sequelize, DataTypes) {
  return sequelize.define('index1_players', {
'team': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: 'Team' },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_players'});
};
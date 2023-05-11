module.exports = function(sequelize, DataTypes) {
  return sequelize.define('index1_team', {
'team': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: 'Equipo' },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_teams'});
};
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_ban', {
'ban_ban': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'CLAVE DEL BANCO' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeban'});
};
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('index1_db_equusu', {
'log_usu': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: 'Login name de usuario' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_db_equusu'});
};
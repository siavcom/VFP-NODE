module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_que', {
'rep_que': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: 'REPORTE' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeque'});
};
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_dia', {
'dia_dia': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'DIARIO' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comedia'});
};
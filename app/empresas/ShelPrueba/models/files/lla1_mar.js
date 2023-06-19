module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_mar', {
'mar_mar': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'MARCA DE LA UNIDAD' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comemar'});
};
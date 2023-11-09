module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_dat', {
'sis_dat': {type: DataTypes.CHAR(8),allowNull: false,defaultValue: ' ',comment: 'SISTEMA' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comedat'});
};
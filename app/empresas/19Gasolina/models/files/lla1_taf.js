module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_taf', {
'con_tco': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'CONCEPTO' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometaf'});
};
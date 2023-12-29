module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_tdf', {
'tip_tdn': {type: DataTypes.CHAR(2),allowNull: false,defaultValue: ' ',comment: 'TIPO DE CLIENTE' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometdf'});
};
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_tda', {
'alm_tda': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'ALMACEN' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometda'});
};
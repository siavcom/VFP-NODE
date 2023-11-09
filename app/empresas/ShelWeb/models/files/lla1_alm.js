module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_alm', {
'alm_tda': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'CODIGO DE ALMACEN' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comealm'});
};
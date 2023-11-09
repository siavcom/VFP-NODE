module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_tfi', {
'fac_tfi': {type: DataTypes.CHAR(2),allowNull: false,defaultValue: ' ',comment: 'FACTOR DE IMPORTANCIA' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometfi'});
};
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_csa', {
'cas_csa': {type: DataTypes.CHAR(6),allowNull: false,defaultValue: ' ',comment: 'CODIGO AGRUPADOR SEGUN SAT' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comecsa'});
};
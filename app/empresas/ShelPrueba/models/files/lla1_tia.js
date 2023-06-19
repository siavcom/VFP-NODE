module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_tia', {
'cta_tia': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: 'CUENTA DE IMPUESTO POR ACREDITAR' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometia'});
};
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_per', {
'per_per': {type: DataTypes.CHAR(6),allowNull: false,defaultValue: ' ',comment: 'PERIODO CONTABLE (AAAAMM)' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeper'});
};
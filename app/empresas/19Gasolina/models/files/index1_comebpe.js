module.exports = function(sequelize, DataTypes) {
  return sequelize.define('index1_comebpe', {
'bas_bpe': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'Numero de bascula' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comebpe'});
};
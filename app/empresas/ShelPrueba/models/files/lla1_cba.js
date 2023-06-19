module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_cba', {
'cba_cba': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'CUENTA BANCARIA' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comecba'});
};
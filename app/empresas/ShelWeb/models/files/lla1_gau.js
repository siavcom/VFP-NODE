module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_gau', {
'gau_gau': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'NUMERO DEL GASTO' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comegau'});
};
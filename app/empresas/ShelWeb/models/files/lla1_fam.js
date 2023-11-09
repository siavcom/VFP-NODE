module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_fam', {
'num_fam': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'NUMERO DE FAMILIA' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comefam'});
};
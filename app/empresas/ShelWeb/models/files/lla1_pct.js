module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_pct', {
'pct_pct': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'NUMERO DE PARAMETRO GENERAL' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comepct'});
};
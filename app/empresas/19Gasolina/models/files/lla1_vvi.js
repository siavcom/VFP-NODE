module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_vvi', {
'via_via': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'NUMERO DE VIAJE' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comevvi'});
};
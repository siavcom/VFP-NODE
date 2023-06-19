module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_cco', {
'cco_cco': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'CENTRO DE COSTO' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comecco'});
};
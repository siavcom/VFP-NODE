module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_xmd', {
'nom_tab': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: 'TABLA QUE GENERA EL XML' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comexmd'});
};
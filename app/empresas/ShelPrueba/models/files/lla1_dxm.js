module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_dxm', {
'nom_tab': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: 'NOMBRE DE LA TABLA' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comedxm'});
};
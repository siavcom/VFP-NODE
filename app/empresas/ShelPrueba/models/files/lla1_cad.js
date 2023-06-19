module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_cad', {
'cop_nom': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: 'C=CLIENTE P=PROVEEDOR' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comecad'});
};
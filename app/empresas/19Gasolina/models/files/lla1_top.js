module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_top', {
'cop_nom': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: 'CLIENTE O PROVEEDOR' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometop'});
};
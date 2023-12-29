module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_tel', {
'cod_nom': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: 'CODIGO DEL CLIENTE O PROVEEDOR' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometel'});
};
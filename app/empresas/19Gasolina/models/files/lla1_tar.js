module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_tar', {
'arc_tar': {type: DataTypes.CHAR(8),allowNull: false,defaultValue: ' ',comment: 'CLAVE ARANCEL' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometar'});
};
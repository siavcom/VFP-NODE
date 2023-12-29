module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_pvd', {
'rfc_pve': {type: DataTypes.CHAR(13),allowNull: false,defaultValue: ' ',comment: 'RFC DEL PROVEEDOR' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comepvd'});
};
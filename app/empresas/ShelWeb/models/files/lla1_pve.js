module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_pve', {
'pve_pve': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'PROVEEDOR VARIOS' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comepve'});
};
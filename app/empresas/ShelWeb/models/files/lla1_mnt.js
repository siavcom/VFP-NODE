module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_mnt', {
'mnt_mnt': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: 'CLAVE DEL MANTENIMIENTO' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comemnt'});
};
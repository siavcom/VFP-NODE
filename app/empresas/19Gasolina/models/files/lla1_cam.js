module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_cam', {
'cam_cam': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'CAMION' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comecam'});
};
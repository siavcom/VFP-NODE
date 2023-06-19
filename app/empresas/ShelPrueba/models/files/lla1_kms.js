module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_kms', {
'cam_cam': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'NUMERO ECONOMICO DECAMION' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comekms'});
};
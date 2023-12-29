module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_sat', {
'cam_sat': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: 'CAMPO DE BUSQUEDA' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comesat'});
};
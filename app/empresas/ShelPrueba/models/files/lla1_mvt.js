module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_mvt', {
'dia_dia': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'TIPO DE DIARIO DE LA POLIZA' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comemvt'});
};
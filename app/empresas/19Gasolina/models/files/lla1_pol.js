module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_pol', {
'dia_dia': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'TIPO DE DIARIO' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comepol'});
};
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_exp', {
'cla_isu': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: 'CLAVE DEL INSUMO  A EXPLOTAR' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeexp'});
};
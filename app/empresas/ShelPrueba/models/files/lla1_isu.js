module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_isu', {
'tin_tti': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: 'TIPO DE INSUMO SEGUN TABLA COMETTI' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeisu'});
};
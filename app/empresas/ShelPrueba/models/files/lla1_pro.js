module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_pro', {
'cla_isu': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: 'CLAVE DEL INSUMO' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comepro'});
};
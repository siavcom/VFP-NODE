module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_tcc', {
'tcc_tcc': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'TABLA DE CLASIFICACION DE CUENTAS' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometcc'});
};
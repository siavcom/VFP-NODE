module.exports = function(sequelize, DataTypes) {
  return sequelize.define('index1_comeisa', {
'cla_isu': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: 'Clave del insumo' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeisa'});
};
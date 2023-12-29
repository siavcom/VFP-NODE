module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_doi', {
'cla_isu': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: 'CLAVE DEL INSUMO' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comedoi'});
};
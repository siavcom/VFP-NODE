module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_tiu', {
'tiu_tiu': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'TIPO DE UNIDAD' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometiu'});
};
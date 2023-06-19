module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_cmo', {
'tdo_tdo': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'TIPO DE DOCUMENTO' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comecmo'});
};
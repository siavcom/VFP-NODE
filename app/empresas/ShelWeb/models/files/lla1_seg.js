module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_seg', {
'gru_gru': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: 'GRUPO DE USUARIOS' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeseg'});
};
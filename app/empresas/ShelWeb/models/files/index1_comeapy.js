module.exports = function(sequelize, DataTypes) {
  return sequelize.define('index1_comeapy', {
'tpy_tpy': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'Tipo de proyecto' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeapy'});
};
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_len', {
'len_len': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'LENGUAJE' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comelen'});
};
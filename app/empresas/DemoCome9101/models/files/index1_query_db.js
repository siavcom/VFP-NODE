module.exports = function(sequelize, DataTypes) {
  return sequelize.define('index1_query_db', {
'prg_prg': {type: DataTypes.CHAR(64),allowNull: false,defaultValue: ' ',comment: 'Programa' },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_query_db'});
};
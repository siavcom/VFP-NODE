module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_ven', {
'ven_ven': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'No. DE VENDEDOR' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeven'});
};
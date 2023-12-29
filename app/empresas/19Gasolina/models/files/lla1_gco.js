module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_gco', {
'ndo_doc': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'NUMERO DE DOCUMENTO' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comegco'});
};
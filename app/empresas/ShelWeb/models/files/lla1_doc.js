module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_doc', {
'suc_pge': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'SUCURSAL' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comedoc'});
};
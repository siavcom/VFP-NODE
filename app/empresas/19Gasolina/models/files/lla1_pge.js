module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_pge', {
'nem_pge': {type: DataTypes.CHAR(120),allowNull: false,defaultValue: ' ',comment: 'NOMBRE DE LA EMPRESA' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comepge'});
};
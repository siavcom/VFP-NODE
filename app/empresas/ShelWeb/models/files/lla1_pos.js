module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_pos', {
'pos_pos': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: 'POSICION DENTRO DEL ALMACEN' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comepos'});
};
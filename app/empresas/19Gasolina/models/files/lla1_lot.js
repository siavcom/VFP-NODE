module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_lot', {
'ser_mov': {type: DataTypes.CHAR(17),allowNull: false,defaultValue: ' ',comment: 'SERIE O LOTE' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comelot'});
};
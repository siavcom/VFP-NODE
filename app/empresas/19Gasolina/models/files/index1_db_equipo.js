module.exports = function(sequelize, DataTypes) {
  return sequelize.define('index1_db_equipo', {
'equ_equ': {type: DataTypes.CHAR(32),allowNull: false,defaultValue: ' ',comment: 'Equipo' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_db_equipo'});
};
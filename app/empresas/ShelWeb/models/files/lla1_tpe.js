module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_tpe', {
'pga_pga': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: 'PRESUPUESTO DE GASTO' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometpe'});
};
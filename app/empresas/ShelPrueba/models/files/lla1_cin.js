module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_cin', {
'fco_cin': {type: DataTypes.DATE,allowNull: false,comment: 'FECHA  DE CORTE DE INVENTARIO' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comecin'});
};
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_tif', {
'fol_tif': {type: DataTypes.DECIMAL(6,0),allowNull: false,defaultValue: '0',comment: 'FOLIO DE TOMA DE INVENTARIO FISICO' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometif'});
};
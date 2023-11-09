module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_rut', {
'rut_rut': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'RUTA' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comerut'});
};
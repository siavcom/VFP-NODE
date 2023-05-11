module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_prg', {
'prg_prg': {type: DataTypes.CHAR(128),allowNull: false,defaultValue: ' ',comment: 'NOMBRE Y UBICACION DEL PROGRAMA' },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeprg'});
};
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_usu', {
'usu_usu': {field: 'USU_USU',type: DataTypes.SMALLINT,comment: 'NUMERO DE USUARIO' },
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeusu'});
};
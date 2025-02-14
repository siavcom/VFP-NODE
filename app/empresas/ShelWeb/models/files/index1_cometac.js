module.exports = function(sequelize, DataTypes) {
  return sequelize.define('index1_cometac', {
'tap_tap': {type: DataTypes.CHAR(6),allowNull: false,defaultValue: ' ',comment: 'Actividad' },'des_tap': {type: DataTypes.CHAR(128),allowNull: false,defaultValue: ' ',comment: 'Descripcion de la actividad' },'usu_usu': {field: 'usu_usu',type: DataTypes.INTEGER,comment: '' },'tie_uac': {field: 'tie_uac',type: DataTypes.DATE,comment: '' },'usu_cre': {field: 'usu_cre',type: DataTypes.SMALLINT,comment: '' },'tie_cre': {field: 'tie_cre',type: DataTypes.DATE,comment: '' },'timestamp': {type: DataTypes.BLOB('tiny'),allowNull: true,comment: '' },'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: '', primaryKey: true },createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometac'});
};

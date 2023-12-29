module.exports = function(sequelize, DataTypes) {
  return sequelize.define('index1_comeisa', {
'cla_isu': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: 'Clave del insumo' },'alm_tda': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'Almacen' },'num_fam': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'Número de familia 0=Por clave del insumo' },'cla_fam': {type: DataTypes.CHAR(5),allowNull: false,defaultValue: ' ',comment: 'Familia' },'usu_usu': {field: 'usu_usu',type: DataTypes.INTEGER,comment: '' },'tie_uac': {field: 'tie_uac',type: DataTypes.DATE,comment: '' },'usu_cre': {field: 'usu_cre',type: DataTypes.SMALLINT,comment: '' },'tie_cre': {field: 'tie_cre',type: DataTypes.DATE,comment: '' },'timestamp': {type: DataTypes.BLOB('tiny'),allowNull: true,comment: '' },'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: '', primaryKey: true },createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeisa'});
};

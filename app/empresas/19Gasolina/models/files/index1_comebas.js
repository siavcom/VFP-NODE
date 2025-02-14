module.exports = function(sequelize, DataTypes) {
  return sequelize.define('index1_comebas', {
'bas_bpe': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'Numero de Bascula' },'des_bas': {type: DataTypes.CHAR(32),allowNull: false,defaultValue: ' ',comment: 'Descripcion de la bascula' },'dir_bas': {type: DataTypes.CHAR(256),allowNull: false,defaultValue: ' ',comment: 'Direccion de la bascula' },'ext_bas': {type: DataTypes.SMALLINT,allowNull: false,comment: 'Bascula externa' },'usu_usu': {field: 'usu_usu',type: DataTypes.INTEGER,comment: '' },'tie_uac': {field: 'tie_uac',type: DataTypes.DATE,comment: '' },'usu_cre': {field: 'usu_cre',type: DataTypes.SMALLINT,comment: '' },'tie_cre': {field: 'tie_cre',type: DataTypes.DATE,comment: '' },'timestamp': {type: DataTypes.BLOB('tiny'),allowNull: true,comment: '' },'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: '', primaryKey: true },createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comebas'});
};

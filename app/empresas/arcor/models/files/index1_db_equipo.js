module.exports = function(sequelize, DataTypes) {
  return sequelize.define('index1_db_equipo', {
'equ_equ': {type: DataTypes.CHAR(32),allowNull: false,defaultValue: ' ',comment: 'Equipo' },'des_equ': {type: DataTypes.CHAR(64),allowNull: false,defaultValue: ' ',comment: '' },'org_equ': {type: DataTypes.CHAR(128),allowNull: false,defaultValue: ' ',comment: 'Organigrama del equipo' },'usu_usu': {field: 'usu_usu',type: DataTypes.INTEGER,comment: '' },'tie_uac': {field: 'tie_uac',type: DataTypes.DATE,comment: '' },'usu_cre': {field: 'usu_cre',type: DataTypes.SMALLINT,comment: '' },'tie_cre': {field: 'tie_cre',type: DataTypes.DATE,comment: '' },'timestamp': {type: DataTypes.BLOB('tiny'),allowNull: true,comment: '' },'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: '', primaryKey: true },createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_db_equipo'});
};

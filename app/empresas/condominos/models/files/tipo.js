module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipo', {
'tipo': {type: DataTypes.STRING(15),allowNull: false,comment: 'Tipo de Predio' },'descripcion': {type: DataTypes.STRING(60),allowNull: false,comment: 'Descripción' },'usu_usu': {field: 'usu_usu',type: DataTypes.INTEGER,comment: '' },'tie_uac': {field: 'tie_uac',type: DataTypes.DATE,comment: '' },'usu_cre': {field: 'usu_cre',type: DataTypes.SMALLINT,comment: '' },'tie_cre': {field: 'tie_cre',type: DataTypes.DATE,comment: '' },'timestamp': {type: DataTypes.BLOB('tiny'),allowNull: true,comment: '' },'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: '', primaryKey: true },createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_tblsegupredtipo'});
};

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('index1_team', {
'team': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: 'Equipo' },
'description': {type: DataTypes.CHAR(32),allowNull: false,defaultValue: ' ',comment: 'Descripcion' },
'sport': {type: DataTypes.CHAR(2),allowNull: false,defaultValue: ' ',comment: 'Deporte' },
'usu_usu': {field: 'usu_usu',type: DataTypes.INTEGER,comment: '' },
'tie_uac': {field: 'tie_uac',type: DataTypes.DATE,comment: '' },
'usu_cre': {field: 'usu_cre',type: DataTypes.SMALLINT,comment: '' },
'tie_cre': {field: 'tie_cre',type: DataTypes.DATE,comment: '' },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: '', primaryKey: true },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: 'TIMESTAMP' },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_teams'});
};

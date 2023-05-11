module.exports = function(sequelize, DataTypes) {
  return sequelize.define('index1_players', {
'team': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: 'Team' },'player': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'Numero de Jugador' },'name': {type: DataTypes.CHAR(72),allowNull: false,defaultValue: ' ',comment: 'Nombre' },'nickname': {type: DataTypes.CHAR(32),allowNull: false,defaultValue: ' ',comment: 'Apodo' },'jerseyno': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'No Jersey/Playera' },'positionname': {type: DataTypes.CHAR(32),allowNull: false,defaultValue: ' ',comment: 'Nombre de posicion' },'birthday': {type: DataTypes.DATE,allowNull: false,comment: 'Fecha de nacimiento' },'usu_usu': {field: 'usu_usu',type: DataTypes.INTEGER,comment: '' },'tie_uac': {field: 'tie_uac',type: DataTypes.DATE,comment: '' },'usu_cre': {field: 'usu_cre',type: DataTypes.SMALLINT,comment: '' },'tie_cre': {field: 'tie_cre',type: DataTypes.DATE,comment: '' },'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: '', primaryKey: true },'timestamp': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: 'TIMESTAMP' },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_players'});
};

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_var', {
'dia_dia': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'DIARIO' },'num_pol': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'NUMERO DE POLIZA' },'per_per': {type: DataTypes.CHAR(6),allowNull: false,defaultValue: ' ',comment: 'PERIODO CONTABLE (AAAAMM)' },'nom_var': {type: DataTypes.CHAR(80),allowNull: false,defaultValue: ' ',comment: 'NOMBRE VARIOS' },'usu_usu': {field: 'USU_USU',type: DataTypes.SMALLINT,comment: 'USUARIO' },'usu_cre': {field: 'USU_CRE',type: DataTypes.SMALLINT,comment: 'USUARIO CREADOR' },'tie_uac': {field: 'TIE_UAC',type: DataTypes.DATE,comment: 'FECHA DE LA ULTIMA ACTUALIZACION' },'tie_cre': {field: 'TIE_CRE',type: DataTypes.DATE,comment: 'TIEMPO DE CREACION' },'timestamp': {type: DataTypes.BLOB('tiny'),allowNull: true,comment: 'MARCA ULTIMA ACTUALIZACION' },'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS', primaryKey: true },createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comevar'});
};

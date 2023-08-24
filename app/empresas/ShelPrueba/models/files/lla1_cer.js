module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_cer', {
'cer_cer': {type: DataTypes.CHAR(25),allowNull: false,defaultValue: ' ',comment: 'CERTIFICADO' },
'pwd_cer': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: 'PASSWORD DE CERTIFICADO DIGITAL' },
'ubi_cer': {type: DataTypes.CHAR(512),allowNull: false,defaultValue: ' ',comment: 'UBICACION DEL CERTIFICADO' },
'pem_cer': {type: DataTypes.STRING(4096),allowNull: false,comment: 'PEM DEL CERTIFICADO' },
'arc_cer': {type: DataTypes.BLOB('long'),allowNull: false,comment: 'ARCHIVO DEL CERTIFICADO' },
'usu_usu': {field: 'USU_USU',type: DataTypes.SMALLINT,comment: 'USUARIO' },
'usu_cre': {field: 'USU_CRE',type: DataTypes.SMALLINT,comment: 'USUARIO CREADOR' },
'tie_uac': {field: 'TIE_UAC',type: DataTypes.DATE,comment: 'FECHA DE LA ULTIMA ACTUALIZACION' },
'tie_cre': {field: 'TIE_CRE',type: DataTypes.DATE,comment: 'TIEMPO DE CREACION' },
'timestamp': {type: DataTypes.BLOB('tiny'),allowNull: true,comment: 'MARCA ULTIMA ACTUALIZACION' },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS', primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comecer'});
};

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_prg', {
'prg_prg': {type: DataTypes.CHAR(128),allowNull: false,defaultValue: ' ',comment: 'NOMBRE Y UBICACION DEL PROGRAMA' },
'ext_prg': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'EXTENCION DEL PROGRAMA' },
'des_prg': {type: DataTypes.CHAR(128),allowNull: false,defaultValue: ' ',comment: 'DESCRIPCION DEL PROGRAMA' },
'sis_prg': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'NUMERO DE  SISTEMA DEL PROGRAMA' },
'num_prg': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'NUMERO DEL PROGRAMA' },
'par_prg': {type: DataTypes.CHAR(100),allowNull: false,defaultValue: ' ',comment: 'PARAMETRO AL LLAMAR EL PROGRAMA' },
'sis_sis': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: 'SISTEMA AL CUAL PERTENECE' },
'tpr_prg': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: 'TIPO DE PROGRAMA M=MANTENIMIENTO; R=REPORTE; P=PROCESO' },
'fac_prg': {type: DataTypes.DATE,allowNull: false,comment: 'FECHA ULTIMA ACTUALIZACION' },
'frm_prg': {type: DataTypes.TEXT,allowNull: true,comment: 'FORMATO' },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: 'FECHA DE LA ULTIMA ACTUALIZACION' },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: 'TIEMPO DE CREACION' },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: 'USUARIO' },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'USUARIO CREADOR' },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS', primaryKey: true },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: 'TIMESTAMP' },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeprg'});
};

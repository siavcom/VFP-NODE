// cambie la tabla de actualizacion a  man_comeprg, porque no se podia actulizar los datos 
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_prg', {
'prg_prg': {type: DataTypes.CHAR(100),allowNull: false,defaultValue: ' ',comment: 'NOMBRE Y UBICACION DEL PROGRAMA' },
'path_prg': {type: DataTypes.CHAR(100),allowNull: false,defaultValue: ' ',comment: 'Page PATH' },
'ext_prg': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'EXTENCION DEL PROGRAMA' },
'des_prg': {type: DataTypes.CHAR(80),allowNull: false,defaultValue: ' ',comment: 'DESCRIPCION DEL PROGRAMA' },
'sis_prg': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'NUMERO DE  SISTEMA DEL PROGRAMA' },
'num_prg': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'NUMERO DEL PROGRAMA' },
'par_prg': {type: DataTypes.CHAR(100),allowNull: false,defaultValue: ' ',comment: 'PARAMETRO AL LLAMAR EL PROGRAMA' },
'sis_sis': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: 'SISTEMA AL CUAL PERTENECE' },
'tpr_prg': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: 'TIPO DE PROGRAMA M=MANTENIMIENTO; R=REPORTE; P=PROCESO' },
//'fac_prg': {type: 'TIMESTAMP', defaultValue: new Date().toISOString(),allowNull: true,comment: 'FECHA ULTIMA ACTUALIZACION' },
'frm_prg': {type: DataTypes.STRING(0),allowNull: false,comment: 'FORMATO' },
'ico_prg': {type: DataTypes.CHAR(128),allowNull: false,defaultValue: ' ',comment: 'ICONO PARA PRESENTAR EN EL MENU' },
'tie_uac': {field: 'tie_uac',type: DataTypes.DATE,allowNull: true,comment: 'FECHA DE LA ULTIMA ACTUALIZACION' },
'tie_cre': {field: 'tie_cre',type: DataTypes.DATE,allowNull: true,comment: 'TIEMPO DE CREACION' },
'usu_usu': {field: 'usu_usu',type: DataTypes.SMALLINT,allowNull: true,comment: 'USUARIO' },
'usu_cre': {field: 'usu_cre',type: DataTypes.SMALLINT,allowNull: true,comment: 'USUARIO CREADOR' },
'timestamp': {type: DataTypes.BLOB('tiny'),allowNull: true,comment: 'MARCA ULTIMA ACTUALIZACION' },
'key_pri': {type: DataTypes.INTEGER,defaultValue:0, primaryKey: true,comment: 'LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS' },

// id: {field: 'key_pri',type: DataTypes.INTEGER,allowNull: true},
createdAt: {field: 'tie_cre',type: DataTypes.DATE,allowNull: true,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,allowNull: true,} 
  }, { tableName: 'man_comeprg'});
};

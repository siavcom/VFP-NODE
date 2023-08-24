module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_tcd', {
'tcd_tcd': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'TABLA DE CLASIFICACION DE DOCUMENTOS' },'tdo_tdo': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'TIPO DE DOCUMENTO' },'des_tcd': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: 'DESCRIPCION' },'ctb_tcd': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: 'CUENTA CONTABLE' },'mon_doc': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'MONEDA DEL DOCUMENTO' },'cba_cba': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'CUENTA BANCARIA SEGUN TABLA COMECBA' },'pga_pga': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: 'PRESUPUESTO DE GASTO' },'prg_prg': {type: DataTypes.STRING(512),allowNull: false,comment: 'PROGRAMA A LLAMAR' },'par_prg': {type: DataTypes.CHAR(64),allowNull: false,defaultValue: ' ',comment: 'Parammetros de la llamada' },'pry_pry': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: 'Proyecto S)i N)o' },'usu_usu': {field: 'USU_USU',type: DataTypes.SMALLINT,comment: 'USUARIO' },'usu_cre': {field: 'USU_CRE',type: DataTypes.SMALLINT,comment: 'USUARIO CREADOR' },'tie_uac': {field: 'TIE_UAC',type: DataTypes.DATE,comment: 'FECHA DE LA ULTIMA ACTUALIZACION' },'tie_cre': {field: 'TIE_CRE',type: DataTypes.DATE,comment: 'TIEMPO DE CREACION' },'timestamp': {type: DataTypes.BLOB('tiny'),allowNull: true,comment: 'MARCA ULTIMA ACTUALIZACION' },'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS', primaryKey: true },createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometcd'});
};

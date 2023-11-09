module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_pry', {
'tip_pry': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'TIPO DE PROYECTO' },'num_pry': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'NUMERO DE PROYECTO' },'per_pry': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: 'PERIDICIDAD' },'cop_nom': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: 'C=CLIENTE P=PROVEEDOR N=NO AFECTA' },'cod_nom': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: 'CODIGO DEL CLIENTE' },'con_con': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'NUMERO DE CONSIGNATARIO' },'fec_pry': {type: DataTypes.DATE,allowNull: false,comment: 'FECHA DE PROYECTO' },'fcu_pry': {type: DataTypes.DATE,allowNull: false,comment: 'FECHA DE CULMINACION' },'ven_ven': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'VENDEDOR' },'tit_pry': {type: DataTypes.CHAR(128),allowNull: false,defaultValue: ' ',comment: 'TITULO' },'des_pry': {type: DataTypes.STRING(1024),allowNull: false,comment: 'DESCRIPCION DEL PROYECTO' },'fco_pry': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'FORMA DE COTIZACION 1=POR DESCRIPCION 2=POR INSUMO' },'est_pry': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: 'ESTATUS I=INICIO F=FINCADO M=CONFORMADO C=COSTEADO A=AUTORIZADO Z=COTIZADO B=BLOQUEADO P=ACEPTADO' },'men_pry': {type: DataTypes.CHAR(80),allowNull: false,defaultValue: ' ',comment: 'MENSAJE  DEL ESTATUS' },'obs_pry': {type: DataTypes.STRING(512),allowNull: false,comment: 'OBSERVACION DEL PROYECTO' },'mco_pry': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'MONEDA DE COTIZACION' },'cau_pry': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: 'CLAVE DE AUTORIZACION DEL PROYECTO' },'imp_pry': {type: DataTypes.DECIMAL(13,5),allowNull: false,defaultValue: '0',comment: 'IMPORTE DEL PROYECTO' },'suc_pge': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'SUCURSAL O UNIDAD DE NEGOCIO' },'gru_gru': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: 'GRUPO DE TRABAJO' },'pga_pga': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: 'PRESUPUESTO DE GASTO' },'fim_pry': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: '' },'usu_usu': {field: 'USU_USU',type: DataTypes.SMALLINT,comment: 'USUARIO' },'usu_cre': {field: 'USU_CRE',type: DataTypes.SMALLINT,comment: 'USUARIO CREADOR' },'tie_uac': {field: 'TIE_UAC',type: DataTypes.DATE,comment: 'FECHA DE LA ULTIMA ACTUALIZACION' },'tie_cre': {field: 'TIE_CRE',type: DataTypes.DATE,comment: 'TIEMPO DE CREACION' },'timestamp': {type: DataTypes.BLOB('tiny'),allowNull: true,comment: 'MARCA ULTIMA ACTUALIZACION' },'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS', primaryKey: true },createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comepry'});
};

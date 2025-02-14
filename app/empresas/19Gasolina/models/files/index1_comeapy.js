module.exports = function(sequelize, DataTypes) {
  return sequelize.define('index1_comeapy', {
'tpy_tpy': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'Tipo de proyecto' },'num_pry': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'Numero' },'con_apy': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'Consecutivo la actividad' },'per_apy': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'Numero de periodo' },'tap_tap': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'Actividad' },'fec_apy': {type: DataTypes.DATE,allowNull: false,comment: 'Fecha' },'est_apy': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'Estatus de la actividad' },'dat_apy': {type: DataTypes.TEXT,allowNull: true,comment: 'Datos actividad' },'obs_apy': {type: DataTypes.STRING(1024),allowNull: false,comment: 'Observaciones' },'fco_apy': {type: DataTypes.DATE,allowNull: false,comment: 'Fecha de conclución' },'fce_apy': {type: DataTypes.DATE,allowNull: false,comment: 'Fecha ultimo cambio de estatus' },'fpr_apy': {type: DataTypes.DATE,allowNull: false,comment: 'Fecha de programacion' },'tdo_tdo': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'Documento generado' },'ndo_doc': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'Numero de documento generado' },'ord_tap': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'Orden de la actividad' },'fma_apy': {type: DataTypes.DATE,allowNull: false,comment: 'Fecha envio mail' },'fdo_apy': {type: DataTypes.DATE,allowNull: false,comment: 'Fecha de generacion de documento' },'fms_apy': {type: DataTypes.DATE,allowNull: false,comment: 'Fecha envio msm' },'usu_usu': {field: 'usu_usu',type: DataTypes.INTEGER,comment: '' },'tie_uac': {field: 'tie_uac',type: DataTypes.DATE,comment: '' },'usu_cre': {field: 'usu_cre',type: DataTypes.SMALLINT,comment: '' },'tie_cre': {field: 'tie_cre',type: DataTypes.DATE,comment: '' },'timestamp': {type: DataTypes.BLOB('tiny'),allowNull: true,comment: '' },'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: '', primaryKey: true },createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeapy'});
};

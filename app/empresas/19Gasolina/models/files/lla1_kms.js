module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_kms', {
'cam_cam': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'NUMERO ECONOMICO DECAMION' },'fkm_kms': {type: DataTypes.DATE,allowNull: false,comment: 'FECHA' },'kms_kms': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'KILOMETROS' },'lit_kms': {type: DataTypes.DECIMAL(10,2),allowNull: false,defaultValue: '0',comment: 'LITROS DE COBUSTIBLE' },'img_kms': {type: DataTypes.DECIMAL(10,2),allowNull: false,defaultValue: '0',comment: 'IMPORTE DE COMBUSTIBLE' },'hrs_kms': {type: DataTypes.DECIMAL(9,2),allowNull: false,defaultValue: '0',comment: 'HORAS DE USO' },'rut_rut': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'RUTA' },'usu_usu': {field: 'USU_USU',type: DataTypes.SMALLINT,comment: 'USUARIO' },'usu_cre': {field: 'USU_CRE',type: DataTypes.SMALLINT,comment: 'USUARIO CREADOR' },'tie_uac': {field: 'TIE_UAC',type: DataTypes.DATE,comment: 'FECHA DE LA ULTIMA ACTUALIZACION' },'tie_cre': {field: 'TIE_CRE',type: DataTypes.DATE,comment: 'TIEMPO DE CREACION' },'timestamp': {type: DataTypes.BLOB('tiny'),allowNull: true,comment: 'MARCA ULTIMA ACTUALIZACION' },'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS', primaryKey: true },createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comekms'});
};

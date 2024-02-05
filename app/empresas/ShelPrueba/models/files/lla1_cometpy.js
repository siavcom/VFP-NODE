module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_cometpy', {
'tpy_tpy': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'TIPO DE PROYECTO' },'des_tpy': {type: DataTypes.CHAR(128),allowNull: false,defaultValue: ' ',comment: 'DESCRIPCION' },'cop_nom': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: 'CLIENTE/PROVEEDOR' },'con_tpy': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'CONCECUTIVO DE TIPO DE PROYECTO' },'fge_tpy': {type: DataTypes.CHAR(64),allowNull: false,defaultValue: ' ',comment: 'FORMATO DE IMPRESION DEL GENERADOR' },'fco_tpy': {type: DataTypes.CHAR(64),allowNull: false,defaultValue: ' ',comment: 'FORMATO DE IMPRESION DE LA COTIZACION' },'equ_equ': {type: DataTypes.CHAR(32),allowNull: false,defaultValue: ' ',comment: 'Equipo de trabajo' },'usu_usu': {field: 'usu_usu',type: DataTypes.SMALLINT,comment: 'USUARIO' },'usu_cre': {field: 'usu_cre',type: DataTypes.SMALLINT,comment: 'USUARIO CREADOR' },'tie_uac': {field: 'tie_uac',type: DataTypes.DATE,comment: 'FECHA DE LA ULTIMA ACTUALIZACION' },'tie_cre': {field: 'tie_cre',type: DataTypes.DATE,comment: 'TIEMPO DE CREACION' },'timestamp': {type: DataTypes.BLOB('tiny'),allowNull: true,comment: 'MARCA ULTIMA ACTUALIZACION' },'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS', primaryKey: true },createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometpy'});
};

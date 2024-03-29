module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_vis', {
'nom_tab': {type: DataTypes.CHAR(64),allowNull: false,defaultValue: ' ',comment: 'NOMBRE DE LA TABLA' },
'vac_vis': {type: DataTypes.CHAR(64),allowNull: false,defaultValue: ' ',comment: 'VISTA DE ACTUALIZACION (indice principal)' },
'nom_vis': {type: DataTypes.CHAR(64),allowNull: false,defaultValue: ' ',comment: 'NOMBRE DE LA VISTA' },
'fil_vis': {type: DataTypes.STRING(512),allowNull: false,comment: 'FILVIS' },
'des_vis': {type: DataTypes.CHAR(128),allowNull: false,defaultValue: ' ',comment: 'DESCRIPCION DE LA VISTA' },
'tab_vis': {type: DataTypes.TEXT,allowNull: true,comment: 'TABVIS' },
'cam_vis': {type: DataTypes.TEXT,allowNull: true,comment: 'CAMVIS' },
'sql_vis': {type: DataTypes.TEXT,allowNull: true,comment: 'SQLVIS' },
'ord_vis': {type: DataTypes.CHAR(128),allowNull: false,defaultValue: ' ',comment: 'ORDEN DE LA VISTA' },
'tin_vis': {type: DataTypes.CHAR(15),allowNull: false,defaultValue: ' ',comment: 'TINVIS' },
'tbo_vis': {type: DataTypes.CHAR(15),allowNull: false,defaultValue: ' ',comment: 'TBOVIS' },
'tmo_vis': {type: DataTypes.CHAR(15),allowNull: false,defaultValue: ' ',comment: 'TMOVIS' },
'vre_vis': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: 'VISTA REMOTA EN LA BASE DE DATOS' },
'wjs_vis': {type: DataTypes.STRING(512),allowNull: false,comment: 'Condicion Where para JavaScript ejemplo: con_nom=${m.cod_nom} and left(cop_nom,1)=${m.cop_nom}' },
'usu_usu': {field: 'USU_USU',type: DataTypes.SMALLINT,comment: 'USUARIO' },
'usu_cre': {field: 'USU_CRE',type: DataTypes.SMALLINT,comment: 'USUARIO CREADOR' },
'tie_uac': {field: 'TIE_UAC',type: DataTypes.DATE,comment: 'FECHA ULTIMA ACTUALIZACION' },
'tie_cre': {field: 'TIE_CRE',type: DataTypes.DATE,comment: 'TIEMPO DE CREACION' },
'timestamp': {type: DataTypes.BLOB('tiny'),allowNull: true,comment: 'TIMESTAMP' },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS', primaryKey: true },


id: {field: 'key_pri',type: DataTypes.INTEGER,},
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comevis'});
};

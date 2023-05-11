module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_vis', {
'nom_tab': {type: DataTypes.CHAR(64),allowNull: false,defaultValue: ' ',comment: 'NOMBRE DE LA TABLA' },
'vac_vis': {type: DataTypes.CHAR(64),allowNull: false,defaultValue: ' ',comment: 'VISTA LOCAL QUE SE UTILIZA PARA ACTUALIZACION DE DATOS' },
'nom_vis': {type: DataTypes.CHAR(64),allowNull: false,defaultValue: ' ',comment: 'NOMBRE DE LA VISTA' },
'fil_vis': {type: DataTypes.STRING(512),allowNull: false,comment: 'VARIABLES QUE COMPONE EL FILTRO' },
'des_vis': {type: DataTypes.CHAR(128),allowNull: false,defaultValue: ' ',comment: 'DESCRIPCION DE LA VISTA' },
'tab_vis': {type: DataTypes.STRING(512),allowNull: false,comment: 'TABVIS' },
'cam_vis': {type: DataTypes.STRING(512),allowNull: false,comment: 'CAMPOS QUE CONTIENE LA VISTA' },
'sql_vis': {type: DataTypes.STRING(512),allowNull: false,comment: 'SQLVIS' },
'ord_vis': {type: DataTypes.CHAR(128),allowNull: false,defaultValue: ' ',comment: 'ORDEN DE LA VISTA' },
'tin_vis': {type: DataTypes.CHAR(15),allowNull: false,defaultValue: ' ',comment: 'TINVIS' },
'tbo_vis': {type: DataTypes.CHAR(15),allowNull: false,defaultValue: ' ',comment: 'TBOVIS' },
'tmo_vis': {type: DataTypes.CHAR(15),allowNull: false,defaultValue: ' ',comment: 'TMOVIS' },
'vre_vis': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: 'GENERA VISTA REMOTA DE ACTUALIZACION  EN sqlserver (Solo VFP)' },
'wjs_vis': {type: DataTypes.STRING(512),allowNull: false,comment: 'Condicion Where para JavaScript ejemplo: con_nom=${m.cod_nom} and left(cop_nom,1)=${m.cop_nom}' },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: 'TIMESTAMP' },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },

'usu_usu': {field: 'usu_usu',type: DataTypes.SMALLINT },
'usu_cre': {field: 'usu_cre',type: DataTypes.SMALLINT },
'tie_uac': {field: 'tie_uac',type: DataTypes.DATE },
'tie_cre': {field: 'tie_cre',type: DataTypes.DATE },



createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comevis'});
};

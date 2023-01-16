module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_tab', {
'nom_tab': {type: DataTypes.CHAR(64),allowNull: false,defaultValue: ' ',comment: 'NOMBRE DE LA TABLA' },
'des_tab': {type: DataTypes.CHAR(128),allowNull: false,defaultValue: ' ',comment: 'DESCRIPCION DE LA TABLA' },
'vis_tab': {type: DataTypes.CHAR(512),allowNull: false,defaultValue: ' ',comment: 'WHERE  DE LA VISTA DE MANTENIMEINTO' },
'man_tab': {type: DataTypes.CHAR(128),allowNull: false,defaultValue: ' ',comment: 'MANTAB' },
'tri_msq': {type: DataTypes.TEXT,allowNull: true,comment: 'TRIMMSQ' },
'tri_pos': {type: DataTypes.TEXT,allowNull: true,comment: 'TRIPOS' },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: 'USUARIO' },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: 'TIMESTAMP' },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },

'usu_usu': {field: 'usu_usu',type: DataTypes.SMALLINT },
'usu_cre': {field: 'usu_cre',type: DataTypes.SMALLINT },
'tie_uac': {field: 'tie_uac',type: DataTypes.DATE },
'tie_cre': {field: 'tie_cre',type: DataTypes.DATE },

createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comedat'});
};

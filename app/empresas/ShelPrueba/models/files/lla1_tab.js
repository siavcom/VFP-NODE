module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_tab', {
'nom_tab': {type: DataTypes.CHAR(64),allowNull: false,defaultValue: ' ',comment: 'NOMBRE DE LA TABLA' },
'des_tab': {type: DataTypes.CHAR(128),allowNull: false,defaultValue: ' ',comment: 'DESCRIPCION DE LA TABLA' },
'vis_tab': {type: DataTypes.CHAR(512),allowNull: false,defaultValue: ' ',comment: 'WHERE  DE LA VISTA DE MANTENIMEINTO' },
'man_tab': {type: DataTypes.CHAR(128),allowNull: false,defaultValue: ' ',comment: 'MANTAB' },
'tri_msq': {type: DataTypes.TEXT,allowNull: true,comment: 'TRIGGER MSSQL' },
'tri_pos': {type: DataTypes.TEXT,allowNull: true,comment: 'TRIGGER POSTGRES' },
'usu_usu': {field: 'usu_usu',type: DataTypes.SMALLINT,comment: 'USUARIO' },
'usu_cre': {field: 'usu_cre',type: DataTypes.SMALLINT,comment: 'USUARIO CREADOR' },
'tie_uac': {field: 'tie_uac',type: DataTypes.DATE,comment: 'FECHA ULTIMA ACTUALIZACION' },
'tie_cre': {field: 'tie_cre',type: DataTypes.DATE,comment: 'TIEMPO DE CREACION' },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS', primaryKey: true },
'timestamp': {type: DataTypes.BLOB('tiny'),allowNull: true,comment: 'TIMESTAMP' },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometab'});
};

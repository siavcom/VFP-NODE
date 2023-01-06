module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_ind', {
'nom_tab': {type: DataTypes.CHAR(64),allowNull: false,defaultValue: ' ',comment: 'NOMBRE DE LA TABLA' },
'num_ind': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'NUMERO DE INDICE' },
'exp_ind': {type: DataTypes.CHAR(256),allowNull: false,defaultValue: ' ',comment: 'EXP IND' },
'cam_ind': {type: DataTypes.CHAR(128),allowNull: false,defaultValue: ' ',comment: 'CAMPOS QUE FORMA EL INDICE' },
'des_ind': {type: DataTypes.CHAR(128),allowNull: false,defaultValue: ' ',comment: 'DESCRIPCION DEL INDICE' },
'nom_ind': {type: DataTypes.CHAR(64),allowNull: false,defaultValue: ' ',comment: 'NOMBRE DEL INDICE' },
'uni_ind': {type: DataTypes.BOOLEAN,allowNull: false,comment: 'UNI IND' },
'usu_usu': {type: DataTypes.SMALLINT,allowNull: true,defaultValue: '0',comment: 'USUARIO' },
'usu_cre': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'USUARIO CREADOR' },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: 'FECHA ULTIMA ACTUALIZACION' },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: 'TIEMPO DE CREACION' },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS', primaryKey: true },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: 'TIMESTAMP' },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comeind'});
};

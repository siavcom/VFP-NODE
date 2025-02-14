module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_dat', {
'sis_dat': {type: DataTypes.CHAR(8),allowNull: false,defaultValue: ' ',comment: 'SISTEMA' },
'arc_dat': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: 'ARCHIVO Y NUMERO DE CAMPO' },
'cam_dat': {type: DataTypes.CHAR(64),allowNull: false,defaultValue: ' ',comment: 'NOMBRE DEL CAMPO' },
'des_dat': {type: DataTypes.CHAR(128),allowNull: false,defaultValue: ' ',comment: 'VARIABLE' },
'tip_dat': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: 'TIPO DE DATO' },
'lon_dat': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'LONGITUD TOTAL DE LA VARIABLE' },
'dec_dat': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'DECIMALES EN UN DATO NUMERICO' },
'ref_dat': {type: DataTypes.CHAR(128),allowNull: false,defaultValue: ' ',comment: 'DESCRIPCION DE LA VARIABLE' },
'val_dat': {type: DataTypes.CHAR(256),allowNull: false,defaultValue: ' ',comment: 'VALOR INICIAL CUANDO SE INSERTA UN REGISTRO EN UNA VISTA DE VFP' },
'sou_dat': {type: DataTypes.TEXT,allowNull: true,comment: 'VALORES PARA LLENADO DE COMBOS' },
'nom_tab': {type: DataTypes.CHAR(64),allowNull: false,defaultValue: ' ',comment: 'NOMBRE DE LA TABLA' },
'con_dat': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'NUMERO CONSECUTIVO' },
'vue_dat': {type: DataTypes.STRING(1024),allowNull: false,defaultValue: ' ',comment: 'VALOR DEFAULT TYPESCRIPT PARA VUE' },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS', primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'comedat'});
};

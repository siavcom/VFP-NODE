module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_tab', {
'nom_tab': {type: DataTypes.CHAR(64),allowNull: false,defaultValue: ' ',comment: 'NOMBRE DE LA TABLA' },
'des_tab': {type: DataTypes.CHAR(128),allowNull: false,defaultValue: ' ',comment: 'DESCRIPCION DE LA TABLA' },
'vis_tab': {type: DataTypes.CHAR(512),allowNull: false,defaultValue: ' ',comment: 'VISTAB' },
'sis_sis': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: 'SISTEMA' },
'tri_msq': {type: DataTypes.TEXT,allowNull: true,comment: 'TRIMMSQ' },
'tri_pos': {type: DataTypes.TEXT,allowNull: true,comment: 'TRIPOS' },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS', primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'cometab'});
};

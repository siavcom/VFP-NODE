/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comekms', {
'CAM_CAM': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "null" },
'FKM_KMS': {type: DataTypes.DATE,allowNull: false,comment: "null" },
'KMS_KMS': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "null" },
'LIT_KMS': {type: DataTypes.DECIMAL(10,2),allowNull: false,defaultValue: '0',comment: "null" },
'IMG_KMS': {type: DataTypes.DECIMAL(10,2),allowNull: false,defaultValue: '0',comment: "null" },
'HRS_KMS': {type: DataTypes.DECIMAL(9,2),allowNull: false,defaultValue: '0',comment: "null" },
'RUT_RUT': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "null" },
'USU_USU': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "null" },
'USU_CRE': {field: 'usu_usu',type: DataTypes.INT,},//{type: DataTypes.INT,allowNull: true},
'TIE_UAC': {type: DataTypes.DATE,allowNull: true,comment: "null" },
'TIE_CRE': {field: 'tie_uac',type: DataTypes.DATE, },//{type: DataTypes.DATE,allowNull: true},
'TIMESTAMP': {type: DataTypes.TIMESTAMPS,allowNull: true,comment: "null" },
'KEY_PRI': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "null" },
createdAt: {field: 'tie_uac',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comekms'});
};


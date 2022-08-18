/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_comepsd', {
'TDO_TDO': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "null" },
'ORD_PSD': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "null" },
'CLA_ISU': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: "null" },
'CAN_MOV': {type: DataTypes.DECIMAL(12,4),allowNull: false,defaultValue: '0',comment: "null" },
'MED_MOV': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "null" },
'PVE_MOV': {type: DataTypes.DECIMAL(12,4),allowNull: false,defaultValue: '0',comment: "null" },
'USU_USU': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "null" },
'USU_CRE': {field: 'usu_usu',type: DataTypes.INT,},//{type: DataTypes.INT,allowNull: true},
'TIE_UAC': {type: DataTypes.DATE,allowNull: true,comment: "null" },
'TIE_CRE': {field: 'tie_uac',type: DataTypes.DATE, },//{type: DataTypes.DATE,allowNull: true},
'TIMESTAMP': {type: DataTypes.TIMESTAMPS,allowNull: true,comment: "null" },
'KEY_PRI': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "null" },
createdAt: {field: 'tie_uac',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comepsd'});
};


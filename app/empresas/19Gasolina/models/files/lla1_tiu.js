module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_tiu', {
'tiu_tiu': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'TIPO DE UNIDAD' },'des_tiu': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: 'DESCRIPCION DE LA UNIDAD' },'uso_tiu': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: 'USO DEL VEHICULO Arrastre=A; Carga=C;Construccion=N;Maniobra=M;Administrativo=D;Otros=O' },'usu_usu': {field: 'USU_USU',type: DataTypes.INTEGER,comment: 'USUARIO' },'usu_cre': {field: 'USU_CRE',type: DataTypes.INTEGER,comment: 'USUARIO CREADOR' },'tie_uac': {field: 'TIE_UAC',type: DataTypes.DATE,comment: 'FECHA DE LA ULTIMA ACTUALIZACION' },'tie_cre': {field: 'TIE_CRE',type: DataTypes.DATE,comment: 'TIEMPO DE CREACION' },'timestamp': {type: DataTypes.BLOB('tiny'),allowNull: true,comment: 'MARCA ULTIMA ACTUALIZACION' },'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS', primaryKey: true },createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometiu'});
};

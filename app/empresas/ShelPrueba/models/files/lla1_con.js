module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_con', {
'cod_nom': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: 'CODIGO DEL CLIENTE O PROVEEDOR' },'noc_con': {type: DataTypes.CHAR(100),allowNull: false,defaultValue: ' ',comment: 'NOMBRE' },'con_con': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'NUMERO DE CONSIGNATARIO' },'dic_con': {type: DataTypes.CHAR(120),allowNull: false,defaultValue: ' ',comment: 'DIRECCION' },'coc_con': {type: DataTypes.CHAR(80),allowNull: false,defaultValue: ' ',comment: 'COLONIA' },'poc_con': {type: DataTypes.CHAR(120),allowNull: false,defaultValue: ' ',comment: 'POBLACION' },'cpc_con': {type: DataTypes.CHAR(5),allowNull: false,defaultValue: ' ',comment: 'C.POSTAL' },'t1c_con': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: 'TELEFONO 1' },'t2c_con': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: 'TELEFONO 2' },'fac_con': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: 'FAX' },'emb_con': {type: DataTypes.CHAR(40),allowNull: false,defaultValue: ' ',comment: 'EMBARCAR' },'ven_ven': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'VENDEDOR' },'ncc_con': {type: DataTypes.CHAR(35),allowNull: false,defaultValue: ' ',comment: 'CONTACTO' },'exc_con': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: 'NO. EXTERIOR' },'inc_con': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: 'INTERIOR' },'edo_edo': {type: DataTypes.CHAR(25),allowNull: false,defaultValue: ' ',comment: 'ESTADO (ENTIDAD FEDERATIVA)' },'cti_con': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: 'CODIGO DE TIENDA' },'rut_rut': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'RUTA' },'dvi_rut': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: 'DIAS DE VISITA' },'oru_rut': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'ORDEN DE VISITA EN RUTA' },'ob1_con': {type: DataTypes.CHAR(80),allowNull: false,defaultValue: ' ',comment: 'OBSERVACION 1' },'ob2_con': {type: DataTypes.CHAR(50),allowNull: false,defaultValue: ' ',comment: 'OBSERVACION 2' },'ob3_con': {type: DataTypes.CHAR(50),allowNull: false,defaultValue: ' ',comment: 'OBSERVACION 3' },'fti_con': {type: DataTypes.CHAR(12),allowNull: false,defaultValue: ' ',comment: 'FORMATO DE TIENDA EN CLIENTES; CODIGO DE CLIENTES EN PROVEEDORES' },'mai_con': {type: DataTypes.CHAR(250),allowNull: false,defaultValue: ' ',comment: 'E-MAIL DEL CONSIGNATARIO' },'cop_nom': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: 'C=CLIENTE P=PROVEEDOR' },'suc_pge': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'SUCURSAL' },'mpa_con': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: 'METODO DE PAGO' },'mpa_sat': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'METODO DE PAGO SEGUN SAT' },'fpa_sat': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'FORMA DE PAGO SEGUN SAT' },'gln_con': {type: DataTypes.CHAR(14),allowNull: false,defaultValue: ' ',comment: 'CODIGO GLN' },'add_cfd': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'NUMERO DE ADDENDA A UTILIZAR' },'pcc_con': {type: DataTypes.CHAR(35),allowNull: false,defaultValue: ' ',comment: 'PUESTO DEL CONTACTO DE COMPRA' },'tcc_con': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: 'TELEFONO DEL CONTACTO DE COMPRA' },'ncp_con': {type: DataTypes.CHAR(35),allowNull: false,defaultValue: ' ',comment: 'NOMBRE DEL CONTACTO EN PAGOS' },'pcp_con': {type: DataTypes.CHAR(35),allowNull: false,defaultValue: ' ',comment: 'PUESTO DEL CONTACTO EN PAGOS' },'tcp_con': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: 'TELEFONO DE CONTACO EN PAGOS' },'mon_con': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'MONEDA DE VENTA EN DOCUMENTOS' },'dpa_con': {type: DataTypes.CHAR(14),allowNull: false,defaultValue: ' ',comment: 'DIAS DE PAGO' },'hpa_con': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: 'HORARIO DE PAGOS' },'dre_con': {type: DataTypes.CHAR(14),allowNull: false,defaultValue: ' ',comment: 'DIAS DE REVISION' },'hre_con': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: 'HORARIO DE REVISION' },'cto_con': {type: DataTypes.CHAR(35),allowNull: false,defaultValue: ' ',comment: 'CONTACTO' },'sta_con': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: 'STATUS DEL CONSIGNATARIO B=BLOQUEADO' },'dis_con': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'DISTANCIA DE ENTREGA' },'usu_usu': {field: 'USU_USU',type: DataTypes.SMALLINT,comment: 'USUARIO' },'usu_cre': {field: 'USU_CRE',type: DataTypes.SMALLINT,comment: 'USUARIO CREADOR' },'tie_uac': {field: 'TIE_UAC',type: DataTypes.DATE,comment: 'FECHA DE LA ULTIMA ACTUALIZACION' },'tie_cre': {field: 'TIE_CRE',type: DataTypes.DATE,comment: 'TIEMPO DE CREACION' },'timestamp': {type: DataTypes.BLOB('tiny'),allowNull: true,comment: 'MARCA ULTIMA ACTUALIZACION' },'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS', primaryKey: true },createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comecon'});
};

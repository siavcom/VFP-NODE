module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lla1_pge', {
'nem_pge': {type: DataTypes.CHAR(120),allowNull: false,defaultValue: ' ',comment: 'NOMBRE DE LA EMPRESA' },'suc_pge': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'SUCURSAL' },'grl_pge': {type: DataTypes.CHAR(132),allowNull: false,defaultValue: ' ',comment: 'GENERALES DE LA EMPRESA' },'tii_pge': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: 'P=PROMEDIOS U=UEPS E=PEPS S=STANDAR' },'ima_pge': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: 'IMAGEN DE PRODUCTOS' },'dci_pge': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'DECIMALES DE CAPTURA EN INVENTARIO' },'pgi_pge': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'PERIODOS A GUARDAR DE INVEN.' },'dcp_pge': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'DECIMALES DE CAPTURA EN PRECIOS' },'uac_pge': {type: DataTypes.DATE,allowNull: false,comment: 'ULTIMA ACTUALIZACION' },'fpo_pge': {type: DataTypes.DATE,allowNull: false,comment: 'FECHA DE PROCESO' },'an1_pge': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: '1 RANGO ANALISIS ANT. DE SALDOS' },'an2_pge': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: '2 RANGO ANALISIS ANT. DE SALDOS' },'an3_pge': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: '3 RANGO ANALISIS ANT. DE SALD.OS' },'pac_pge': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: 'POLITICA . APL. PAGOS CLIEN. G=GRAL. D=DOCTO. ( Deshabilitado)' },'pap_pge': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: 'POLITICA APL. PAGOS PROV. G=GRAL. D=DOCTO.(Deshabilitado)' },'tiv_pge': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: 'TIPO DE PRECIOS D=DIRECTOS F=FACTOR GAN.' },'pol_pge': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: 'POLITICA DE PRECIOS DE VENTA P=PRE D=DES' },'fde_pge': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'No. FAM. SOBRE LA CUAL ACTUAN LOS DES.' },'ine_pge': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: 'S=SI N=NO INVENTARIOS  EN NEGATIVO' },'dct_pge': {type: DataTypes.CHAR(40),allowNull: false,defaultValue: ' ',comment: 'DIRECTORIO DE CONTABILIDAD' },'mos_pge': {type: DataTypes.CHAR(6),allowNull: false,defaultValue: ' ',comment: 'CLIENTE DE MOSTRADOR' },'coc_pge': {type: DataTypes.CHAR(6),allowNull: false,defaultValue: ' ',comment: 'CONSECUTIVO CODIGO DE CLIENTE' },'pva_pge': {type: DataTypes.CHAR(6),allowNull: false,defaultValue: ' ',comment: 'PROVEEDOR VARIOS' },'cpr_pge': {type: DataTypes.CHAR(6),allowNull: false,defaultValue: ' ',comment: 'CONSECUTIVO CODIGO PROVEEDOR' },'li1_pge': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: '1 LIMITE PAGO DE DOCTOS VEND.' },'li2_pge': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: '2 LIMITE PAGO DE DOCTOS VEND.' },'li3_pge': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: '3 LIMITE PAGO DE DOCTOS VEND.' },'li4_pge': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: '4 LIMITE PAGO DE DOCTOS VEND.' },'li5_pge': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: '5 LIMITE PAGO DE DOCTOS VEND.' },'po1_pge': {type: DataTypes.DECIMAL(5,1),allowNull: false,defaultValue: '0',comment: '1 % DE COMISION VENDEDORES' },'po2_pge': {type: DataTypes.DECIMAL(4,1),allowNull: false,defaultValue: '0',comment: '2 % DE COMISION VENDEDORES' },'po3_pge': {type: DataTypes.DECIMAL(4,1),allowNull: false,defaultValue: '0',comment: '3 % DE COMISION VENDEDORES' },'po4_pge': {type: DataTypes.DECIMAL(4,1),allowNull: false,defaultValue: '0',comment: '4 % DE COMISION VENDEDORES' },'po5_pge': {type: DataTypes.DECIMAL(4,1),allowNull: false,defaultValue: '0',comment: '5 % DE COMISION VENDEDORES' },'tcm_pge': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: 'TIPO DE COMISION D=DOCUMENTO G=GANANCIA' },'va1_pge': {type: DataTypes.DECIMAL(9,4),allowNull: false,defaultValue: '0',comment: 'VALOR MONEDA 1' },'va2_pge': {type: DataTypes.DECIMAL(9,4),allowNull: false,defaultValue: '0',comment: 'VALOR MONEDA 2' },'va3_pge': {type: DataTypes.DECIMAL(9,4),allowNull: false,defaultValue: '0',comment: 'VALOR MONEDA 3' },'va4_pge': {type: DataTypes.DECIMAL(9,4),allowNull: false,defaultValue: '0',comment: 'VALOR MONEDA 4' },'va5_pge': {type: DataTypes.DECIMAL(9,4),allowNull: false,defaultValue: '0',comment: 'VALOR MONEDA 5' },'de1_pge': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'DESCRIPCION MONEDA 1' },'de2_pge': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'DESCRIPCION MONEDA 2' },'de3_pge': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'DESCRIPCION MONEDA 3' },'de4_pge': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'DESCRIPCION MONEDA 4' },'de5_pge': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'DESCRIPCION MONEDA 5' },'pr1_pge': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: 'PROTECCION MONEDA 1' },'pr2_pge': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: 'PROTECCION MONEDA 2' },'pr3_pge': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: 'PROTECCION MONEDA 3' },'pr4_pge': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: 'PROTECCION MONEDA 4' },'pr5_pge': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: 'PROTECCION MONEDA 5' },'di0_pge': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: 'DESCRIPCION IMPUESTO 0' },'di1_pge': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: 'DESCRIPCION IMPUESTO 1' },'di2_pge': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: 'DESCRIPCION IMPUESTO 2' },'di3_pge': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: 'DESCRIPCION IMPUESTO 3' },'di4_pge': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: 'DESCRIPCION IMPUESTO 4' },'di5_pge': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: 'DESCRIPCION IMPUESTO 5' },'ci0_sat': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'CLAVE DEL IMPUESTO 0 SEGUN SAT' },'ci1_sat': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'CLAVE DEL IMPUESTO 1 SEGUN SAT' },'ci2_sat': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'CLAVE DEL IMPUESTO 2 SEGUN SAT' },'ci3_sat': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'CLAVE DEL IMPUESTO 3 SEGUN SAT' },'ci4_sat': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'CLAVE DEL IMPUESTO 4 SEGUN SAT' },'ci5_sat': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: 'CLAVE DEL IMPUESTO 5 SEGUN SAT' },'dbl_pge': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'DIAS VENCIDOS PARA BLOQUEAR DOCUMENTOS' },'ind_pge': {type: DataTypes.DECIMAL(8,4),allowNull: false,defaultValue: '0',comment: 'INTERES MENSUAL POR COBRAR' },'pmv_pge': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: 'PRECIO MINIMO DE VENTA' },'ser_pge': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'SERIE' },'act_pge': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: 'CLAVE DE ACTIVACION' },'dpm_pge': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: 'DEPLIEGUE DE PRECIO MINIMO A CONSULTAR' },'mpv_pge': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'MONEDA DE PRECIO DE VENTA' },'rfc_pge': {type: DataTypes.CHAR(13),allowNull: false,defaultValue: ' ',comment: 'REGISTRO FEDERAL DE CAUSANTES' },'cal_pge': {type: DataTypes.CHAR(90),allowNull: false,defaultValue: ' ',comment: 'CALLE DE LA DIRECCION DEL LA EMPRESA' },'ext_pge': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: 'EXTERIOR' },'int_pge': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: 'INTERIOR' },'col_pge': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: 'COLONIA' },'loc_pge': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: 'LOCALIDAD' },'mun_pge': {type: DataTypes.CHAR(60),allowNull: false,defaultValue: ' ',comment: 'MUNICIPIO' },'edo_pge': {type: DataTypes.CHAR(30),allowNull: false,defaultValue: ' ',comment: 'ESTADO' },'cpo_pge': {type: DataTypes.CHAR(5),allowNull: false,defaultValue: ' ',comment: 'CODDIGO POSTAL' },'rfi_pge': {type: DataTypes.STRING(512),allowNull: false,comment: 'REGIMEN FISCAL' },'icl_pge': {type: DataTypes.CHAR(25),allowNull: false,defaultValue: ' ',comment: 'IMAGEN CLIENTES' },'ipr_pge': {type: DataTypes.CHAR(25),allowNull: false,defaultValue: ' ',comment: 'IMAGEN PROVEEDORES' },'ipg_pge': {type: DataTypes.CHAR(25),allowNull: false,defaultValue: ' ',comment: 'IMAGEN DE PRESUPUESTO DE GASTO' },'fps_pge': {type: DataTypes.DATE,allowNull: false,comment: 'FECHA DONDE INICIA LA PRIMER SEMANA DEL AÐO' },'nru_pge': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: 'NOMBRE DE ROL DE USUARIOS' },'hos_pge': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: 'NOMBRE DEL HOST' },'cm1_pge': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: 'CUENTA DE CONTABILIDAD MONEDA 1' },'cm2_pge': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: 'CUENTA DE CONTABILIDAD MONEDA 2' },'cm3_pge': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: 'CUENTA DE CONTABILIDAD MONEDA 3' },'cm4_pge': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: 'CUENTA DE CONTABILIDAD MONEDA 4' },'cm5_pge': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: 'CUENTA DE CONTABILIDAD MONEDA 5' },'dm1_pge': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'DECIMALES MONEDA UNO' },'dm2_pge': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'DECIMALES MONEDA DOS' },'dm3_pge': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'DECIMALES MONEDA TRES' },'dm4_pge': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'DECIMALES MONEDA CUATRO' },'dm5_pge': {type: DataTypes.SMALLINT,allowNull: false,defaultValue: '0',comment: 'DECIMALES MONEDA CINCO' },'mai_pge': {type: DataTypes.CHAR(256),allowNull: false,defaultValue: ' ',comment: 'MAIL PRINCIPAL' },'tel_pge': {type: DataTypes.CHAR(256),allowNull: false,defaultValue: ' ',comment: 'TELEFONOS' },'rfi_sat': {type: DataTypes.CHAR(6),allowNull: false,defaultValue: ' ',comment: 'CLAVE DEL REGIMEN FISCAL QUE SE ENCUENTRA EN LAS TABLAS DEL SAT' },'gln_pge': {type: DataTypes.CHAR(14),allowNull: false,defaultValue: ' ',comment: 'CODIGO GLN DE LOCALIZACION' },'usu_usu': {field: 'USU_USU',type: DataTypes.SMALLINT,comment: 'USUARIO' },'usu_cre': {field: 'USU_CRE',type: DataTypes.SMALLINT,comment: 'USUARIO CREADOR' },'tie_uac': {field: 'TIE_UAC',type: DataTypes.DATE,comment: 'FECHA DE LA ULTIMA ACTUALIZACION' },'tie_cre': {field: 'TIE_CRE',type: DataTypes.DATE,comment: 'TIEMPO DE CREACION' },'timestamp': {type: DataTypes.BLOB('tiny'),allowNull: true,comment: 'MARCA ULTIMA ACTUALIZACION' },'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: 'LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS', primaryKey: true },createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_comepge'});
};

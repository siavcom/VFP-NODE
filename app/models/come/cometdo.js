/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('man_cometdo', {
'tdo_tdo': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE DOCUMENTO"  },
'des_tdo': {type: DataTypes.CHAR(25),allowNull: false,defaultValue: ' ',comment: "DESCRIPCION DOCUMENTO"  },
'inv_tdo': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "E=ENTRADAS S=SALIDAS P=PEDIDO  N=NO AFEC"  },
'apa_tdo': {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: '0',comment: "APARTADO 1=SI  2=NO"  },
'cop_nom': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "AFECTA C=CLIENTES P=PROVEEDORES"  },
'tra_tdo': {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: '0',comment: "TRASPASO 1=SI 2=NO"  },
'ptr_tdo': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "PERTENECE AL TRASPASO DE ENTRADA"  },
'afi_tdo': {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: '0',comment: "AFECTA IMPORTACIONES 1=SI 0=NO"  },
'con_tdo': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "CONSECUTIVO"  },
'coa_tdo': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "C=CARGO A=ABONO"  },
'for_tdo': {type: DataTypes.CHAR(16),allowNull: false,defaultValue: ' ',comment: "FORMA IMPRESION"  },
'est_tdo': {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: '0',comment: "ESTADISTICAS 1=SI 0=NO"  },
'ctb_tdo': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: "CUENTA DE CONTABILIDAD"  },
'dia_tdo': {type: DataTypes.CHAR(2),allowNull: false,defaultValue: ' ',comment: "DIARIO DE CONTABILIDAD"  },
'im0_tdo': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: "CUENTA DE CONTABILIDAD IMPUESTO 0"  },
'im1_tdo': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: "CUENTA DE CONTABILIDAD IMPUESTO 1"  },
'im2_tdo': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: "CUENTA DE CONTABILIDAD IMPUESTO 2"  },
'im3_tdo': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: "CUENTA DE CONTABILIDAD IMPUESTO 3"  },
'im4_tdo': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: "CUENTA DE CONTABILIDAD IMPUESTO 4"  },
'im5_tdo': {type: DataTypes.CHAR(19),allowNull: false,defaultValue: ' ',comment: "CUENTA DE CONTABILIDAD IMPUESTO 5"  },
'cal_tdo': {type: DataTypes.CHAR(8),allowNull: false,defaultValue: ' ',comment: "CLAVE DE ALTA"  },
'clm_tdo': {type: DataTypes.CHAR(8),allowNull: false,defaultValue: ' ',comment: "CLAVE DE MODIFICACCION"  },
'unn_unn': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "UNIDAD DE NEGOCIOS"  },
'nmo_tdo': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "No. DE MOVIMIENTOS PERMITIDOS"  },
'ser_tdo': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "SERIE DEL DOCUMENTO PARA USO DE FACTURACION ELECTRONICA"  },
'cer_cer': {type: DataTypes.CHAR(20),allowNull: false,defaultValue: ' ',comment: "NO DE CERTIFICADO DIGITAL"  },
'vce_tdo': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE VENCIMIENTO DEL CERTIFICADO DIGITAL"  },
'acf_tdo': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "A�O DE AUTORIZACION DE COMPROBANTES FISCALES DIGITALES"  },
'ncf_tdo': {type: DataTypes.CHAR(10),allowNull: false,defaultValue: ' ',comment: "NUMERO DE APROBACION DE COMPROBANTES FISCALES DIGITALES"  },
'icf_tdo': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "FOLIO INICIAL DE AUTORIZADO"  },
'fcf_tdo': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "FOLIO FINAL AUTORIZADO"  },
'tct_tdo': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "TAMA�O DE LA SUBCUENTA DONDE APLICAR EL ASIENTO CONTABLE"  },
'mpa_tdo': {type: DataTypes.DECIMAL(3,0),allowNull: false,defaultValue: '0',comment: "METODO DE PAGO SEGUN SAT"  },
'fac_tdo': {type: DataTypes.DATE,allowNull: false,comment: "FECHA DE APLICACION CONTABLE"  },
'tcp_tdo': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "TIPO DE CIERRE PARCIAL P=PERIODO; D=DIAS; N=NO AFECTA"  },
'dcp_tdo': {type: DataTypes.DECIMAL(2,0),allowNull: false,defaultValue: '0',comment: "DIAS EN CIERRE PARCIAL"  },
'pga_tdo': {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: '0',comment: "DOCUMENTO DE CONTROL PRESUPUESTAL DE GASTOS"  },
'dba_tdo': {type: DataTypes.CHAR(3),allowNull: false,defaultValue: ' ',comment: "TIPO DE DOCUMENTO BASE DE DEFINICION  PARA EMITIR EL CFDI"  },
'tip_cfd': {type: DataTypes.CHAR(2),allowNull: false,defaultValue: ' ',comment: "TIPO CFDI SEGUN TABLA DEL SAT"  },
'sta_tdo': {type: DataTypes.CHAR(1),allowNull: false,defaultValue: ' ',comment: "ESTATUS DEL DOCUMENTO A=ACTIVO L=LECTURA D=DESACTIVO"  },
'usu_usu': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO"  },
'usu_cre': {type: DataTypes.INTEGER,allowNull: true,defaultValue: '0',comment: "USUARIO CREADOR" },
'timestamp': {type: DataTypes.INTEGER,allowNull: true,comment: "MARCA ULTIMA ACTUALIZACION"  },
'tie_uac': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE LA ULTIMA ACTUALIZACION"  },
'tie_cre': {type: DataTypes.DATE,allowNull: true,comment: "FECHA DE CREACION" },
'key_pri': {type: DataTypes.INTEGER,allowNull: false,defaultValue: '0',comment: "LLAVE PRIMARIA PARA LA ACTUALIZACION DE VISTAS" , primaryKey: true },
createdAt: {field: 'tie_cre',type: DataTypes.DATE,},
updatedAt: {field: 'tie_uac',type: DataTypes.DATE,} 
  }, { tableName: 'man_cometdo'});
};


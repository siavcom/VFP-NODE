import db from '../models/siavcom.comenom.js'
import {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull } from 'graphql'
const User = new GraphQLObjectType({
    name: 'User',
    description: 'this represents a user',
    fields: () => {
      return {
        id: {
          type: GraphQLInt,
          resolve(user) {
            return user.id
          }
        },
        firstName: {
          type: GraphQLString,
          resolve(user) {
            return user.firstName
          }
        }
      }
    }
  })
  

  'suc_pge': {
    type: DataTypes.CHAR(3),
    allowNull: true,
    comment: "null"
  },
  'cop_nom': {
    type: DataTypes.CHAR(1),
    allowNull: true,
    comment: "null"
  },
  'cod_nom': {
    type: DataTypes.CHAR(12),
    allowNull: true,
    comment: "null"
  },
  'cli_nom': {
    type: DataTypes.CHAR(40),
    allowNull: true,
    comment: "null"
  },
  'nom_nom': {
    type: DataTypes.CHAR(135),
    allowNull: true,
    comment: "null"
  },
  'nre_nom': {
    type: DataTypes.CHAR(35),
    allowNull: true,
    comment: "null"
  },
  'rfc_nom': {
    type: DataTypes.CHAR(13),
    allowNull: true,
    comment: "null"
  },
  'dir_nom': {
    type: DataTypes.CHAR(60),
    allowNull: true,
    comment: "null"
  },
  'ext_nom': {
    type: DataTypes.CHAR(20),
    allowNull: true,
    comment: "null"
  },
  'int_nom': {
    type: DataTypes.CHAR(60),
    allowNull: true,
    comment: "null"
  },
  'col_nom': {
    type: DataTypes.CHAR(60),
    allowNull: true,
    comment: "null"
  },
  'pob_nom': {
    type: DataTypes.CHAR(40),
    allowNull: true,
    comment: "null"
  },
  'cpo_nom': {
    type: DataTypes.CHAR(5),
    allowNull: true,
    comment: "null"
  },
  'edo_edo': {
    type: DataTypes.CHAR(25),
    allowNull: true,
    comment: "null"
  },
  'pai_nom': {
    type: DataTypes.CHAR(20),
    allowNull: true,
    comment: "null"
  },
  'rut_rut': {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: "null"
  },
  'te1_nom': {
    type: DataTypes.CHAR(20),
    allowNull: true,
    comment: "null"
  },
  'te2_nom': {
    type: DataTypes.CHAR(20),
    allowNull: true,
    comment: "null"
  },
  'te3_nom': {
    type: DataTypes.CHAR(20),
    allowNull: true,
    comment: "null"
  },
  'fax_nom': {
    type: DataTypes.CHAR(15),
    allowNull: true,
    comment: "null"
  },
  'ncc_nom': {
    type: DataTypes.CHAR(35),
    allowNull: true,
    comment: "null"
  },
  'ema_nom': {
    type: DataTypes.CHAR(250),
    allowNull: true,
    comment: "null"
  },
  'pcc_nom': {
    type: DataTypes.CHAR(35),
    allowNull: true,
    comment: "null"
  },
  'tcc_nom': {
    type: DataTypes.CHAR(20),
    allowNull: true,
    comment: "null"
  },
  'ncp_nom': {
    type: DataTypes.CHAR(35),
    allowNull: true,
    comment: "null"
  },
  'pcp_nom': {
    type: DataTypes.CHAR(35),
    allowNull: true,
    comment: "null"
  },
  'tcp_nom': {
    type: DataTypes.CHAR(20),
    allowNull: true,
    comment: "null"
  },
  'dpa_nom': {
    type: DataTypes.CHAR(14),
    allowNull: true,
    comment: "null"
  },
  'hpa_nom': {
    type: DataTypes.CHAR(10),
    allowNull: true,
    comment: "null"
  },
  'dre_nom': {
    type: DataTypes.CHAR(14),
    allowNull: true,
    comment: "null"
  },
  'hre_nom': {
    type: DataTypes.CHAR(10),
    allowNull: true,
    comment: "null"
  },
  'ob1_nom': {
    type: DataTypes.CHAR(50),
    allowNull: true,
    comment: "null"
  },
  'ob2_nom': {
    type: DataTypes.CHAR(50),
    allowNull: true,
    comment: "null"
  },
  'ob3_nom': {
    type: DataTypes.CHAR(50),
    allowNull: true,
    comment: "null"
  },
  'ven_ven': {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: "null"
  },
  'lis_nom': {
    type: DataTypes.CHAR(1),
    allowNull: true,
    comment: "null"
  },
  'tip_tdn': {
    type: DataTypes.CHAR(2),
    allowNull: true,
    comment: "null"
  },
  'dcr_nom': {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: "null"
  },
  'lim_nom': {
    type: DataTypes.DOUBLE,
    allowNull: true,
    defaultValue: '0',
    comment: "null"
  },
  'mcr_nom': {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: "null"
  },
  'fea_nom': {
    type: DataTypes.DATE,
    allowNull: true,
    comment: "null"
  },
  'emb_nom': {
    type: DataTypes.CHAR(40),
    allowNull: true,
    comment: "null"
  },
  'cad_cad': {
    type: DataTypes.CHAR(10),
    allowNull: true,
    comment: "null"
  },
  'sta_nom': {
    type: DataTypes.CHAR(1),
    allowNull: true,
    comment: "null"
  },
  'dst_nom': {
    type: DataTypes.CHAR(60),
    allowNull: true,
    comment: "null"
  },
  'sa1_nom': {
    type: DataTypes.DECIMAL(15,4),
    allowNull: true,
    defaultValue: '0',
    comment: "null"
  },
  'sa2_nom': {
    type: DataTypes.DECIMAL(15,4),
    allowNull: true,
    defaultValue: '0',
    comment: "null"
  },
  'sa3_nom': {
    type: DataTypes.DECIMAL(15,4),
    allowNull: true,
    defaultValue: '0',
    comment: "null"
  },
  'sa4_nom': {
    type: DataTypes.DECIMAL(15,4),
    allowNull: true,
    defaultValue: '0',
    comment: "null"
  },
  'sa5_nom': {
    type: DataTypes.DECIMAL(15,4),
    allowNull: true,
    defaultValue: '0',
    comment: "null"
  },
  'dpp_nom': {
    type: DataTypes.DECIMAL(15,4),
    allowNull: true,
    defaultValue: '0',
    comment: "null"
  },
  'ecc_nom': {
    type: DataTypes.CHAR(1),
    allowNull: true,
    comment: "null"
  },
  'fdo_nom': {
    type: DataTypes.DATE,
    allowNull: true,
    comment: "null"
  },
  'elc_nom': {
    type: DataTypes.CHAR(1),
    allowNull: true,
    comment: "null"
  },
  'cco_nom': {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: "null"
  },
  'pas_nom': {
    type: DataTypes.CHAR(130),
    allowNull: true,
    comment: "null"
  },
  'log_nom': {
    type: DataTypes.CHAR(10),
    allowNull: true,
    comment: "null"
  },
  'tte_nom': {
    type: DataTypes.CHAR(3),
    allowNull: true,
    comment: "null"
  },
  'top_nom': {
    type: DataTypes.CHAR(3),
    allowNull: true,
    comment: "null"
  },
  'est_nom': {
    type: DataTypes.CHAR(1),
    allowNull: true,
    comment: "null"
  },
  'dvi_rut': {
    type: DataTypes.CHAR(20),
    allowNull: true,
    comment: "null"
  },
  'oru_rut': {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: "null"
  },
  'usu_usu': {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: "null"
  },
  'mpa_nom': {
    type: DataTypes.CHAR(20),
    allowNull: true,
    comment: "null"
  },
  'uso_sat': {
    type: DataTypes.CHAR(3),
    allowNull: true,
    comment: "null"
  },
  'fpa_sat': {
    type: DataTypes.CHAR(2),
    allowNull: true,
    comment: "null"
  },
  'tgf_nom': {
    type: DataTypes.CHAR(1),
    allowNull: true,
    comment: "null"
  },
  'rtg_nom': {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: "null"
  },
  'mpa_sat': {
    type: DataTypes.CHAR(3),
    allowNull: true,
    comment: "null"
  },
  'gln_nom': {
    type: DataTypes.CHAR(14),
    allowNull: true,
    comment: "null"
  },
  'timestamp': {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: "null"
  },
  'tie_uac': {
    type: DataTypes.DATE,
    allowNull: true,
//    defaultValue: sequelize.fn('now'),
    comment: "null"
  },
  'key_pri': {
    type: DataTypes.INTEGER,
    allowNull: false,
//    defaultValue: 'nextval(man_comenom_key_pri_seq::regclass)',
    comment: "null",
    primaryKey: true
  },

  'tie_uac': {
    type: DataTypes.DATE,
    allowNull: true,
//    defaultValue: sequelize.fn('now'),
    comment: "null"
  },
  createdAt: {
    field: 'tie_uac',
    type: DataTypes.DATE,
}

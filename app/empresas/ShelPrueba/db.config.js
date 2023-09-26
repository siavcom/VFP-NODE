module.exports = {
  host: "shelsql.freeddns.org",
  database: "SHELPRUEBA",
  dialect: "mssql",
  port: 1466,

  dialectOptions: {
    options: {
      requestTimeout: 300000
    }
  },

  pool: {
    max: 20, //numero de conexiones
    min: 0, //minimum number of connection in pool
    acquire: 6000, //maximum time, in milliseconds, that pool will try to get connection before throwing error
    idle: 36000 //maximum time, in milliseconds, that a connection can be idle before being released
  },
  // para que quite el error no existe la columna createdAt
  define: {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  },
 jasperServer: "http://176.16.200.20:3010", // JasperServer con todo y el puerto
};


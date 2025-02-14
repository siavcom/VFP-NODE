module.exports = {
  host: "localhost",
  database: "Condominios",
  dialect: "mssql",
  port: 1433,

  dialectOptions: {
    options: {
      requestTimeout: 300000,
      useUTC: true, // No quitarlo para que no convierta la fecha al capturar
    },
    timezone: '-01:00' // for writing to database
  },

  pool: {
    max: 100, //numero de conexiones
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


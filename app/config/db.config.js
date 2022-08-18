module.exports = {
    HOST: "176.16.200.20",
    USER: "sa",
    PASSWORD: "picone",
    DB: "Demo",
    dialect: "postgres",
    pool: {
      max: 5, //numero de conexiones
      min: 0, //minimum number of connection in pool
      acquire: 30000, //maximum time, in milliseconds, that pool will try to get connection before throwing error

      idle: 10000 //maximum time, in milliseconds, that a connection can be idle before being released
    },
    // para que quite el error no existe la columna createdAt
    define: {
      timestamps: false,
      createdAt: false,
      updatedAt: false
  }
  };
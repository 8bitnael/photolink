const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions: {
    ssl: true
  },
  ssl: true,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//**qui viene creata la tabella aggiungendo le colonne created e updated da Sequelize**
db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.photolinks = require("./photolink.model.js")(sequelize, Sequelize);

//**Nome della tabella che verrà creata**
//db.serietvs = require("./serietv.model.js")(sequelize, Sequelize);
 
module.exports = db;

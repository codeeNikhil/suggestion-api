'use strict';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require(__dirname + '/../config/config.json');
const db = {};
const databases = Object.keys(config);

/** Add Databases**/
for (let i = 0; i < databases.length; ++i) {
  let database = databases[i];
  let dbPath = config[database];
  db[database] = new Sequelize(dbPath.database, dbPath.username, dbPath.password, dbPath);

  /**Add the Database Models**/
  fs
    .readdirSync(__dirname + '/')
    .filter(file =>
      (file.indexOf('.') !== 0) &&
      (file !== basename) &&
      (file.slice(-3) === '.js'))
    .forEach(file => {
      const model = require(path.join(__dirname + '/', file))(db[database], Sequelize.DataTypes)

      db[model.name] = model;
    });

}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = db[databases[0]];
db.Sequelize = Sequelize;

module.exports = db;
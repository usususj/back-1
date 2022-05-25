var fs = require("fs");
const path = require('path');
const Sequelize = require('sequelize');
const User = require('./user');
const wordDict = require('./WordDict')

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
db.wordDict = wordDict;

User.init(sequelize);
wordDict.init(sequelize);

module.exports = db;
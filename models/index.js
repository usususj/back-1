var fs = require("fs");
const path = require('path');
const Sequelize = require('sequelize');
const User = require('./user');
const VIDEO = require('./video')

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
db.VIDEO = VIDEO;

User.init(sequelize);
VIDEO.init(sequelize);

module.exports = db;
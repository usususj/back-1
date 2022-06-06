var fs = require("fs");
const path = require('path');
const Sequelize = require('sequelize');
const User = require('./user');
const wordDict = require('./WordDict');
const wordList=require('./WordList');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

User.hasMany(wordList{
    foreignKey:''
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
db.wordDict = wordDict;
db.wordList=wordList;

User.init(sequelize);
wordDict.init(sequelize);
wordList.init(sequelize);

module.exports = db;
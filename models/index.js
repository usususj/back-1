var fs = require("fs");
const path = require('path');
const Sequelize = require('sequelize');
const User = require('./user');
const WordDict = require("./WordDict");
const wordDict = require('./WordDict');
const wordList=require('./WordList');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

User.hasMany(wordList,{
    foreignKey:'UserId',
    allowNull:false,
    constraints: true,
    onDelete: 'cascade',
    onUpdate: 'cascade',
})
wordList.belongsTo(User,{
    foreignKey: 'UserId'
})

WordDict.hasMany(wordList,{
    foreignKey:'Word',
    allowNull: false,
    constraints: true,
    onDelete: 'cascade',
    onUpdate: 'cascade'
})
wordList.belongsTo(WordDict,{
    foreignKey: 'Word'
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
var fs = require("fs");
const path = require('path');
const Sequelize = require('sequelize');
const User = require('./user');
const WordDict = require("./WordDict");
const wordList=require('./WordList');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
db.wordDict = WordDict;
db.wordList=wordList;

User.init(sequelize);
WordDict.init(sequelize);
wordList.init(sequelize);


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

module.exports = {db,sequelize,Sequelize,wordList,WordDict};
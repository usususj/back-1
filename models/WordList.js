const Sequelize = require('sequelize');
module.exports = class WordList extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
        star:{
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
        }
        
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'VIDEO',
      tableName: 'video',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
};

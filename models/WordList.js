const Sequelize = require('sequelize');
module.exports = class WordList extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
        Word: {
          type: Sequelize.STRING(50),
          allowNull: false,
          onDelete: 'cascade',
          onUpdate: 'cascade',

        },
        UserID: {
          type: Sequelize.STRING(300),
          allowNull: false,
          onDelete: 'cascade',
          onUpdate: 'cascade',
        },
        wordImg: {
          type: Sequelize.STRING(300),
          allowNull: true,
          onDelete: 'cascade',
          onUpdate: 'cascade',
        },
        videoURL: {
          type: Sequelize.FLOAT,
          allowNull: true,
          onDelete: 'cascade',
          onUpdate: 'cascade',
        },
        star:{

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

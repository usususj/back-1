const Sequelize = require('sequelize');
module.exports = class WordDict extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
        Word: {
            type: Sequelize.STRING(50),
            allowNull: false,
            primaryKey: true,
        },
        videoURL: {
          type: Sequelize.STRING(300),
          allowNull: false,
        },
        wordImg: {
          type: Sequelize.STRING(300),
          allowNull: true,
        },
        Motion: {
          type: Sequelize.FLOAT,
          allowNull: true,
        },
        
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'WordDict',
      tableName: 'WordDict',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
};

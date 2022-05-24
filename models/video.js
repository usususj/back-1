const Sequelize = require('sequelize');
module.exports = class VIDEO extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
        VideoID: {
            autoIncrement: true,
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        videoname:{
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        videoURL: {
          type: Sequelize.STRING(300),
          allowNull: false,
        },
        Motion: {
          type: Sequelize.FLOAT(100),
          allowNull: false,
        },
        
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

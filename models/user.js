module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
        UserID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        },
        email: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING(30),
          allowNull: true,
        },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'User',
      tableName: 'user',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
};

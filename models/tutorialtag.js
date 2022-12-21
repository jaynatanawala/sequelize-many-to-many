'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tutorialTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tutorialTag.init({
    tagId: DataTypes.INTEGER,
    tutorialId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tutorialTag',
  });
  return tutorialTag;
};
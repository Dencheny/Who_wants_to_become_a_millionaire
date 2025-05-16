"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      // Определение ассоциаций
      Question.belongsTo(models.Category, {
        foreignKey: "categoryId",
        as: "category",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Question.hasMany(models.Answer, {
        foreignKey: "questionId",
        as: "answers",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }

  Question.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Categories",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Question",
    }
  );

  return Question;
};

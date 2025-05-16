"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate(models) {
      // Определение ассоциации
      Answer.belongsTo(models.Question, {
        foreignKey: "questionId",
        as: "question", 
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }

  Answer.init(
    {
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      guess: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      questionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Questions",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Answer",
    }
  );

  return Answer;
};

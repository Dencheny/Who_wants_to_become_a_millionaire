"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      // Определение ассоциации
      Category.hasMany(models.Question, {
        foreignKey: "categoryId",
        as: "questions",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }

  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false, 
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );

  return Category;
};

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Получаем ID всех вопросов
    const questions = await queryInterface.sequelize.query(
      'SELECT id FROM "Questions" ORDER BY id;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    await queryInterface.bulkInsert(
      "Answers",
      [
        // Ответы для вопросов JavaScript (первые 10 вопросов)
        {
          text: "хуки",
          guess: true,
          questionId: questions[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "апперкоты",
          guess: false,
          questionId: questions[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "муширо маваши",
          guess: false,
          questionId: questions[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "кроссы",
          guess: false,
          questionId: questions[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          text: "pending",
          guess: false,
          questionId: questions[1].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "fulfilled",
          guess: false,
          questionId: questions[1].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "waiting",
          guess: true,
          questionId: questions[1].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "rejected",
          guess: false,
          questionId: questions[1].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // ... аналогично для остальных вопросов JavaScript

        // Ответы для вопросов про еноты (следующие 10 вопросов)
        {
          text: "людей",
          guess: false,
          questionId: questions[10].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "мусор",
          guess: false,
          questionId: questions[10].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "траву",
          guess: false,
          questionId: questions[10].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "всеядные",
          guess: true,
          questionId: questions[10].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          text: "учатся в Эльбрусе",
          guess: false,
          questionId: questions[11].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "тусят по клубам",
          guess: false,
          questionId: questions[11].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "дневной",
          guess: false,
          questionId: questions[11].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "ночной",
          guess: true,
          questionId: questions[11].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // ... аналогично для остальных вопросов про еноты

        // Ответы для вопросов про футбол (последние 10 вопросов)
        {
          text: "Челси",
          guess: true,
          questionId: questions[20].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Манчестер Сити",
          guess: false,
          questionId: questions[20].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Ливерпуль",
          guess: false,
          questionId: questions[20].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Бавария",
          guess: false,
          questionId: questions[20].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          text: "Роналду",
          guess: false,
          questionId: questions[21].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Мартинес",
          guess: false,
          questionId: questions[21].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Мирослав Клозе",
          guess: true,
          questionId: questions[21].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Пеле",
          guess: false,
          questionId: questions[21].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // ... аналогично для остальных вопросов про футбол
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Answers", null, {});
  },
};

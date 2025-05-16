"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        // JavaScript вопросы
        {
          title:
            "Нововведение в React 16.8, которое позволяет использовать состояние и другие возможности React без написания классов",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Какое состояние Промиса ошибочно",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Что выведет `console.log(typeof NaN)`?",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Какой оператор проверяет равенство и по значению, и по типу?",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Какой из этих методов НЕ является методом Promise?",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Какой метод преобразует JSON-строку в JavaScript-объект?",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            "Какой метод массива возвращает новый массив, отфильтрованный по условию?",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Что делает оператор `??` в JavaScript?",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            "Какой из этих вариантов НЕ является способом объявления переменной?",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            "Какой метод позволяет вызвать функцию только после истечения указанного времени?",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Еноты вопросы
        {
          title: "Что едят еноты?",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Какой образ жизни ведут еноты?",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Еноты впадают в спячку?",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Еноты могут бегать со скоростью до 25 км в час?",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Еноты любят плавать?",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Свое потомство самка кормит 24 раза в день?",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Еноты – отдаленные родственники медведей?",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Почему еноты моют пищу перед едой?",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Сколько пальцев на передних лапах енота?",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Как называется детёныш енота?",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Футбол вопросы
        {
          title: "Какой клуб выиграл Лигу чемпионов УЕФА в 2021 году?",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            "Кто является лучшим бомбардиром в истории чемпионатов мира по футболу?",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Какой футболист известен под прозвищем 'Пеле'?",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            "Какой турнир считается самым престижным в международном футболе?",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            "Какой клуб является самым титулованным в истории английской Премьер-лиги?",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Кто выиграл Золотой мяч в 2021 году?",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Какой стадион является домашним для клуба 'Барселона'?",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            "Какой игрок забил самый быстрый гол в истории чемпионатов мира?",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Какой клуб выиграл Кубок мира среди клубов ФИФА в 2022 году?",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            "Кто является капитаном сборной Бразилии на чемпионате мира 2022 года?",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};

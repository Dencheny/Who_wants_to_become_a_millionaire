# Гайд для проекта "Кто хочет стать миллионером", включает:

* Структуру проекта
* Используемую базу данных PostgreSQL
* Команды установки
* Библиотеки и их назначение
* Распределение задач по команде (4 человека)
* Дедлайны в часах
* Указания по фонам и MUI

---

## 🧠 Кто хочет стать миллионером — Fullstack проект

> Онлайн-версия шоу "Кто хочет стать миллионером" с мемами, звуками и веселыми визуалами.

---

### 🧱 Стек технологий

* **Frontend**: React + MUI
* **Backend**: Node.js + Express
* **БД**: PostgreSQL
* **ORM**: Sequelize
* **Стилизация**: MUI, кастомные фоны и мемы
* **Аутентификация**: JWT + bcrypt

---

## 📁 Структура проекта

```
millionaire-app/
│
├── client/                     # React frontend
│   ├── public/                 # Фоны, мемы
│   │   ├── memeFalse.jpeg
│   │   ├── geme.jpg
│   │   └── [ещё два фона].jpg
│   ├── src/
│   │   ├── components/         # Компоненты интерфейса (вопрос, ответы, мемы, итог)
│   │   ├── pages/              # Страницы: регистрация, выбор темы, игра, финал
│   │   ├── hooks/              # Кастомные хуки
│   │   ├── api/                # Запросы к backend
│   │   ├── App.js              # Роутинг
│   │   └── index.js
│
├── server/                    # Node.js backend
│   ├── controllers/           # Логика (игра, регистрация)
│   ├── models/                # Sequelize-модели
│   ├── routes/                # API-маршруты
│   ├── middleware/            # JWT, ошибки
│   ├── utils/                 # Вспомогательные функции
│   ├── config/                # Настройки Sequelize
│   └── server.js              # Точка входа
│
├── .env
├── README.md
└── package.json
```

---

## 🛠 Установка и запуск

### 1. PostgreSQL

Установите PostgreSQL и создайте БД:

```bash
# Установка PostgreSQL (если нет)
sudo apt install postgresql postgresql-contrib

# Вход в psql
sudo -u postgres psql

# Команды внутри psql:
CREATE DATABASE millionaire;
CREATE USER million_user WITH ENCRYPTED PASSWORD 'secret';
GRANT ALL PRIVILEGES ON DATABASE millionaire TO million_user;
\q
```

### 2. Backend

```bash
cd server
npm init -y
npm install express sequelize pg pg-hstore cors dotenv bcrypt jsonwebtoken

# Для запуска сервера:
node server.js
```

### 3. Frontend

```bash
cd client
npx create-react-app .
npm install @mui/material @emotion/react @emotion/styled axios react-router-dom

# Запуск клиента
npm start
```

---

## 📦 Библиотеки и зачем они нужны

| Библиотека            | Назначение                   |
| --------------------- | ---------------------------- |
| express               | Сервер и маршруты            |
| sequelize             | ORM для PostgreSQL           |
| pg, pg-hstore         | Драйверы PostgreSQL          |
| bcrypt                | Хеширование паролей          |
| jsonwebtoken          | Аутентификация через JWT     |
| cors                  | Кросс-доменные запросы       |
| dotenv                | Переменные окружения         |
| axios                 | HTTP-запросы с клиента       |
| react-router-dom      | Навигация по страницам       |
| @mui/material         | UI-компоненты от Material UI |
| @emotion/styled/react | Стилизация компонентов MUI   |

---

## 👨‍💻 Распределение задач

### Участник 1 — Бэкенд (регистрация, игра)

* Настройка сервера (`server.js`)
* Модели: User, Question
* Роуты: `/register`, `/login`, `/theme`, `/game`
* JWT аутентификация
* Дедлайн: **8 часов**

### Участник 2 — База данных и логика игры

* Создание схем PostgreSQL (регистрация, темы, вопросы, мемы)
* Работа с Sequelize
* Бизнес-логика: lifelines, очки, состояния игры
* Дедлайн: **6 часов**

### Участник 3 — Frontend (игровое поле)

* Страницы:

  * `/` — регистрация
  * `/theme` — выбор темы
  * `/theme/game` — поле с вопросами
  * `/theme/game/score` — очки
  * `/theme/game/meme` — мем после проигрыша
  * `/theme/game/finn` — финал
* Компоненты: QuestionCard, Lifelines, AnswerButtons
* Дедлайн: **10 часов**

### Участник 4 — UI/UX и оформление

* Подключение **MUI** и кастомизация тем
* Адаптация под мобилки
* Мемы и фоны:

  * `geme.jpg`
  * `memeFalse.jpeg`
  * ещё 2 кастомные фона
* Анимации (переходы между вопросами, мем)
* Дедлайн: **6 часов**

---

## ✅ Мини-план

1. Регистрация пользователя → `/`
2. Выбор темы → `/theme`
3. Вопросы и lifeline → `/theme/game`
4. Подсчет очков → `/theme/game/score`
5. Мем с поражением → `/theme/game/meme`
6. Конец игры → `/theme/game/finn`

---
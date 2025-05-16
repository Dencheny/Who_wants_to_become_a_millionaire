const QuestionService = require("../services/Question.service");
const formatResponse = require("../utils/formatResponse"); // функция форматирования ответа
const  isValidId  = require("../utils/isValidId"); // функция проверки валидности id

class QuestionController {
  static async getAllQuestions(req, res) {
    try {
      const questions = await QuestionService.getAllQuestions();

      if (!questions.length) {
        return res.status(200).json(formatResponse(200, "No data"));
      }

      return res.status(200).json(formatResponse(200, "success", questions));
    } catch ({ message }) {
      console.error("QuestionController.getAllQuestions error:", message);
      return res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async getQuestionById(req, res) {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(400).json(formatResponse(400, "Invalid question id"));
    }

    try {
      const question = await QuestionService.getQuestionById(+id);

      if (!question) {
        return res
          .status(404)
          .json(formatResponse(404, `Question with id ${id} not found`));
      }

      return res.status(200).json(formatResponse(200, "success", question));
    } catch ({ message }) {
      console.error("QuestionController.getQuestionById error:", message);
      return res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async getQuestionsByCategory(req, res) {
    const { categoryId } = req.params;

    if (!isValidId(categoryId)) {
      return res.status(400).json(formatResponse(400, "Invalid category id"));
    }

    try {
      const questions = await QuestionService.getQuestionsByCategory(
        +categoryId
      );

      if (!questions.length) {
        return res.status(200).json(formatResponse(200, "No data"));
      }

      return res.status(200).json(formatResponse(200, "success", questions));
    } catch ({ message }) {
      console.error(
        "QuestionController.getQuestionsByCategory error:",
        message
      );
      return res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async createQuestion(req, res) {
    const { title, categoryId } = req.body;

    const { isValid, error } = QuestionValidator.validate({
      title,
      categoryId,
    });
    if (!isValid) {
      return res
        .status(400)
        .json(formatResponse(400, "Validation error", null, error));
    }

    try {
      const newQuestion = await QuestionService.createQuestion({
        title,
        categoryId,
      });
      if (!newQuestion) {
        return res
          .status(500)
          .json(formatResponse(500, "Failed to create new Question"));
      }

      return res.status(201).json(formatResponse(201, "success", newQuestion));
    } catch ({ message }) {
      console.error("QuestionController.createQuestion error:", message);
      return res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async updateQuestion(req, res) {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(400).json(formatResponse(400, "Invalid question id"));
    }

    const { title, categoryId } = req.body;
    const { isValid, error } = QuestionValidator.validate({
      title,
      categoryId,
    });
    if (!isValid) {
      return res
        .status(400)
        .json(formatResponse(400, "Validation error", null, error));
    }

    try {
      const updatedQuestion = await QuestionService.updateQuestion(+id, {
        title,
        categoryId,
      });
      if (!updatedQuestion) {
        return res
          .status(404)
          .json(formatResponse(404, `Question with id ${id} not found`));
      }

      return res
        .status(200)
        .json(formatResponse(200, "success", updatedQuestion));
    } catch ({ message }) {
      console.error("QuestionController.updateQuestion error:", message);
      return res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async deleteQuestion(req, res) {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(400).json(formatResponse(400, "Invalid question id"));
    }

    try {
      const deletedQuestion = await QuestionService.deleteQuestion(+id);
      if (!deletedQuestion) {
        return res
          .status(404)
          .json(formatResponse(404, `Question with id ${id} not found`));
      }

      return res
        .status(200)
        .json(formatResponse(200, "success", deletedQuestion));
    } catch ({ message }) {
      console.error("QuestionController.deleteQuestion error:", message);
      return res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }
}

module.exports = QuestionController;

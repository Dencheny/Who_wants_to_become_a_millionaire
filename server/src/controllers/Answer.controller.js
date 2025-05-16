const AnswerService = require("../services/Answer.service");
const formatResponse = require("../utils/formatResponse"); // функция форматирования ответа
const { isValidId } = require("../utils/isValidId"); // функция проверки валидности id

class AnswerController {
  static async getAllAnswers(req, res) {
    try {
      const answers = await AnswerService.getAllAnswers();

      if (!answers.length) {
        return res.status(200).json(formatResponse(200, "No data"));
      }

      return res.status(200).json(formatResponse(200, "success", answers));
    } catch ({ message }) {
      console.error("AnswerController.getAllAnswers error:", message);
      return res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async getAnswerById(req, res) {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(400).json(formatResponse(400, "Invalid answer id"));
    }

    try {
      const answer = await AnswerService.getAnswerById(+id);

      if (!answer) {
        return res
          .status(404)
          .json(formatResponse(404, `Answer with id ${id} not found`));
      }

      return res.status(200).json(formatResponse(200, "success", answer));
    } catch ({ message }) {
      console.error("AnswerController.getAnswerById error:", message);
      return res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async getAnswersByCategory(req, res) {
    const { categoryId } = req.params;

    if (!isValidId(categoryId)) {
      return res.status(400).json(formatResponse(400, "Invalid category id"));
    }

    try {
      const answers = await AnswerService.getAnswersByCategory(+categoryId);

      if (!answers.length) {
        return res.status(200).json(formatResponse(200, "No data"));
      }

      return res.status(200).json(formatResponse(200, "success", answers));
    } catch ({ message }) {
      console.error("AnswerController.getAnswersByCategory error:", message);
      return res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async createAnswer(req, res) {
    const { text, guess, questionId } = req.body;

    const { isValid, error } = AnswerValidator.validate({
      text,
      guess,
      questionId,
    });
    if (!isValid) {
      return res
        .status(400)
        .json(formatResponse(400, "Validation error", null, error));
    }

    try {
      const newAnswer = await AnswerService.createAnswer({
        text,
        guess,
        questionId,
      });
      if (!newAnswer) {
        return res
          .status(500)
          .json(formatResponse(500, "Failed to create new Answer"));
      }

      return res.status(201).json(formatResponse(201, "success", newAnswer));
    } catch ({ message }) {
      console.error("AnswerController.createAnswer error:", message);
      return res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async updateAnswer(req, res) {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(400).json(formatResponse(400, "Invalid answer id"));
    }

    const { text, guess, questionId } = req.body;
    const { isValid, error } = AnswerValidator.validate({
      text,
      guess,
      questionId,
    });
    if (!isValid) {
      return res
        .status(400)
        .json(formatResponse(400, "Validation error", null, error));
    }

    try {
      const updatedAnswer = await AnswerService.updateAnswer(+id, {
        text,
        guess,
        questionId,
      });
      if (!updatedAnswer) {
        return res
          .status(404)
          .json(formatResponse(404, `Answer with id ${id} not found`));
      }

      return res
        .status(200)
        .json(formatResponse(200, "success", updatedAnswer));
    } catch ({ message }) {
      console.error("AnswerController.updateAnswer error:", message);
      return res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async deleteAnswer(req, res) {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(400).json(formatResponse(400, "Invalid answer id"));
    }

    try {
      const deletedAnswer = await AnswerService.deleteAnswer(+id);
      if (!deletedAnswer) {
        return res
          .status(404)
          .json(formatResponse(404, `Answer with id ${id} not found`));
      }

      return res
        .status(200)
        .json(formatResponse(200, "success", deletedAnswer));
    } catch ({ message }) {
      console.error("AnswerController.deleteAnswer error:", message);
      return res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }
}

module.exports = AnswerController;

const { Answer, Question, Category } = require("../../db/models");

class AnswerService {
  async getAllAnswers() {
    return await Answer.findAll();
  }

  async getAnswerById(id) {
    return await Answer.findByPk(id);
  }

  async getAnswersByCategory(categoryId) {
    return await Answer.findAll({
      include: {
        model: Question,
        as: "question",
        where: { categoryId },
        include: { model: Category, as: "category" },
      },
    });
  }

  async createAnswer(data) {
    return await Answer.create(data);
  }

  async updateAnswer(id, data) {
    const answerToUpdate = await Answer.findByPk(id);
    if (answerToUpdate) {
      answerToUpdate.text = data.text;
      answerToUpdate.guess = data.guess;
      answerToUpdate.questionId = data.questionId;
      await answerToUpdate.save();
      return answerToUpdate;
    }
    throw new Error("Answer not found");
  }

  async deleteAnswer(id) {
    const answerToDelete = await Answer.findByPk(id);
    if (answerToDelete) {
      await answerToDelete.destroy();
      return answerToDelete;
    }
    throw new Error("Answer not found");
  }
}

module.exports = new AnswerService();


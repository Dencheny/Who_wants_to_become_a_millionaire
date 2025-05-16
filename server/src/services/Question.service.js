const { Category, Question, Answer } = require("../models");

class QuestionService {
  async getAllQuestions() {
    return await Question.findAll({
      include: [
        { model: Category, as: "category" },
        { model: Answer, as: "answers" },
      ],
    });
  }

  async getQuestionById(id) {
    return await Question.findByPk(id, {
      include: [
        { model: Category, as: "category" },
        { model: Answer, as: "answers" },
      ],
    });
  }

  async getQuestionsByCategory(categoryId) {
    return await Question.findAll({
      where: { categoryId },
      include: [
        { model: Category, as: "category" },
        { model: Answer, as: "answers" },
      ],
    });
  }

  async createQuestion(data) {
    return await Question.create(data);
  }

  async updateQuestion(id, data) {
    const questionToUpdate = await Question.findByPk(id);
    if (questionToUpdate) {
      questionToUpdate.title = data.title;
      questionToUpdate.categoryId = data.categoryId;
      await questionToUpdate.save();
      return questionToUpdate;
    }
    throw new Error("Question not found");
  }

  async deleteQuestion(id) {
    const questionToDelete = await Question.findByPk(id);
    if (questionToDelete) {
      await questionToDelete.destroy();
      return questionToDelete;
    }
    throw new Error("Question not found");
  }
}

module.exports = new QuestionService();


const router = require('express').Router();
const QuestionController = require('../controllers/Question.controller');

router
  .get('/', QuestionController.getAllQuestions)
  .get('/:id', QuestionController.getQuestionById)
  .get('/category/:categoryId', QuestionController.getQuestionById)
  .post('/', QuestionController.createQuestion)
  .put('/:id', QuestionController.updateQuestion)
  .delete('/:id', QuestionController.deleteQuestion);

module.exports = router;
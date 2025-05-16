const router = require("express").Router();
const AnswerController = require("../controllers/Answer.controller");

router
  .get("/", AnswerController.getAllAnswers)
  .get("/:id", AnswerController.getAnswerById)
  .get("/category/:categoryId", AnswerController.getAnswersByCategory)
  .post("/", AnswerController.createAnswer)
  .put("/:id", AnswerController.updateAnswer)
  .delete("/:id", AnswerController.deleteAnswer);

module.exports = router;

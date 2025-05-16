const router = require("express").Router();
const authRoutes = require("./auth.routes");
const categoryRoutes = require("./category.routes");
const questionRoutes = require("./question.routes")
const answerRoutes = require("./answer.routes");
const formatResponse = require("../utils/formatResponse");

router.use("/auth", authRoutes);
router.use("/categories", categoryRoutes);
router.use("/questions", questionRoutes);
router.use("/answers", answerRoutes);

router.use((req, res) => {
  res.status(404).json(formatResponse(404, "Not found"));
});

module.exports = router;
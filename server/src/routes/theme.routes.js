const router = require("express").Router();
const ThemeController = require("../controllers/Theme.controller");
const formatResponse = require("../utils/formatResponse");

router.get("/theme", ThemeController.getAll);
router.get("/theme/:geme", ThemeController.getAll);

router.get("*", (req, res) =>
  res.status(404).json(formatResponse(200, "OK"))
);

module.exports = router;
const router = require("express").Router();
const AuthController = require("../controllers/Auth.controller");
const verifyAccessToken = require("../middleware/verifyAccessToken");
const formatResponse = require("../utils/formatResponse");

router.post("/signup", AuthController.signUp);
router.post("/signin", AuthController.signIn);
router.post("/logout", AuthController.signOut);

router.get("/me", verifyAccessToken, (req, res) =>
  res.status(200).json(formatResponse(200, "OK", res.locals.user))
);

module.exports = router;

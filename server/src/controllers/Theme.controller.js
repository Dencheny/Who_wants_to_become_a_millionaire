const formatResponse = require("../utils/formatResponse");

class ThemeController {
  static async getAll(req, res) {
    try {
      res.status(200).json(
        formatResponse(200, "Successfully")
      );
    } catch (error) {
      console.error(error.message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, error.message));
    }
  }
}

module.exports = ThemeController;

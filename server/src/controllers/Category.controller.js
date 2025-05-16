const CategoryService = require('../services/Category.service');
const isValidId = require('../utils/isValidId');
const formatResponse = require('../utils/formatResponse');

class CategoryController {
  static async getAllCategories(req, res) {
    try {
      const categories = await CategoryService.getAllCategories();

      if (categories.length === 0) {
        return res.status(200).json(formatResponse(200, 'No data'));
      }

      return res.status(200).json(formatResponse(200, 'success', categories));
    } catch ({ message }) {
      console.error('=====>>>>', message);
      return res
        .status(500)
        .json(formatResponse(500, 'Internal server error', null, message));
    }
  }

  static async getCategoryById(req, res) {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(400).json(formatResponse(400, 'Invalid category id'));
    }
    try {
      const category = await CategoryService.getCategoryById(+id);

      if (!category) {
        return res
          .status(404)
          .json(formatResponse(404, `Category with id ${id} not found`));
      }

      return res.status(200).json(formatResponse(200, 'success', category));
    } catch ({ message }) {
      console.error('=====>>>>', message);
      return res
        .status(500)
        .json(formatResponse(500, 'Internal server error', null, message));
    }
  }

  static async createCategory(req, res) {
    const { name } = req.body;

    if (!name) {
      return res
        .status(400)
        .json(formatResponse(400, 'Name is required'));
    }

    try {
      const newCategory = await CategoryService.createCategory({ name });

      if (!newCategory) {
        return res
          .status(500)
          .json(formatResponse(500, 'Failed to create new Category'));
      }

      return res.status(201).json(formatResponse(201, 'success', newCategory));
    } catch ({ message }) {
      console.error('=====>>>>', message);
      return res
        .status(500)
        .json(formatResponse(500, 'Internal server error', null, message));
    }
  }

  static async updateCategory(req, res) {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(400).json(formatResponse(400, 'Invalid category id'));
    }

    const { name } = req.body;

    if (!name) {
      return res
        .status(400)
        .json(formatResponse(400, 'Name is required'));
    }

    try {
      const updatedCategory = await CategoryService.updateCategory(+id, { name });

      if (!updatedCategory) {
        return res
          .status(404)
          .json(formatResponse(404, `Category with id ${id} not found`));
      }

      return res.status(200).json(formatResponse(200, 'success', updatedCategory));
    } catch ({ message }) {
      console.error('=====>>>>', message);
      return res
        .status(500)
        .json(formatResponse(500, 'Internal server error', null, message));
    }
  }

  static async deleteCategory(req, res) {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(400).json(formatResponse(400, 'Invalid category id'));
    }

    try {
      const deletedCategory = await CategoryService.deleteCategory(+id);

      if (!deletedCategory) {
        return res
          .status(404)
          .json(formatResponse(404, `Category with id ${id} not found`));
      }

      return res.status(200).json(formatResponse(200, 'success', deletedCategory));
    } catch ({ message }) {
      console.error('=====>>>>', message);
      return res
        .status(500)
        .json(formatResponse(500, 'Internal server error', null, message));
    }
  }
}

module.exports = CategoryController;
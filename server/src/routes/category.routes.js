const router = require('express').Router();
const CategoryController = require('../controllers/Category.controller');

router
  .get('/', CategoryController.getAllCategories)
  .get('/:id', CategoryController.getCategoryById)
  .post('/', CategoryController.createCategory)
  .put('/:id', CategoryController.updateCategory)
  .delete('/:id', CategoryController.deleteCategory);

module.exports = router;
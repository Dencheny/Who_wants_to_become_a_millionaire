const { Category } = require("../../db/models");

class CategoryService {
  async getAllCategories() {
    return await Category.findAll();
  }

  async getCategoryById(id) {
    return await Category.findByPk(id);
  }

  async createCategory(data) {
    return await Category.create(data);
  }

  async updateCategory(id, data) {
    const categoryToUpdate = await Category.findByPk(id);
    if (categoryToUpdate) {
      categoryToUpdate.name = data.name;
      await categoryToUpdate.save();
      return categoryToUpdate;
    }
    throw new Error("Category not found");
  }

  async deleteCategory(id) {
    const categoryToDelete = await Category.findByPk(id);
    if (categoryToDelete) {
      await categoryToDelete.destroy();
      return categoryToDelete;
    }
    throw new Error("Category not found");
  }
}

module.exports = new CategoryService();


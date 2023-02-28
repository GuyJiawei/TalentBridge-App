const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Accounting',
  },
  {
    category_name: 'Administration',
  },
  {
    category_name: 'Construction',
  },
  {
    category_name: 'Engineering',
  },
  {
    category_name: 'IT',
  },
  {
    category_name: 'Healthcare',
  },
  {
    category_name: 'Logistic',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
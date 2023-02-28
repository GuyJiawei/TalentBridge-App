const seedCategories = require('./category-seeds');
const seedJobs = require('./jobs-seeds');
const seedUser = require('./user-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedJobs();
  console.log('\n----- Jobs SEEDED -----\n');

  await seedUser();
  console.log('\n----- User SEEDED -----\n');

  

  process.exit(0);
};

seedAll();
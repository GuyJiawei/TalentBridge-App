const { UserJobs } = require('../models');

const userJobData = [
    {
        jobs_id: 1,
        user_id: 2,
      },
      {
        jobs_id: 3,
        user_id: 1,
      },
      {
        jobs_id: 1,
        user_id: 4,
      },
      {
        jobs_id: 2,
        user_id: 4,
      },
      
];

const seedUserJob = () => UserJobs.bulkCreate(userJobData);

module.exports = seedUserJob;
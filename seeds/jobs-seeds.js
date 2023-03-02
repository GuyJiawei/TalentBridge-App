const { Jobs } = require('../models');

const jobData = [
  {
    job_name: 'Mechanical Engineer',
    salary: 120000,
    location: 'NSW',
    category_id:4
  },
  {
    job_name: 'Nurse',
    salary: 70000,
    location: 'VIC',
    category_id:6
  },
  {
    job_name: 'Full Stack Developer',
    salary: 245000,
     location: 'NSW',
    category_id:5
  },
  {
    job_name: 'Senior Developer',
    salary: 120000,
    location: 'VIC',
    category_id:5
  }
  
];

const seedJobs = () => Jobs.bulkCreate(jobData);

module.exports = seedJobs;
const { Jobs } = require('../models');

const jobData = [
  {
    job_name: 'Mechanical Engineer',
    salary: 120000,
    location: 'NSW',
    category_id:4,
    description:'We are looking for an experienced Full Stack Developer to join our fast paced and innovative team based in Pemulwuy'
  },
  {
    job_name: 'Nurse',
    salary: 70000,
    location: 'VIC',
    category_id:6,
    description:'IHMS is currently recruiting for a qualified RN or EEN to assist us at our clinic on Christmas Island. Minimum 8 week contract-possible extension'
  },
  {
    job_name: 'Full Stack Developer',
    salary: 245000,
     location: 'NSW',
    category_id:5,
    description:'IHMS is currently recruiting for a qualified RN or EEN to assist us at our clinic on Christmas Island. Minimum 8 week contract-possible extension'
  },
  {
    job_name: 'Senior Developer',
    salary: 120000,
    location: 'VIC',
    category_id:5,
    description:'Centre Administration Officer - PA to Governor, Clerk Grade 3/4, Silverwater'
  }
  
];

const seedJobs = () => Jobs.bulkCreate(jobData);

module.exports = seedJobs;
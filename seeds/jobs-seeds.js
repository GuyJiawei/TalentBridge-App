const { Jobs } = require('../models');

const jobData = [
  {
    job_name: 'Mechanical Engineer',
    salary: 120000,
    location: 'NSW',
    category_id:4,
    description:'An opportunity exist for an experienced Mechanical Engineer to join our Engineering Team in Sydney. Your day could include performing engineering assessment and analysis on design, project management of engineering contracts, fabrication and operation of equipment.'
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
    description:'As the sole web developer, you will work closely with our product and design teams to develop and implement responsive, scalable, and interactive web solutions.'
  },
  {
    job_name: 'Senior Developer',
    salary: 120000,
    location: 'VIC',
    category_id:5,
    description:'The ideal candidate will have experience in the video game industry, or an accompanying field, worked in a team environment, able to self-manage tasks, and is passionate about video games.'
  },
  {
    job_name: 'Marketing Coordinator',
    salary: 80000,
    location: 'QLD',
    category_id:1,
    description:'We are looking for a Marketing Coordinator to join our dynamic team in Sydney. The successful candidate will be responsible for developing and implementing marketing campaigns, managing social media platforms, and assisting with event planning.'
  },
  {
    job_name: 'Project Manager',
    salary: 110000,
    location: 'SA',
    category_id:1,
    description:' We are seeking an experienced Project Manager to oversee our projects in Adelaide. The successful candidate will be responsible for planning, executing, and closing projects, as well as managing budgets, schedules, and resources.'
  },
  
];

const seedJobs = () => Jobs.bulkCreate(jobData);

module.exports = seedJobs;
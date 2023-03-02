const { User } = require('../models');

const userData = [
  {
    firstName: 'Alex',
    lastName:'Fergosen',
    email:'alex@gmail.com',
    password:'Alex12345',
    skill:'React'
  },
  {
    firstName: 'Gladys',
    lastName:'Berejiklian',
    email:'gb@gov.com',
    password:'Covid19news',
    skill:'Java'
  },
  {
    firstName: 'Rahat',
    lastName:'saini',
    email:'rs@abc.com',
    password:'pass12345',
    skill:''
  },
  {
    firstName: 'AAA',
    lastName:'BBB',
    email:'AB@abc.com',
    password:'pass192345',
    skill:''
  },
 
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
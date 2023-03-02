const { User } = require('../models');

const userData = [
  {
    firstName: 'Alex',
    lastName:'Fergosen',
    email:'alex@gmail.com',
    password:'Alex12345',
  },
  {
    firstName: 'Gladys',
    lastName:'Berejiklian',
    email:'gb@gov.com',
    password:'Covid19news',
  },
  {
    firstName: 'Rahat',
    lastName:'saini',
    email:'rs@abc.com',
    password:'pass12345',
  },
  {
    firstName: 'AAA',
    lastName:'BBB',
    email:'AB@abc.com',
    password:'pass192345',
  },
 
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
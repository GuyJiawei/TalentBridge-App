const { User } = require('../models');

const userData = [
  {
    firstName: 'Alex',
    lastName:'Fergosen',
    email:'alex@gmail.com',
    password:'Alex12345',
    category_id:'3'
  },
  {
    firstName: 'Gladys',
    lastName:'Berejiklian',
    email:'gb@gov.com',
    password:'Covid19news',
    category_id:'1'
  },
  {
    firstName: 'Rahat',
    lastName:'saini',
    email:'rs@abc.com',
    password:'pass12345',
    category_id:'5'
  },
 
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
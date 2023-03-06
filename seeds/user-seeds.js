const { User } = require('../models');
const bcrypt = require('bcrypt');


const userData = [
  {
    firstName: 'Alex',
    lastName:'Fergosen',
    email:'alex@gmail.com',
    password:`${bcrypt.hashSync("Alex12345", 10)}`,             
    skill:'Accounting'
  },
  {
    firstName: 'Peter',
    lastName:'Jackson',
    email:'gb@gov.com',
    password:`${bcrypt.hashSync("Covid19news", 10)}`,
    skill:''
  },
  {
    firstName: 'Rahat',
    lastName:'saini',
    email:'rs@abc.com',
    password:`${bcrypt.hashSync('pass12345', 10)}`,
    skill:'IT'
  },
  {
    firstName: 'AAA',
    lastName:'BBB',
    email:'AB@abc.com',
    password:`${bcrypt.hashSync('pass12345', 10)}`,      
    skill:''
  },

];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
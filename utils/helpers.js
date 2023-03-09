const Handlebars = require('handlebars');
const moment = require('moment');

Handlebars.registerHelper('formatDate', function(date) {
  return moment(date).format('MMMM Do YYYY');
});


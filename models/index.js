const User = require('./User');
const Category = require('./Category');
const UserJobs = require('./UserJobs');
const Jobs = require('./Jobs');


Category.hasMany(Jobs, {
    foreignKey: 'category_id',
});

Jobs.belongsToMany(User,{
    through: UserJobs,
    foreignKey: 'jobs_id',
});

UserJobs.belongsToMany(Jobs,{
    through: UserJobs,
    foreignKey: 'user_id'
});

module.exports = { User, Category, UserJobs, Jobs };


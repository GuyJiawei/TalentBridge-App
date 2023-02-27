const User = require('./User');
const Category = require('./Category');
const Jobs = require('./Jobs');

User.belonsTo(Category, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
Category.hasMany(User,{
    foreignKey: '',
    onDelete: ''
});

Jobs.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Project };

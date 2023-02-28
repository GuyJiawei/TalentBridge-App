const User = require('./User');
const Category = require('./Category');
const Jobs = require('./Jobs');

User.belongsTo(Category, {
    foreignKey: 'user_id',
    // ???? cascade
    onDelete: 'CASCADE'
});
Category.hasMany(User,{
    foreignKey: '',
    onDelete: 'CASCADE'
});

Jobs.belongsTo(Category, {
    foreignKey: 'category_id',
    // cascade????
    onDelete: 'CASCADE'
});
Category.hasMany(Jobs,{
    foreignKey: 'category_id',    
    onDelete: 'CASCADE'
});

module.exports = { Category, Jobs, User };

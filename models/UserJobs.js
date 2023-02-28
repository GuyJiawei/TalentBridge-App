const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class UserJobs extends Model { }

UserJobs.init(
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        jobs_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'jobs',
                key: 'id',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_jobs',
    }
);

module.exports = UserJobs;

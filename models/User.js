const Sequelize = require('Sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: Sequelize.STRING(255),
    email: Sequelize.STRING(255),    
    password: Sequelize.STRING(255),
    joiningDate: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    deletedAt: Sequelize.DATE,
})


module.exports = User;

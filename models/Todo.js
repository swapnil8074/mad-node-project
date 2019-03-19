const Sequelize = require('Sequelize');
const sequelize = require('../config/db');

const Todo = sequelize.define('todos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: Sequelize.STRING(256),
    date: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    deleted_at: Sequelize.DATE,
})


module.exports = Todo;

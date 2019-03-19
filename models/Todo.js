const Sequelize = require('Sequelize');
const sequelize = require('../config/db');

const Todo = sequelize.define('todos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    title: Sequelize.STRING(256),
    date: Sequelize.DATE,
    deleted_at: Sequelize.DATE,
})


module.exports = Todo;
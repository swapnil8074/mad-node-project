const Sequelize = require("Sequelize");

const sequelize = new Sequelize('todo_node_app', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});




module.exports = sequelize;
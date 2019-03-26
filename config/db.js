const Sequelize = require("Sequelize");

const sequelize = new Sequelize("todo_node_app", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  define: {
    timestamps: false,
    logging: false
  }
});

module.exports = sequelize;

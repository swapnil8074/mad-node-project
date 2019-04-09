const Sequelize = require("Sequelize");

const sequelize = new Sequelize("todo_node_app", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  logging: false,
  define: {
    timestamps: false,
  }
});

module.exports = sequelize;

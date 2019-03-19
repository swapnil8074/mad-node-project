const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const sequelize = require("./config/db");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

// middlewares
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// setting view engine
app.set("view engine", "ejs");

// testing database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

// syncing sequelize so that it creates table as per model if not table does`nt exist..
sequelize.sync();

// importing routes
const todoRoutes = require("./routes/todo");

app.use("/todo", todoRoutes);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(3000, function() {
  console.log(`Server listening on port 3000`);
});

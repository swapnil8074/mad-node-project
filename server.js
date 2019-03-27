const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const sequelize = require("./config/db");

// add these packages to get on
const session = require("express-session");
// const cookieParser = require("cookie-parser");

const app = express();

// to serve static files
app.use(express.static(path.join(__dirname, "public")));

// middlewares
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(function(req, res, next) {
  req.user = {
    _id: 214324325,
    name: "Swapnil Shukla"
  };

  next();
});
// app.use(cookieParser());

// sessions :  by default session gets stored in the memory and it is really a horrible idea to store session in memory on production.

app.use(
  session({
    secret: "thisIsSecretForEncrption", //for signing hash which secretl stores our id to session
    resave: false, //session will not be saved on ever request but onl when something is changed,
    saveUninitialized: false // to make sure that nothing gets save if not changed or is uninitialized

    /* cookie : { //to set default properties of session-cookies
    maxAge: "",
    expires: ""
  }
 */
  })
);

// setting view engine
app.set("view engine", "ejs");

// setting other view path
// app.set('views', path.join(__dirname, '/ourView'));

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
const authRoutes = require("./routes/authRoutes");

app.use("/todo", todoRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/cookies", (req, res) => {

// res.setHeader('Set-Cookie', "isAuth=false; httpOnly; MaxAge=30: Expires");
let cookies = req.headers.cookie;
// (req.headers.cookie.split(";"))[2].trim().split("=")[1]
console.log(req.headers.cookie);

res.send("HEllo");
});



app.listen(3000, function() {
  console.log(`Server listening on port 3000`);
});

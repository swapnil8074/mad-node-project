const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const sequelize = require("./config/db");
var multer  = require('multer');

// add these packages to get on
const csrf = require('csurf');
const session = require("express-session");
const flash = require('connect-flash');
// const cookieParser = require("cookie-parser");



const app = express();

// to serve static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "upload")));



const authMiddleware =  require('./middlewares/authMiddleware');

// middlewares
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// multer
upload = multer({ dest: 'uploads/' })

// sessions :  by default session gets stored in the memory and it is really a horrible idea to store session in memory on production.
app.use(
  session({
    secret: "thisIsSecretForEncrption", //for signing hash which secretl stores our id to session
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { /* secure: true  */ }
  })
);

// const csrfProtection =  csrf();
// app.use(csrfProtection);
app.use(flash());

// app.use(authMiddleware);
// app.use(cookieParser());

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


app.use("/todo",authMiddleware, todoRoutes);
app.use("/auth", authRoutes);

app.get("/", authMiddleware, (req, res) => {
  res.render("index.ejs");
});

app.get('/generateCSRF',(req,res)=>{
  console.log(req.csrfToken());
})

app.listen(3000, function() {
  console.log(`Server listening on port 3000`);
});

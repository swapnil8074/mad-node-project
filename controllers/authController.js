const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports.getSignup = (req, res) => {
  let data = {};
  data.csrfToken = req.csrfToken();
  data.error = req.flash('error');
  res.render("pages/signup", data);
};

module.exports.getLogin = (req, res) => {
  let data = {};

  res.render("pages/login", data);
};

module.exports.postSignup = async (req, res) => {
  const body = req.body;
  // return console.log(body);
  if(!body.email || !body.password){
    
    req.flash('error', 'Email or Password can not be empty!');
    return res.redirect('/auth/signup');
  }

  user = await User.findOne({
    where: {
      email: body.email
    }
  });

  if (user) return res.redirect("/auth/signup");

  // if user does`nt exists create one

  try {
    user = await User.create({
      name: body.name,
      email: body.email,
      password: body.password
    });
  } catch (err) {
    console.log(err);
  }

  // as user is created now, initialize session with login status
  req.session.isLoggedIn = true;
  req.session.user = {
    id: user.id,
    email: user.email,
    name: user.name
  };
  return res.redirect("/");
};

module.exports.postLogin = (req, res) => {
  const body = req.body;

  if(!body.email || !body.password)
  return res.redirect('/auth/login');

  User.findOne({
    where: {
      email: body.email
    }
  }).then(user => {
    if (!user) return res.status(404).json({ error: "User not found!" });

    isAuth = bcrypt.compareSync(body.password, user.password);

    if (isAuth) {
      // as user is created now, initialize session with login status
      req.session.isLoggedIn = true;
      req.session.user = {
        id: user.id,
        email: user.email,
        name: user.name
      };
     return res.redirect("/");
    } else {
      // handle error
     return res.redirect("/auth/login");

    }
  });
};

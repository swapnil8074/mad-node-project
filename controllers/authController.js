const User = require("../models/User");
const bcrypt = require("bcrypt");


module.exports.postSignup = (req, res) => {
  const body = req.body;

  User.create({
    name: body.name,
    email: body.email,
    password: body.password
  }).then(user => {
    // you can now access the newly created task via the variable task
    res.json(user);
  });
};

module.exports.postlogin = (req, res) => {
  const body = req.body;

  User.findOne({
    where: {
      email: body.email
    }
  }).then(user => {
    if (!user)  return res.status(404).json({ error: "User not found!" });
    
    isAuth =  bcrypt.compareSync(body.password, user.password );

    if(isAuth){
      // set session 
      res.json(isAuth);


    }else{
      // handle error
    }

  });
};

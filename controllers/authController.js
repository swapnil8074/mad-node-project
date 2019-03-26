
module.exports.postLogin = (Req, res) => {
  /* // write authentication logic here
    .
    .
    .
    .
    .
    .
       
    */
  req.session.isAuth = true;
  res.redirect("/");
};

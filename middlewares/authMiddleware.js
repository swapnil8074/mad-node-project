module.exports = (req, res, next) => {
  // if not logged in redirect to login
  if (!req.session.isLoggedIn) return res.redirect("/auth/signup");
  next();
};

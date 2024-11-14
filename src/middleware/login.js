const checkUser = (req, res, next) => {
  if (req.session.user && req.session.user.role == "1") {
    next();
  } else {
    return res.redirect("/");
  }
};
const checkAdmin = (req, res, next) => {
  if (!req.session.user || req.session.user.role == "1") {
    return res.redirect("/home");
  } else {
    next();
  }
};
export { checkUser, checkAdmin };

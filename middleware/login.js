const checkUser = (req, res, next) => {
  if (req.session.role == "1") {
    next();
  } else {
    res.redirect("/about");
  }
};
const checkAdmin = (req, res, next) => {
  if (req.session.role == "0") {
    next();
  } else {
    res.redirect("/profile/" + req.session.user.id);
  }
};
export { checkUser, checkAdmin };

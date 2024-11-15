import jwt from "jsonwebtoken";
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
const verifyToken = (req, res, next) => {
  const token = req.cookies.authToken;
  if (token) {
    jwt.verify(token, process.env.JWT_ACCESS_KEY, (err, user) => {
      if (err) {
        return res.status(403).send("Access denied."); // Lỗi xác thực token
      }
      req.user = user; // Lưu thông tin giải mã từ token vào request
      next(); // Tiếp tục xử lý request
    });
  } else {
    return res.status(401).send("Unauthorized."); // Không có token
  }
};

export { checkUser, checkAdmin, verifyToken };

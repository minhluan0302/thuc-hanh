import express from "express";
import date from "./date.js";
import dotenv from "dotenv/config";
import viewEngine from "./viewengine.js";
import route from "./routers/index.js";
import session from "express-session";
const app = express();
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
// app.get("/profile/:id", (req, res) => {
//   console.log("Thông tin phiên:", req.session); // Kiểm tra thông tin phiên
//   if (req.session.user) {
//     // Kiểm tra xem người dùng đã đăng nhập chưa
//     res.send(`Chào mừng bạn đến với hồ sơ của ${req.session.user.role}`);
//   } else {
//     res.send("hahah"); // Chuyển hướng đến trang đăng nhập nếu chưa đăng nhập
//   }
// });

const port = process.env.PORT;
viewEngine(app);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

import express from "express";
import dotenv from "dotenv/config";
import viewEngine from "./viewengine.js";
import route from "./src/routers/index.js";
import session from "express-session";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
const corsOptions = {
  origin: "http://localhost:3000", // Đảm bảo chỉ định đúng domain frontend
  methods: ["GET", "POST"],
  credentials: true, // Cho phép cookie được gửi và nhận
};

app.use(cors(corsOptions));
app.use(cookieParser(process.env.COOKIE_SECRET || "your-secret-key"));
app.use("/js", express.static(path.join(__dirname, "src", "public", "js")));
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.set("views", path.join(__dirname, "src", "views"));
const port = process.env.PORT;
viewEngine(app);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

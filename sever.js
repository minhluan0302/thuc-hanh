import express from "express";
import date from "./date.js";
import dotenv from "dotenv/config";
import viewEngine from "./viewengine.js";
const app = express();

const port = process.env.PORT;
viewEngine(app);
app.get("/date", (req, res) => {
  res.send(date());
});
app.get("/about", (req, res) => {
  res.send("Hello World! Page about");
});
app.get("/ejs", (req, res) => {
  res.render("test");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

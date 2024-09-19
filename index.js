import http from "http";

import date from "./date";

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    res.write(date() + "<br>");

    res.write("Hello KTPM0121, chúc bạn thành công vớiNodejs");

    res.end();
  })
  .listen(8080);

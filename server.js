var express = require('express'),
  app = express(),
  port = 3000;

app.use(express.static('public'));

var routes = require("./api/routes");
routes(app);

if (! module.parent) {
  throw new Error("sample error");
  app.listen(port);
}

module.exports = app

console.log("Server running on port " + port);

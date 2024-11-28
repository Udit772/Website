const express = require("express");
const routes = require("./routes/main");
const hbs = require("hbs");
const hbsutils = require("hbs-utils")(hbs);
const app = express();
const mongoose = require("mongoose");

app.use("/static", express.static("public"));
app.use("", routes);

//hbs(template engine)S

app.set("view engine", "hbs");

app.set("views", "views");
hbsutils.registerWatchedPartials("views/partials");
//db connections
mongoose.connect("mongodb://localhost/website").then(() => {
  console.log("DB connected");
});

app.listen(process.env.PORT | 5556, () => {
  console.log("server started");
});

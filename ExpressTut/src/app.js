const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const hbs = require("hbs");

const basePath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../template/views");
const partialsPath = path.join(__dirname, "../template/partials");

// set the view engine
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

//template engine route
app.get("/", (req, res) => {
  res.render("index", { name: "Singh" });
});

// built in middleware
// app.use(express.static(basePath))

app.get("/about", (req, res) => {
//   console.log(req.query);
  res.render("about", {
      // fetch url query strig and send to about page
      name: req.query.name
  });
});

app.get("/about/*", (req, res) => {
  res.render("404");
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});

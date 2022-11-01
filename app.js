const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { generateContact } = require("./utils/contacts");

const app = express();
const port = 5000;

// set the templating engine
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", { title: "Homepage" });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});
app.get("/contact", (req, res) => {
  const contacts = generateContact();
  console.log("isi contact : ", contacts);
  res.render("contact", { title: "Contact Page", contacts });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

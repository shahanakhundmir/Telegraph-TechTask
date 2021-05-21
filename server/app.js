const hbs = require('handlebars');
const express = require("express");
const exphbs = require("express-handlebars");
const router = require("./router");
const meta = require("./content/meta.json");
const article = require("./content/article.json");
const posts = require("./content/posts.json");
//const comments = require("../db.json");
const fetch = require('node-fetch');
const app = express();
const port = 3000;

// Fetching endpoint json file using node-fetch
fetch('https://my-json-server.typicode.com/telegraph/frontend-exercise/comments')
  .then(response => response.json())
  .then(data => {
       // console.log(data)
        app.set("comments", data);
  })
  .catch(err => console.log(err))

hbs.registerHelper('dateFormat', require('handlebars-dateformat'));


app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.set("meta", meta);
app.set("article", article);
app.set("posts", posts.posts);
//app.set("comments", comments.comments);

app.get('/', function (req, res) {
    res.render('article', { now: new Date() });
});

app.use("*/static", express.static("public"));

app.use(router);

app.listen(port, () => console.log(`Listening on port ${port}!`));




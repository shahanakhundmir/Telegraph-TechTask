const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("home", { posts: req.app.get("posts") });
});

router.get("/einstein-and-churchill-both-took-daily-naps", (req, res) => {
	const article = req.app.get("article");

	// filter related stories by the articles category
	const relatedStories = req.app.get("posts").filter(post=>
		post.category === article.post.category)
	
	res.render("article", {
		article: article,
		posts: relatedStories,
		comments:req.app.get("comments"),
		//comments: getArticleComments,
	});
});

/**function getArticleComments() {

	fetch("https://my-json-server.typicode.com/telegraph/frontend-exercise/comments.json")
  		.then(data => {})
		.catch(error => {});
}
**/
module.exports = router;

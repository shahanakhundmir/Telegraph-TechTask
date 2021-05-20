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
	
	const totalComments =  req.app.get("comments").length

	
	
	res.render("article", {
		article: article,
		posts: relatedStories,
		comments:req.app.get("comments"),
		totalComments : totalComments
	});
});

module.exports = router;

const posts = require("./content/posts.json");

function getRelatedPosts(category){
    return  posts.posts.filter(post=>
		post.category === category)
}

module.exports = {getRelatedPosts}
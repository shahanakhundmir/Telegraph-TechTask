function getArticleComments() {
	fetch(
		"https://my-json-server.typicode.com/telegraph/frontend-exercise/comments.json"
	)
		.then((response) => response.json())
		.then(data => {
			return data
		  });


}

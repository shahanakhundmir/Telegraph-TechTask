function getJsonData() {
	fetch(
		"https://my-json-server.typicode.com/telegraph/frontend-exercise/comments.json"
	)
		.then((response) => response.json())
        
		.then((data) => console.log(data));
}

/**function getArticleComments() {

	fetch("https://my-json-server.typicode.com/telegraph/frontend-exercise/comments.json")
  		.then(data => {})
		.catch(error => {});
}*/


module.exports = HelloComments => {
    fetch("https://my-json-server.typicode.com/telegraph/frontend-exercise/comments.json")
  		.then(data => {
console.log(data)

		  })
		.catch(error => {});
}
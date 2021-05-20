
 /**
 * Dummy utility class to demonstrate a basic JS
 * structure and assoiciated test
 * @param {Object} params - containing:
 * @param {String} articlePagePath - the pathname of the article (defaults to '/einstein-and-churchill-both-took-daily-naps')

 */
class Article {
	constructor(params) {
		this.params = Object.assign(
			{
				articlePagePath: "/einstein-and-churchill-both-took-daily-naps",
			},
			params
		);
	}

	/**
	 * Is the user on the article page
	 * @return {Boolean}
	 */
	isArticlePage() {
		return document.location.pathname === this.params.articlePagePath;
	}
}

module.exports = Article;
/**
 * Dummy utility class to demonstrate a basic JS
 * structure and assoiciated test
 * @param {Object} params - containing:
 * @param {String} homePagePath - the pathname of the homepage (defaults to '/')
 * @param {String} articlePagePath - the pathname of the article (defaults to '/einstein-and-churchill-both-took-daily-naps')

 */
class Utils {
	constructor(params) {
		this.params = Object.assign(
			{
				homePagePath: "/",
			},
			params
		);

		this.params = Object.assign(
			{
				articlePagePath: "/einstein-and-churchill-both-took-daily-naps",
			},
			params
		);
	}

	/**
	 * Is the user on the hompage
	 * @return {Boolean}
	 */
	isHomePage() {
		return document.location.pathname === this.params.homePagePath;
	}

	/**
	 * Is the user on the article page
	 * @return {Boolean}
	 */
	isArticlePage() {
		return document.location.pathname === this.params.articlePagePath;
	}
}

module.exports = Utils;

const Article = require("./article");

describe("Article", () => {
	
	describe("isArticlePage", () => {
		it("should match if on article page", () => {
			const article = new Article();
			window.history.pushState({},"","/einstein-and-churchill-both-took-daily-naps");

			expect(article.isArticlePage()).toBeTruthy();
		});

		it("should not match if on another page", () => {
			const article = new Article();
			window.history.pushState({}, "", "/news");

			expect(article.isArticlePage()).toBeFalsy();
		});
	});

/** checkig the number of stories returned - should be 4, category should be 3
	describe("areStoriesRelated", () => {
		it("should match if only related stories are returned", () => {
			const article = new Article();
			window.history.pushState({},"","/einstein-and-churchill-both-took-daily-naps");
			expect(utils.areStoriesRelated()).toBeTruthy();
		});

		it("should not match if unrelated stories are returned", () => {
            const article = new Article();
			window.history.pushState({}, "", "/news");
			expect(utils.areStoriesRelated()).toBeFalsy();
		});
	});*/


});

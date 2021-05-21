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

        it("should match with different article page parameter", () => {
            const article = new Article({articlePagePath: "/mainArticle",});
            window.history.pushState({}, "", "/mainArticle");
            expect(article.isArticlePage()).toBeTruthy();
        });
	});
});

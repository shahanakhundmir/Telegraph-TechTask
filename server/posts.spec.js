const {getRelatedPosts} = require("./posts");

describe("Related Post functionality", () => {
	
	describe("getRelatedPosts", () => {
		it("should match specific category", () => {
			const relatedPosts = getRelatedPosts(3)
			expect(relatedPosts.length).toBe(4);
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

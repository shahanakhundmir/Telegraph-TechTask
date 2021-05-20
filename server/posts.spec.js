const {getRelatedPosts} = require("./posts");

describe("Related Post functionality", () => {
	
	describe("getRelatedPosts", () => {
		it("should match a specific category, 3", () => {
			const relatedPosts = getRelatedPosts(3)
			expect(relatedPosts.length).toBe(4);
		});
	});

    describe("getRelatedPosts", () => {
		it("should match a specific category, 2", () => {
			const relatedPosts = getRelatedPosts(2)
			expect(relatedPosts.length).toBe(2);
		});
	});

    describe("getRelatedPosts", () => {
		it("should not match a specific category, 12", () => {
			const relatedPosts = getRelatedPosts(12)
			expect(relatedPosts.length).toBe(0);
		});
	});

});

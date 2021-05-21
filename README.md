# *Front-End Candidate Solution*

📰 A full page article has been rendered. It includes Image, Title with formatted Date and the Body of the article.

📚 Associated stories have been selected by matching category id, and these are dispalyed on the page.

💬 The Comments for the article appear below the main article.

📱 The design is responsive.

:art: The design closely mirrors the design that was provided.

📅 Dates have been converted to a readable format.

💻 The comments data is being loaded from an endpoint in server/app.js.

⏳ This was my first experience of using Handlebars and some time has been taken to become familiar with the application.
And I have tried my best to understand the framework and apply this to the task. I am aware of some shortfalls, which I would 
have liked to have completed with more time.


## ✔️ ⭕Unit testing has ben carried out using TDD. 

### Unit testing has been carried out on the article and related stories.

🟣 Testing has been done using Jest, all tests are passing.

🟣 Run npm test to run unit testing.

## these have looked at scenarios including:

🟣 article.spec.js unit tests that the URL link for the article is displaying the correct page, which is defined in article.js.

🟣 posts.spec.js unit tests the related stories, it checks:


	◾ Are the correct number of associated stories displayed for 2 different categories.

	◾ Zero matches should be found if the article has no associated posts.
	
	
## Search Engine Optimisation ⚙️

☑️ The title of the article is part of the <title> tag.
	
☑️ Description, Viewport and content-type meta-tags are included.
	
☑️ Only one h1 tag is used and it matches the <title> And subsequent header tags are used in ascending order.

☑️ alt tags are used on all images for descriptions for screen readers.
	
<img width="258" alt="lighthouse" src="https://user-images.githubusercontent.com/58731479/119054100-fb8a4600-b9be-11eb-9fb5-3c9d1fdf83e6.png">
	
## Clean code

Use of BEM naming convention for CSS styling.


## TODO's
	
### With more time, all the things that I would do: 

✨ Improve the responsive design to produce a more sleek transfer from mobile to laptop.
	
✨ Getting the Comments data via an endpoint on the front-end.
	
I investigated the approach for loading data dynamically on the front-end using 'await fetch'. This data
	could then be used to populate a HTML structure which is done once the DOM has been loaded. 
	As my knowldge and experinece of this approach is limited I chose not to implement it. With more time 
	and help to undertsand this more clearly I would feel more comfortable to use it. 
	
✨ Add the sorting function for the comments to order by date and likes. I have investigated the use of the SortBy 
	helper function to do this, and think it may be used with the #each helper function, so sort and iterate
	over the comments array. Handlebars-helper functions were installed but I was unable to import & use them 
	to achieve the desired reults. 

✨ Fix the ordering of items in mobile view. I have attempted to use a media query with ordering to change the 
	layout of sections are per the AC for mobile view, but was unable to get this to work. 

✨ Extend testing to the sort functions and calls for the comments section.
	


---------------------------------------------------------------------------
---------------------------------------------------------------------------

	
	

# Front-End Candidate Test

:wave: Welcome to The Telegraph front-end candidate test

- [Task](#wrench-task)
	- [Requirements](#mega-requirements)
	- [What we are looking for](#mag_right-what-we-are-looking-for)
	- [Data](#open_file_folder-data)
	- [Designs](#art-designs)
- [Set up](#floppy_disk-set-up)
- [Acceptance criteria](#scroll-acceptance-criteria)
- [Submitting your code](#mailbox_with_mail-submitting-your-code)

## :wrench: Task 

We would like you to build a responsive news article as per the included designs. You should meet the [ACs](#scroll-acceptance-criteria).

We've built a bare-bones [express](https://expressjs.com/) application with some basic front-end tooling ([webpack](https://webpack.js.org/) for JavaScript compilation and [PostCSS](https://postcss.org/) for CSS concatenation). It uses [handlebars](https://handlebarsjs.com/guide/) as a simple templating language.

Your code should work in modern browsers such as Chrome, Firefox and Edge. Do not worry about supporting IE11 or below.

You should not spend more than 3 hours on this task. We are not expecting a fully functioning masterpiece in this time :)
For everything you are not able to complete, please submit with a list of what you would have done with more time and/or write `// TODO`s throughout your code.

### :mega: Requirements

* Match the [designs](#art-designs) as closely as possible, filling in any gaps as you deem fit
* Application should be fully responsive
* Pass the [ACs](#scroll-acceptance-criteria)
* Ensure code is unit tested. We've set this up with [Jest](https://jestjs.io/) but feel free to use whatever you like
* The article and related posts JSON calls should be made server side (example integration of `meta.json` included)
* Comments should be called once the DOM is ready via [this endpoint](https://my-json-server.typicode.com/telegraph/frontend-exercise/comments). This call should be made client-side and injected with JavaScript
* Keep your JavaScript vanilla please :icecream:

### :mag_right: What we are looking for

* An understanding of web fundamentals
* A consistent and scalable approach to the test
* An understanding of accessibility
* Reasoning about web performance
* Reasoning about SEO
* Solid unit testing
* Ability to translate designs into code

### :open_file_folder: Data

* Article data: `server/content/article.json`
* Posts: `server/content/posts.json`
* Meta: `server/content/meta.json`
* Comments: [https://my-json-server.typicode.com/telegraph/frontend-exercise/comments](https://my-json-server.typicode.com/telegraph/frontend-exercise/comments)

### :art: Designs

* The designs can be found in the `design` directory in the root of the project.
* The font in the design file is a custom font so feel free to use whichever font you like (ideally not webdings).

## :floppy_disk: Set up

Firstly, install all of the packages:

```sh
npm install
```

Then run:

```sh
npm run dev
```

Visit [http://localhost:3000/](http://localhost:3000/) in your web browser and you *should* see a blank webpage with The Telegraph logo and a 'Hello World' message.

The above command will watch and deploy your code. The watchers for CSS and JS files will not take into account changes to new files so make sure you restart the watchers when adding new files. The CSS watcher will only look for changes inside a directory which sits within the `src/css` directory (e.g. `src/css/elements`).

## :scroll: Acceptance criteria

```
Scenario: Show single post
	Given that I submit the path of the article into the browser
	And the path is "/einstein-and-churchill-both-took-daily-naps"
	Then the post page should be returned
	And the page shows the title of the article
	And the page shows the standfirst of the article
	And the page shows the date of the article
	And the page shows the image of the article
	And the page shows the associated comment count of the article
```

```
Scenario: Show associated articles
	Given that I access the single post page
	Then the post page should return associated posts by category
	And each item should show the title of the article
	And each item should show the thumbnail of the article
```

```
Scenario: Show comments
	Given that I access the single post page
	Then the post page should return the associated comments
	And each comment should show the username
	And each comment should show the date of the comment
	And each comment should show the comment body
	And each comment should show the like count
```

```
Scenario: Order comments by newest
	Given that I click the Newest button in the comments area
	Then then the comments should display in order of date
	And the comments should show most recent first
```

```
Scenario: Order comments by likes
	Given that I click the Likes button in the comments area
	Then then the comments should display in order of most likes
	And the comments should show most liked first
```

## :mailbox_with_mail: Submitting your code

:no_entry_sign: Please don't fork this repository as the links will be accessible to other candidates. 

:heavy_check_mark: Please clone it into your own repo and send us a link. 

:heavy_check_mark: We should be able to build and run your application locally.

:heavy_check_mark: Please also feedback on how you found the test - what did you like/not like about it?

:heavy_check_mark: Feel free to send us any other additional notes. E.g. what you would have done with more time.





	


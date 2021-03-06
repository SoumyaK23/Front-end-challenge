# Front-end-challenge 

The challenge is to create a search page that looks like mockups in the mockup folder. Within the zip file, you will also find image resources that you can utilize.

The search page should enable the user to search for movies as keywords are typed into the search bar. Functionality for filtering does not need to be implemented, however the filter categories should still be expandable upon clicking. Other than the search functionality, no other functionality is expected.

Movie data can be queried via: [theMovieDB](https://www.themoviedb.org/?language=en-GB)

## Step 1: Install dependencies, fix issues and get a page working using react

This step took the longest (3h) as I have only done courses before and not really used React locally.

## Step 2: Understanding the code and expected output

I went over existing submissions as well as understanding the many resources available online. The mock up gives a very clear idea of expected output and I mostly read around I implementation of search function. This step took about an hour.

## Step 3: Task planning:

The breakup of review is as follows -
•	Functionality - Do the results load instantly as the user types? If the API backend has rate limiting enforced, how do you implement the aforementioned while also taking rate limiting into account
•	Documentation - Is the README well written? Are the commit messages clear?
•	Automated Tests - Are there any automated frontend tests?
•	Production-readiness - Is there proper error handling? Is the code ready to to put into production?
•	Future-readiness - Web workers? PWA? Client-side caching?
So the priority is to get the design and search functionality.

Bonus points can also be achieved by -
•	Functionality - Do the results load instantly as the user types? If the API backend has rate limiting enforced, how do you implement the aforementioned while also taking rate limiting into account
•	Documentation - Is the README well written? Are the commit messages clear?
•	Automated Tests - Are there any automated frontend tests?
•	Production-readiness - Is there proper error handling? Is the code ready to to put into production?
•	Future-readiness - Web workers? PWA? Client-side caching?

## Step 4: Coding:

I started with index.js and app.js and slowly added the Discover/index.js and fetcher.js (some time to read documentations on MoviesDB). Then added the components to get the basic search functionality right (2h)

I noticed some issues and started working on them, notably adding checkboxes, filters, sidebar navigation (1h)

## Step 5: Styling, Comments and cleaning code

Once I came to the point where I felt the code was mostly done and alao that I had taken a lot of time, I started adding comments and checking style. This step also helped me go over the code and make sure I add error checking (1h)

Step 6: What I could not complete / Challenges
1.	Adding Genres. I got the genre_ids but could not map them to the genres.
2.	Styling for mobile - did not have time but could have done much more
3.	Adding pop up for movie items
4.	Automated Tests
5.	Accessibility in design
6.	Comments and documentation

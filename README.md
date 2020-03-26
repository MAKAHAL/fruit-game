jQuery Assignment

Overview

In this assignment, you'll create another fun and interactive game for web browsers. This time, your app must dynamically update your HTML pages with the jQuery library.

Commits

Having an active and healthy commit history on GitHub is important for your future job search. It is also extremely important for making sure your work is saved in your repository. If something breaks, committing often ensures you are able to go back to a working version of your code.

Committing often is a signal to employers that you are actively working on your code and learning.

We use the mantra “commit early and often.” This means that when you write code that works, add it and commit it!

Numerous commits allow you to see how your app is progressing and give you a point to revert to if anything goes wrong.

Be clear and descriptive in your commit messaging.

When writing a commit message, avoid vague messages like "fixed." Be descriptive so that you and anyone else looking at your repository knows what happened with each commit.
We would like you to have well over 200 commits by graduation, so commit early and often!

Submission on BCS

Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!
Before You Begin

This game needs a theme. 4 items of a same category Examples:
Gems
Fruit
Planets
Stones
Vegetables
Once you pick your theme, create a github repo and give it a name based on the theme of your game. Example: If I pick Gems as my theme, I might name my repo gem-game
Clone the repo to your computer
Inside the cloned repo,* create an index.html. The index.html is necessary to deploy to github pages
Still inside the cloned repo, make a folder called assets
Move into the assets folder and create
a folder called css
a folder called images
a folder called javascript
Inside the css folder, create style.css. If you are not using a CSS Library like Bootstrap, also create reset.css
Inside the javascript folder, create game.js.
Any images should go in the images directory
The file/folder structure inside the cloned folder should look like
- assets
    - css
    - reset.css *If not using a CSS Library like Bootstrap*
    - style.css
    - images
    - anyImageFiles
    - javascript
    - game.js
- index.html
Commit the above changes and push to GitHub
Deploy your site to GitHub Pages
Game Design

There should be 4 items on the screen from the theme that are displayed as buttons.
EX: If my theme is gems, I should have 4 gems displayed on the screen
The player should be shown a target score at the beginning of the game.
The target score should be a randomly generated value between 19 and 120.
Each of the 4 items should be worth a random value between 1 and 12.
This value will be hidden to the player.
When the player clicks on one of the items, the value of that item should be added to the players score counter.
The player wins when their score equals the target score
The player loses if their score goes over the target score
The game restarts once a player wins or loses without a page refresh.
On restart, the target score should be regenerated as well as the values for the items.
The players score should reset to 0.
The total number of wins and losses should be displayed on the screen.
Must Haves

A well-designed UI with
Four clickable items
A Target Score
The Player Score
Player Wins and Losses
jQuery
README.md
Should Haves

JavaScript Game Object containing all the logic
JavaScript Style Requirements

Const, Let for Variable Declaration
Indentation in HTML, CSS, and JavaScript
Consistent usage of quotations
Semicolons
No unused variables
Reminder: Submission on BCS

Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!
Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.

Create a README.md

Add a README.md to your repository describing the project. Here are some resources for creating your README.md. Here are some resources to help you along the way:

About READMEs

Mastering Markdown

Add To Your Portfolio

After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

One More Thing

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

Good Luck!
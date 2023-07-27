# techblog_handlebars [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![Handlebars Badge](https://img.shields.io/badge/Handlebars-F0772B?logo=handlebars&logoColor=fff&style=flat)](https://handlebarsjs.com/)
[![MVC Badge](https://img.shields.io/badge/MVC-FF5733?style=flat)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)](https://www.ecma-international.org/ecma-262/)
[![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://nodejs.org/en)
[![MySQL Badge](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff&style=flat)](https://www.npmjs.com/package/mysql2)
[![Sequelize Badge](https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=fff&style=flat)](https://sequelize.org/docs/v6/)
[![.ENV Badge](https://img.shields.io/badge/.ENV-ECD53F?logo=dotenv&logoColor=000&style=flat)](https://www.npmjs.com/package/dotenv)
[![Insomnia Badge](https://img.shields.io/badge/Insomnia-4000BF?logo=insomnia&logoColor=fff&style=flat)](https://insomnia.rest/)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
 

## Description
<br>
This is a CMS-style blog site where developers can publish their blog posts and comment on other developers' posts. The application follows the Model-View-Controller (MVC) paradigm in its architectural structure and uses Handlebars.js as the templating language, Sequelize as the Object-Relational Mapping (ORM) tool, and the express-session npm package for authentication. The app is deployed on Heroku.
<br>


## Table of contents
- [License](#License)
- [Installation](#Installation)
- [Usage](#Usage)
- [Screenshots](#Screenshots)
- [Contribution](#Contribution)
- [Test](#Test) 
- [Questions](#Questions)


## License 
This application is licensed under MIT License
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Installation:
To install application locally, follow these steps:

* Clone the repository to your local machine.
* Run npm install to install the required dependencies.
* Set up your MySQL database by running the provided SQL files to create the necessary tables and database.
* Create a .env file in the root directory and provide the following environment variables:
* DB_NAME=your_database_name
* DB_USER=your_database_user
* DB_PASSWORD=your_database_password
* SESSION_SECRET=your_session_secret_key

## Usage
* Run npm start to start the server and launch the application.
* Visit http://localhost:3001 in your web browser to access the Tech Blog.

## User Story
```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```
## Criteria
```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
```
<br>



## Screenshots
* login page
  ![login_page](https://github.com/soniasebastian/techblog_handlebars/assets/130253087/f58b121c-2211-4f74-9616-344eb30fa230)



  
* Homepage

  
  ![tech_homepage](https://github.com/soniasebastian/techblog_handlebars/assets/130253087/a3a8cbd3-4811-4495-bc0a-7ebc81ca3ed6)





* Create a new blogpost

  
  ![createnew](https://github.com/soniasebastian/techblog_handlebars/assets/130253087/c60009a5-f254-4e9f-bcdf-63c2ed12cd4d)



  
* Post a comment

  
  ![comment](https://github.com/soniasebastian/techblog_handlebars/assets/130253087/39927015-0bbb-4c60-81aa-bc0031e06c65)




  
* Edit a comment

  
 ![edit](https://github.com/soniasebastian/techblog_handlebars/assets/130253087/1a2a1ac0-e7a1-4974-9383-f1bd16379d01)








## Links
The URL of deployed application in Heroku (https://powerful-brushlands-30942-1c181b1eee8a.herokuapp.com/)


The URL of the github repository (https://github.com/soniasebastian/techblog_handlebars)


## Contribution:
   Contributions are most welcome such as bug fixes, feature enhancements, documentation improvements and code optimization.

## Tests: 
     No tests are performed in this project as of now.

## Questions :
  View my [GitHub](https://github.com/soniasebastian) profile

  Email me at soniasebastian011@gmail.com for any queries.







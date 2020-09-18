# The Speak Easy

## Description
```
The Speakeasy is a platform for consumers, created by consumers. The Speakeasy is a host for people to share, post, comment, and rate beverage recipes. Employing handlebars.js, cocktaildb API, MySQL, Express.js, and Sequelize, The Speakeasy application allows access to only registered users. Upon loading, a user will be prompted with a login/signup page. After a successful register or login, the user will be redirected to the home page. Here, they will be presented with popular drinks, search filter functions, and a drink recipe of the day. The application provides an opportunity for discussion, as each post allows for comments and ratings.
```

## Screenshots
<!-- * [VS Code Walkthrough](https://drive.google.com/file/d/12LIgxmhXn4T3BxZX-zRINUZ4iL9UZ5Qd/view)
 
* [Insomnia Core Walkthrough](https://drive.google.com/file/d/1qHKzdIU0VcxjHzERE_ZLIIG_bV75UrSf/view)

* [Schema Usage Walkthrough](https://drive.google.com/file/d/1DWdDydTegOgkPCSq3rsYVIom6uvSwJfQ/view) -->

## User Story
AS a person who enjoys a nice drink and I WANT TO be able to find a new drink with ease ..... STILL WORKING

## Acceptance Criteria
```
Use Node.js and Express.js to create a RESTful API
Use Handlebars.js as the templating engine
Use MySQL and the Sequelize ORM for the database
Have both GET and POST routes for retrieving and adding new data 
Create a deployable link with Heroku and data
Use at least one new library, package or technology that we haven't discussed
Have a polished UI, be responsive and interactive
Have a folder structure that meets the MVC paradigm
Incldue wauthetication (express-session and cookies)
Protect API keys and sensitive information with environment variables
```

## Table of Contents
  - [Description](#description)
  - [Screenshots](#screenshots)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Contribution](#contribution)

## Installation
`npm init`

`npm install sequelize`

`npm install mysql2`

`npm install dotenv`

`npm install connect-session-sequelize`

`npm install express`

`npm install express-handlebars`

`npm install express-session`

`npm install bcrypt`

## Usage
Run the following command at the root of your project.

`mysql -u root -p`

Enter your password when prompted.

`source db/schema.sql`

`quit`

Install the above extensions listed in `Installation` and then run the following command:

`npm start`


## Testing
No testing is set up at this moment. Tested externally through Insomnia Core.

## Contribution
This README was generated with ❤️ by:
- Jessica Tillson (github.com/jtillson1)
- Adam Keyser (github.com/adamkeyser45)
- Jacob Daughtry (github.com/akutozo)
- Rachel Fritz (github.com/rachelf0)

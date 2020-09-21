# The Speakeasy

![Express](https://img.shields.io/badge/-Express.js-orange) ![javascript](https://img.shields.io/badge/-javascript-green) ![node JS](https://img.shields.io/badge/-nodeJS-yellowgreen) ![jest](https://img.shields.io/badge/-jest-yellow) ![MySQL](https://img.shields.io/badge/-MySQL-red) ![Sequelize](https://img.shields.io/badge/-Sequelize-blue) ![HandlesBars](https://img.shields.io/badge/-HandleBars-magenta) ![Foundation](https://img.shields.io/badge/-Foundation-lightgreen) ![bcrypt](https://img.shields.io/badge/-bcrypt-blue)

## Description
```
The Speakeasy is a platform for consumers, created by consumers. The Speakeasy is a host for people to share, post, comment, and rate beverage recipes. Employing handlebars.js, cocktaildb API, MySQL, Express.js, and Sequelize, The Speakeasy application allows access to only registered users. Upon loading, a user will be prompted with a login/signup page. After a successful register or login, the user will be redirected to the home page. Here, they will be presented with popular drinks, search filter functions, and a drink recipe of the day. The application provides an opportunity for discussion, as each post allows for comments and ratings.
```

## Screenshots
<img width="1440" alt="ScreenShot1" src="https://user-images.githubusercontent.com/65192910/93718065-3e99ce00-fb3f-11ea-9145-cd0f64db0900.png">
<br>
<br>
<img width="1440" alt="ScreenShot2" src="https://user-images.githubusercontent.com/65192910/93718078-53766180-fb3f-11ea-816f-9b64903d2507.png">
<br>
<br>
<img width="1440" alt="ScreenShot3" src="https://user-images.githubusercontent.com/65192910/93718130-af40ea80-fb3f-11ea-8620-511cad2a827a.png">
<br>
<br>
<img width="1440" alt="ScreenShot4" src="https://user-images.githubusercontent.com/65192910/93718147-c67fd800-fb3f-11ea-98c3-097d96eaeba9.png">
<br>
<br>
<img width="1000" alt="ScreenShot5" src="https://user-images.githubusercontent.com/65192910/93725473-26dd3c80-fb75-11ea-867f-fe0a19b07392.png">

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

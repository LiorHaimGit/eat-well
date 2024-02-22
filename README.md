# Eat Well

Eat Well is a web application that helps you find recipes based on the ingredients you have. You can also browse, rate, and save recipes from other users.

## Installation

To run this project, you need to have Node.js and MongoDB installed on your system. Then, follow these steps:

- Clone this repository using `git clone https://github.com/LorianHimself/eat-well.git`
- Navigate to the project directory using `cd eat-well`
- Install the dependencies using `npm install`
- Start the server using `npm start`
- Open your browser and go to `http://localhost:3000`

## Usage

To use this application, you need to create an account or log in with an existing one. Then, you can:

- Search for recipes by entering the ingredients you have in the search bar
- Browse recipes by category, popularity, or rating
- View the details, ingredients, and instructions of a recipe
- Rate and comment on a recipe
- Save a recipe to your favorites
- Create and edit your own recipes

## Structure

This project follows the MVC (Model-View-Controller) pattern and uses EJS as the templating engine. The main folders and files are:

- models: This folder contains the schema and models for the database using Mongoose. There are three models: User, Recipe, and Comment.
- public: This folder contains the static files such as images, stylesheets, and scripts for the front-end.
- routes: This folder contains the routes for handling requests using Express. There are four routes: index, users, recipes, and comments.
- views: This folder contains the EJS templates for rendering the views. There are four main views: layout, home, login, and register. The other views are partials that are included in the main views.
- .gitignore: This file specifies the files and folders that should not be tracked by Git.
- app.js: This file is the entry point of the application. It sets up the middleware, connects to the database, and starts the server.
- package.json: This file contains the metadata and dependencies of the project.


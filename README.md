# Software-Development-4155
Software Development Project
This guide will help you set up the project for both the front end and back end on your local environment.

Prerequisites
Node.js and npm (https://nodejs.org/)
MongoDB (https://www.mongodb.com/try/download/community)
WebStorm IDE or any code editor of your choice

Project Setup Instructions
Step 1: Clone the Repository
Clone the project repository from GitHub:

$ git clone <repository-url>

Step 2: Install Dependencies
Back End Setup
Navigate to the back-end directory:
$ cd Software-Development-4155/back-end
Install the necessary dependencies:
$ npm install

Front End Setup
Navigate to the front-end directory:
$ cd ../front-end

Install the necessary dependencies:
$ npm install

Step 3: Database Setup
Make sure MongoDB is running on your local system.
Populate the database with initial data:

$ cd ../back-end
$ node populate_database.js

Step 4: Start the Back End Server
To start the back end server, run the following command in the back-end directory:

$ npm start
The server should start on http://localhost:5000.

Step 5: Start the Front End Server
To start the front end server, run the following command in the front-end directory:

$ npm start
The front end should start on http://localhost:3000.

Notes
Environment Variables: Make sure you have a .env file in the back-end directory with your MongoDB connection URI, like so:

MONGO_URI=mongodb://localhost:27017/CLTAlertDB

Running Tests: You can run automated tests by navigating to the corresponding directory and executing:

$ npm test

Additional Scripts: You can add further scripts for linting, building, and testing as necessary.
Populate Database Script: The populate_database.js script should be placed in the back-end directory. This script will connect to the MongoDB database and add initial data such as test users or crime reports to set up the application for use.

Troubleshooting
If you encounter issues while running the database script, ensure MongoDB is up and running and that the URI is correct.
Make sure you are using the correct Node.js version as per the project's requirements.

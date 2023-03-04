# Fine Eats Application (MIT Fullstack Capstone Project)

## Table of content

- [Description](#description)
- [Installation Guidelines](#installation-guidelines)
- [Technology Used](#technology-used)
- [Features](#features)
- [Roadmap of Future Improvements](#roadmap-of-future-improvements)
- [Demo](#demo)
- [License](#license)

## Description
This restaurant delivery application is built with React Next.js and provides the ability to create an account, login in, choose dishes from a variety of restaurants and build an order.  Once the order is complete,  there is a credit card process that goes against the Stripe cloud service to verify the credit card and let the restaurant know that the payment information is good.

The application is three tiered with React/Next used for the client,  a Node server used for the backend APIs calls and a Strapi database that hosts the restaurant and dishes information.   In addition,  the cloud based Google Firebase authentication service is used to validate registrations and logins and the Stripe cloud based payment service is used for credit card validation.   The application is currently hosted on DigitalOcean.

## Installation Guidelines 
1. Clone this project to your local desktop.   There will be two subdirectories, <b>backend</b> (a back end server using node and express) and <b>fineeats</b> (a client side react Next.js project built with create-next-app).  The <b>backend</b> server provides the APIs to the Strapi database and routing logic.   

### Setting up the fineeats create-next-app application
1. Rename the new fineeats directory as we will be creating a new one with the same name with create-next-app.
2. Within the fineeats directory, run the following commands to create the create-next-app application.  Along with <b>next</b> and <b>react</> it will also install react-dom, react-bootstrap/reactstrap/styled-components (for styling), axios (for API calls),  and graphql (used to access Strapi).  Change to the new directory and run npm to install additional libraries.   This will create a new react Next.js application.   
&nbsp;&nbsp;&nbsp;   npx create-next-app fineeats  
&nbsp;&nbsp;&nbsp;   cd fineeats 
3. Verify that all of the dependencies found in the package.json were installed
4. Start up the create-next-app react generic application to make sure installation was successful.  It should start on localhost port 3000.  Then stop the app.
4. Delete everything from the new app's public and src directory.   Copy the files from the downloaded project which you renamed.
6. The <b>fineeats</b> application should be ready to run.  Run the <b>npm run dev</b> command and make sure the app comes up on port 3000.  You cannot log in yet as it relies on the backend server so lets get that project set up.   

### Setting up the node backend API server application
1. Go to the backend directory by issuing the command cd ../backend
2. Run the command below to create a node app and install dependencies  
&nbsp;&nbsp;&nbsp;   npm install  
&nbsp;&nbsp;&nbsp;   npm run build
3. Start up the server by issuing this command.   It will start the backend Strapi database server app on localhost:1337;  You can access the database admin console through localhost:1337/admin
&nbsp;&nbsp;&nbsp;   npm run dev

YOU SHOULD NOW BE UP AND RUNNING.  Run through the application functionality.  

## Technology Used
The client side application requires the following frameworks and libraries.   It runs on top of React Next.js
 - <b>Create_Next_App</b> - this installs the React Next.jsframework along with react and react-dom and sets up a generic project.
 - <b>Apollo</b> - used for API calls
 - <b>graphql</b> - used for query sending and receiving (through Axios) to the Strapi database
 - <b>Bootstrap</b> - CSS styling library    
 - <b>Axios</b> - Allows http calls to the backend api server
 - <b>Google Firebase</b> Authentication cloud service
 - <b>Stripe</b> payment verification cloud server
    
The server side application requires the following frameworks and libraries.   It runs on top of Node.
 - <b>Node</b> - Javascript code runtime environment 
 - <b>Strapi plugins (and dependencies)</b> - Used to build the Strapi model and set up routes
 - <b>Strapi database</b> - an extremely light noSQL database
## Features
This application is made up of 10 main functions
  - <b>index.js</b> which renders the main Restaurants home page
  - <b>_app.js</b> is the parent component that sets up the Context, Layout and global functions
  - <b>context.js</b> sets the user context including the user and cart information
  - <b>navbar.js</b> is the navigation bar component with links to all of the children components
  - <b>register.js</b> includes a page to register the user including by email and google using the Google Firebase service as well as to the Strapi database.
  - <b>login.js</b> includes a bootstrap/styled-components screen that logins the user.   It also uses the Google Firebase service and stores additional user data in the Strapi database.
  - <b>restaurantmenu.js</b> is navigated to from the Restaurant screens.  Shows dishes for the Restaurant
  - <bcart.js</b> holds all of the chosen dishes, amounts and quantity
  - <b>checkout.js</b> provides a screen to checkout the order including payment.   Goes against the Stripe service for validation
  - <b>orderhistory.js</b> shows user order history including the total amount, to address and dishes purchased
 
## Roadmap of Future Improvements
•	Create an account page to allow users to change their information
•	Have food by category and allow user to choose a category across all restaurants
•	Include delivery options

## Demo
* [Fine Eats Demo](http://164.92.99.205/)

## License

MIT License

Copyright (c) 2022
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Learn More about Create React App

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).


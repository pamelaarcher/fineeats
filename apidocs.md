# Fine Eats Application API Documentation
## Table of content

- [Overview](#overview)
- [GraphQL APIs](#graphql-apis)
- [Google Firebase APIs](#google-firebase-apis)
- [Stripe Payment APIs](#stripe-payment-apis)
- [Roadmap of Future Improvements](#roadmap-of-future-improvements)

## Overview
The Fine Eats application uses a set of GraphQL APIs to query the backend Strapi database, API calls to the Google Firebase authentication services and the Stripe vendor payment services.   This document describes these APIs.

## Direct STRAPI Routes
### USERS (POST Method)
 - <b>http://164.92.99.205:1337/auth/local`, {identifier, password}</b> - used to log in to Strapi.  The identifier is the same as the email.   This returns a jwt token along with other information on the user such as username and role.  For example,  this would look like the following in Postman   
 
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img width="469" alt="image" src="https://user-images.githubusercontent.com/106486280/223210483-7ce187f3-1233-4746-a283-135b79a57e69.png">

 
 - <b>http://164.92.99.205:1337/auth/local/register`, { username, email, password })
### Restaurants (GET Method)
 - <b>http://164.92.99.205:1337/restaurants</b> - brings back all restaurants and their associated dishes in JSON format
 - <b>http://164.92.99.205:1337/restaurants/count</b> - brings back restaurant count
 - <b>http://164.92.99.205:1337/restaurants/:id</b> - brings back information on a single restaurant and their associated dishes in JSON format
 
### Restaurants (POST Create Method)
 - <b>http://164.92.99.205:1337/restaurants</b> - posts a single restaurant to the database
 
### Restaurants (PUT Update Method)
  - <b>http://164.92.99.205:1337/restaurant/:id</b> - updates a specific restaurant from the database
  - 
### Restaurants (DELETE Method)
  - <b>http://164.92.99.205:1337/restaurant/:id</b> - deletes a specific restaurant from the database



 - <b>Apollo</b> - used for API calls
 - <b>graphql</b> - used for query sending and receiving (through Axios) to the Strapi database
 - <b>Bootstrap</b> - CSS styling library    
 - <b>Axios</b> - Allows http calls to the backend api server
 - <b>Google Firebase</b> Authentication cloud service
 - <b>Stripe</b> payment verification cloud server

## GraphQL APIs
The application uses the GraphQL Apollo client library to access the backend Strapi database running on the DigitalOcean hosted site via a Node backend server.   The APIs include

### Restaurants
 - <b>http://164.92.99.205:1337/restaurants/count</b> - this installs the React Next.jsframework along with react and react-dom and sets up a generic project.
 - <b>Apollo</b> - used for API calls
 - <b>graphql</b> - used for query sending and receiving (through Axios) to the Strapi database
 - <b>Bootstrap</b> - CSS styling library    
 - <b>Axios</b> - Allows http calls to the backend api server
 - <b>Google Firebase</b> Authentication cloud service
 - <b>Stripe</b> payment verification cloud server

## Google Firebase APIs
1. Clone this project to your local desktop.   There will be two subdirectories, <b>backend</b> (a back end server using node and strapi database) and <b>fineeats</b> (a client side react Next.js project built with create-next-app).  The <b>backend</b> server provides the APIs to the Strapi database and routing logic.   

## Stripe Payment APIs
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
 
## Roadmap of Future Improvements
•	Create an account page to allow users to change their information
•	Have food by category and allow user to choose a category across all restaurants
•	Include delivery options




# Fine Eats Application API Documentation
## Table of content

- [Overview](#overview)
- [GraphQL APIs](#graphql-apis)
- [Google Firebase APIs](#google-firebase-apis)
- [Stripe Payment APIs](#stripe-payment-apis)
- [Roadmap of Future Improvements](#roadmap-of-future-improvements)

## Overview

## GraphQL APIs
This restaurant delivery application is built with React Next.js and provides the ability to create an account, login in, choose dishes from a variety of restaurants and build an order.  Once the order is complete,  there is a credit card process that goes against the Stripe cloud service to verify the credit card and let the restaurant know that the payment information is good.

The application is three tiered with React/Next used for the client,  a Node server used for the backend APIs calls and a Strapi database that hosts the restaurant and dishes information.   In addition,  the cloud based Google Firebase authentication service is used to validate registrations and logins and the Stripe cloud based payment service is used for credit card validation.   The application is currently hosted on DigitalOcean.

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




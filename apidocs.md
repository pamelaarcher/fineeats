# Fine Eats Application API Documentation
## Table of content

- [Overview](#overview)
- [GraphQL APIs](#graphql-apis)
- [Google Firebase APIs](#google-firebase-apis)
- [Stripe Payment APIs](#stripe-payment-apis)
- [Roadmap of Future Improvements](#roadmap-of-future-improvements)

## Overview
The Fine Eats application uses a set of GraphQL APIs to query the backend Strapi database, API calls to the Google Firebase authentication services and the Stripe vendor payment services.   This document describes these APIs.

## STRAPI API calls
### USERS (POST Method)
 - <b>http://164.92.99.205:1337/auth/local`, {identifier, password}</b> - used to log in to Strapi.  The identifier is the same as the email.   This returns a jwt token along with other information on the user such as username and role.  Subsequent requests must contain the provided token within an Authorization header to be accessible and processed by Strapi as long as the user has the role authorization to access the data.   For example,  this would look like the following in Postman   
 
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img width="469" alt="image" src="https://user-images.githubusercontent.com/106486280/223210483-7ce187f3-1233-4746-a283-135b79a57e69.png">

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img width="636" alt="image" src="https://user-images.githubusercontent.com/106486280/223213434-a45bfdf3-1191-43a1-8e27-5ffc442718f7.png">

 - <b>http://164.92.99.205:1337/auth/local/register`, { username, email, password }</b> - used to register a user in Strapi.  This returns a jwt token as well as inforomation about the user.  Subsequent requests must contain the provided token within an Authorization header to be accessible and processed by Strapi as long as the user has the role authorization to access the data.   This would look like the following in Postman

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img width="658" alt="image" src="https://user-images.githubusercontent.com/106486280/223213689-928624ce-7dfe-4120-a6d9-6ff1529b87b2.png">

### Restaurants (GET Method)
 - <b>http://164.92.99.205:1337/restaurants</b> - brings back all restaurants and their associated dishes in JSON format.  The following information is available to return.   It can also be included in the data provided on the POST APIs.   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img width="524" alt="image" src="https://user-images.githubusercontent.com/106486280/223217524-c8d634a8-77c4-40f4-aaa4-f78b34c48089.png">

 - <b>http://164.92.99.205:1337/restaurants/count</b> - brings back restaurant count
 - <b>http://164.92.99.205:1337/restaurants/:id</b> - brings back information on a single restaurant and their associated dishes in JSON format
 
### Restaurants (POST Create Method)
 - <b>http://164.92.99.205:1337/restaurants</b> - posts a single restaurant to the database.  See the GET method for fields to include on your POST.
 
### Restaurants (PUT Update Method)
  - <b>http://164.92.99.205:1337/restaurant/:id</b> - updates a specific restaurant from the database.  See the GET method for fields to include on your PUT.
  - 
### Restaurants (DELETE Method)
  - <b>http://164.92.99.205:1337/restaurant/:id</b> - deletes a specific restaurant from the database based on the restaurant id.

### Dishes (GET Method)
 - <b>http://164.92.99.205:1337/dishes</b> - brings back all dishes in JSON format.  The following information is available to return.   It can also be included in the data provided on the POST APIs.   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img width="611" alt="image" src="https://user-images.githubusercontent.com/106486280/223219222-340a76ef-43bf-4a23-a869-526a478298d4.png">
 - <b>http://164.92.99.205:1337/dishes/count</b> - brings back the dishes count
 - <b>http://164.92.99.205:1337/dishes/:id</b> - brings back information on a single dish in JSON format
 
### Dishes (POST Create Method)
 - <b>http://164.92.99.205:1337/dishes</b> - posts a single dish to the database.  See the GET method for fields to include on your POST.
 
### Dishes (PUT Update Method)
  - <b>http://164.92.99.205:1337/dishes/:id</b> - updates a specific dish in the database.  See the GET method for fields to include on your PUT.

### Dishes (DELETE Method)
  - <b>http://164.92.99.205:1337/dishes/:id</b> - deletes a specific dish from the database based on the dish id.  
  
### Orders (GET Method)
 - <b>http://164.92.99.205:1337/orders</b> - brings back all orders in JSON format.  The following information is available to return.   It can also be included in the data provided on the POST APIs.   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img width="585" alt="image" src="https://user-images.githubusercontent.com/106486280/223220918-ca206874-22a6-4663-8691-9868264fd63c.png">

 - <b>http://164.92.99.205:1337/orders/count</b> - brings back the orders count
 - <b>http://164.92.99.205:1337/orders/:id</b> - brings back information on a single order in JSON format
 
### Orders (POST Create Method)
 - <b>http://164.92.99.205:1337/orders</b> - posts a single order to the database.  See the GET method for fields to include on your POST.
 
### Orders (PUT Update Method)
  - <b>http://164.92.99.205:1337/orders/:id</b> - updates a specific order in the database.  See the GET method for fields to include on your PUT.
  
### Orders (DELETE Method)
  - <b>http://164.92.99.205:1337/orders/:id</b> - deletes a specific order from the database based on the order id.

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

export const registerFirebase = (email, password, firebaseConfig) => {

    if (typeof window === "undefined") {
      return;
    }
    
    return new Promise((message) => {

      // Initialize Firebase if the first time
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
  
      //signup
      const auth = firebase.auth();
      const promise = auth.createUserWithEmailAndPassword(
        email,
        password
      );

      promise.then((res) => {
        const user = res.user
        message(user);
      })

      promise.catch((error) => {
        message(error);
        });
    });
};

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




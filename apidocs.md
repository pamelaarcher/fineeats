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

## Google Firebase APIs
1. <b>Registering a User in Google Firebase</b>  - the following code takes in an email, password and your firebase configuration, initializes the Firebase application and calls the auth.createUserWithEmailAndPassword method to register the user in Google Firebase using standard email and password.  The JWT token is returned in the response along with user information including their role authentication.   A firebase configuration example is as follows.   

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img width="482" alt="image" src="https://user-images.githubusercontent.com/106486280/223224967-f1eee8d9-3945-4a13-9efc-208be8506256.png">

<pre>
export const registerFirebase = (email, password, firebaseConfig) => {

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
</pre>

2. <b>Authenticating a User through Google Firebase using standard email and password</b>  - the following code takes in an email, password and your firebase configuration (see #1 above for an example of Firebase configuration), initializes the Firebase application and calls the auth.signInWithEmailAndPassword method to authenticate the user using standard email and password.  The JWT token is returned in the response along with user information including their role authentication.

<pre>
export const loginFirebase = (email, password, firebaseConfig) => {

  return new Promise((message) => {
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    //login
      const auth = firebase.auth();
      const promise = auth.signInWithEmailAndPassword(
        email.value,
        password.value
      );
      promise.then((res) => {
        const user = res.user
        message(user);
      })
      promise.catch((error) => {
        console.log(error)
        message(error)
      });
  });
};
</pre>

3. <b>Authenticating a User in Google Firebase using the Google Federated Identity service</b>  - the following code initializes the Firebase application and calls the <b>auth.GoogleAuthProvider</b> method to bring up the Google identity popup window showing the users available Google logins.   If the user is already logged into Google in the browser, the popup window automatically logs the user in using the Google email.  The JWT token is returned in the response along with user information including their role authentication.

<pre>
export const loginFirebaseGoogle = (firebaseConfig) => {
  return new Promise((resolve, reject) => {
     // Your web app's Firebase configuration

    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        Cookie.set("token", token);
        resolve(result);
      })
      .catch((error) => {
        // Handle Errors here.
        reject(error);
        console.error(error);
      });
  })
};
</pre>
## Stripe Payment APIs

### Setting up Stripe in your Application

1. Include the stripe APIs as a script in your application.   For this NEXT.js application,  it is referenced in _app.js.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Script src="https://js.stripe.com/v3" />

2. Import the following Stripe methods in your payment processing component

<pre>
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
</pre>

3. Call loadStripe() with your Stripe publishable API key to configure the Stripe library.   

<pre>
const promise = loadStripe("pk_test_51Ma3heKx9DdhcSyIQJj9VWDQHQ7uNLIx65sdyulywkzySfnbNxRbkwpp4Y1IJN7W4sDMNoQWkgukk35jnrpsrcbK00JnrDaRFh");
</pre>

4. Intialize the Stripe Elements.   Note that the Checkout Form that uses the Stripe credit card strip must be wrapped in the Elements provider.  This allows the child components to access the Stripe service via the Elements consumer.

<pre>
&lt;Elements stripe={promise}&gt;
&lt;CheckoutForm /&gt;
&lt;Elements\&gt;
</pre>

5. In your checkout component,  reference the cardElement.  This will add the Stripe credit card strip on the form 

<pre>
cardElement = elements.getElement(CardElement);
</pre>
 
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img width="373" alt="image" src="https://user-images.githubusercontent.com/106486280/223234620-06008b86-e493-4568-a338-804c22a00567.png">

 6. Once the user submits, call the CreateToken method using the cardElement for payment processing.  Stripe returns a token with an id that can be validated for success.
 
 <pre>
  const token = await stripe.createToken(cardElement);
  const userToken = Cookies.get("token");
 </pre>
 




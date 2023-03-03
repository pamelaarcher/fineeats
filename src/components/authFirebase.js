import Cookie from "js-cookie";

export const loginFirebaseGoogle = (firebaseConfig) => {

  if (typeof window === "undefined") {
    return;
  }
  
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

export const loginFirebase = (email, password, firebaseConfig) => {

  if (typeof window === "undefined") {
    return;
  }
  
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


export const logoutFirebase = (firebaseConfig) => { 
  
  return new Promise((message) => {

    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    //logout
      firebase.auth().signOut();
      message("success")
    });
  }

  // // login state
  // firebase.auth().onAuthStateChanged((firebaseUser) => {
  //   if (firebaseUser) {
  //     console.log("firebaseUser")
  //     console.log(firebaseUser);
  //   } else {
  //     console.log("User is not logged in");
  //   }
  // });


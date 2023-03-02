/* /context/AppContext.js */

import React from "react";
// create auth context with default value

// set backup default for isAuthenticated if none is provided in Provider
const AppContext = React.createContext(
    {isAuthenticated:false, 
        cart: {items:[], 
        totalitems:0, total:0},
        cartvisible: false,
        setCartVisible:()=>{},
        setCart:()=>{},
        ordervis: false,
        setOrderVis:()=>{},
        addItem:()=>{},
        removeItem:()=>{},
        user: null,
        userid: 0,
        setUser:()=>{},
        firebaseConfig: {
            apiKey: "AIzaSyDyF5u1V30WGskvkQvYbUhLWVa6AMKwI_g",
            authDomain: "mitcapstone-67b54.firebaseapp.com",
            databaseURL: "https://mitcapstone-67b54-default-rtdb.firebaseio.com",
            projectId: "mitcapstone-67b54",
            storageBucket: "mitcapstone-67b54.appspot.com",
            messagingSenderId: "302421247124",
            appId: "1:302421247124:web:4319ef926a296c04826081",
            measurementId: "G-M4MJSJ027G"
        },
    });
export default AppContext;
import { useContext, useState } from "react";
import Script from "next/script";
import Head from "next/head";
import AppContext from "../components/context";
import {GlobalContextProvider} from "../lib/GlobalContextProvider"
import Home from "./index"
import Layout from "../components/Layout/Layout"
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter
} from 'reactstrap'

import Cookie from "js-cookie"
import "../styles/bootstrap.css";
import "../styles/custom.css";
import "../styles/fonttypes.css"

function MyApp(props){
  var {isAuthenticated, cart, cartvisible, setCartVisible, setCart, ordervis, setOrderVis, addItem, removeItem, user, setUser, firebaseConfig} = useContext(AppContext)
  const [state,setState] = useState({cart:cart});
  const [curuser,setcurUser] = useState(user);
  const [isVisible, setVisible] = useState(cartvisible)
  const [checkoutVis, setCheckout] = useState(ordervis)
  const [isAuth,setcurAuth] = useState(isAuthenticated);
  const { Component, pageProps } = props;

  setUser = (user, auth) => {

    if (!user && user===null) {
      setcurUser(null)
    } else {
      setcurUser({ 
        email:user.email, 
        username:user.username, 
        id:user.id });
    }
    setcurAuth(auth);
  };

  setCart = (cart) => {
    setState({cart:cart})
  };


  setCartVisible = (cartvisible) => {
    setVisible(cartvisible);
  };
  
  setOrderVis = (ordervis) => {
    setCheckout(ordervis);
  };

  addItem = (item) => {
    let { items } = state.cart;
    //check for item already in cart
    //if not in cart, add item if item is found increase quanity ++
    let foundItem = true;
    if(items.length > 0){
      foundItem = items.find((i) => i.id === item.id);
     
      if(!foundItem) foundItem = false;
    }
    else{
      foundItem = false;
    }
    
    // if item is not new, add to cart, set quantity to 1
    if (!foundItem) {
      //set quantity property to 1
    
      let temp = JSON.parse(JSON.stringify(item));
      temp.quantity = 1;
      var newCart = {
          items: [...state.cart.items,temp],
          totalitems: state.cart.totalitems + 1,
          total: state.cart.total + item.price,
      }
      setState({cart:newCart})
    } else {
      // we already have it so just increase quantity ++
      newCart= {
          items: items.map((item) =>{
            if(item.id === foundItem.id){
              return Object.assign({}, item, { quantity: item.quantity + 1 })
             }else{
            return item;
          }}),
          total: state.cart.total + item.price,
          totalitems: state.cart.totalitems + 1,
        }
    }
    setState({cart: newCart});  // problem is this is not updated yet 
  };
  removeItem = (item) => {
    let { items } = state.cart;
    //check for item already in cart
    const foundItem = items.find((i) => i.id === item.id);
    if (foundItem.quantity > 1) {
      var newCart = {
        items: items.map((item) =>{
        if(item.id === foundItem.id){
          return Object.assign({}, item, { quantity: item.quantity - 1 })
         }else{
        return item;
      }}),
      total: state.cart.total - item.price,
      totalitems: state.cart.totalitems - 1,
      }
    } else { // only 1 in the cart so remove the whole item
      const index = items.findIndex((i) => i.id === foundItem.id);
      items.splice(index, 1);
      var newCart= { items: items, totalitems: state.cart.totalitems - 1, total: state.cart.total - item.price } 
    }
    setState({cart:newCart});
  }

  return (
    <GlobalContextProvider>
    <AppContext.Provider value={{isAuthenticated:isAuth, cart: state.cart, cartvisible: isVisible, setCartVisible: setCartVisible, setCart: setCart, ordervis: checkoutVis, setOrderVis:setOrderVis, addItem: addItem, removeItem: removeItem, user:curuser, setUser:setUser, firebaseConfig: firebaseConfig}}>
      <Script src="https://js.stripe.com/v3" />
      <Script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js"/>
      <Script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-auth.js"/>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
    </GlobalContextProvider>
  );
  
}


export default MyApp;

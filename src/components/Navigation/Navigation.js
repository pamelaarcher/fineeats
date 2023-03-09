import {useContext} from "react"
import { Nav, Navbar, NavItem, Offcanvas } from "react-bootstrap";
import {Cart} from "../Cart/Cart"
import {GlobalContext} from "../../lib/GlobalContextProvider";
import AppContext from "../context";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { logout } from "../auth";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Link from "next/link";
import { SocialIcon } from 'react-social-icons';

import {
  StyledNavBar,
  StyledNavbarBrand, 
  StyledOffCanvas,
  HamburgerMenu,
  HamburgerCenter,
  CartButton,
  CartCenter
} from "./Navigation.styles";

export function Navigation(){

  const context = React.useContext(GlobalContext); 
  // const [url, setUrl] = useState(null);
  const [logo, setLogo] = useState("./images/fineeatlogo.png");

  const {cart, isAuthenticated, user, setUser, cartvisible, setCartVisible, ordervis,  setOrderVis} = useContext(AppContext)
  const [show, setShow] = useState(false);
  const [showCart, setShowCart] = useState(cartvisible);
  const [showCheckout, setCheckout] = useState(false);

  const [stripePromise, setStripePromise] = useState(() => loadStripe(
    "pk_test_51Ma3heKx9DdhcSyIQJj9VWDQHQ7uNLIx65sdyulywkzySfnbNxRbkwpp4Y1IJN7W4sDMNoQWkgukk35jnrpsrcbK00JnrDaRFh"
    ));

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {asPath} = useRouter();
  const router = useRouter();

  const toggleCart = () => {
    if(showCart === false) {
      setShowCart(true);
      setCartVisible(true);     
    }
    else {
      setShowCart(false);
      setCartVisible(false);
    }
  }

  const openCart = () => {
      setShowCart(true);
      setCartVisible(true);     
    }

  const removeUser = () => {
   // let user={email: null, username: null, id: 0};
    setUser(null, false);
    {handleClose}
    router.push("/");
  }
  
  return (
    <>
    <StyledNavBar key="md" fixed="top" expand="md">
      <StyledNavbarBrand href="/">
          <img src={logo} height="95%" alt="logo"/>
      </StyledNavbarBrand>
      {context.windowWidth < 768 ? (
        <>
        {isAuthenticated ? (
          <>
            <h5>{user.username}</h5>
            <CartButton suppressHydrationWarning={true} onClick={openCart}>
              <CartCenter>
                <img src='./images/cart.svg' fill="white"></img>
                {cart ? (
                      <h4>{cart.totalitems}</h4>
                      ):(<h4>0</h4>)
                }
              </CartCenter>
            </CartButton>
          </>
        ):null} 
        <HamburgerMenu aria-controls="offcanvasNavbar" onClick={handleShow}>
          <HamburgerCenter/>
        </HamburgerMenu>
        </>
      ):null}
      <StyledOffCanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="start"
        restoreFocus={false}
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">
            <StyledNavbarBrand href="#">
            <img src={logo} width="60%" alt="logo"/>
            </StyledNavbarBrand>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>    
            <Nav className="justify-content-end flex-grow-1 navbar-nav">
              {(context.windowWidth >= 768 && isAuthenticated) ? (
                <Nav.Item>
                  <h5>Logged In As {user.username}</h5>
                </Nav.Item>
                ) : (
                null
              )}  
              <Nav.Item>
              <Link href="/">
                <a className={(asPath === "/") ? "nav-link active" : "nav-link inactive"} id="home" onClick={handleClose}>Restaurants</a>
              </Link>
              </Nav.Item>
              <Nav.Item>
                {isAuthenticated ? (
                  <Link href="/orderhistory">
                    <a className={(asPath === "/orderhistory") ? "nav-link active" : "nav-link inactive"} id="orderhistory" onClick={handleClose}>Orders</a>
                  </Link>
                ) : (
                  <Link href="/register">
                    <a className={(asPath === "/register") ? "nav-link active" : "nav-link inactive"} id="register" onClick={handleClose}>Sign Up</a>
                  </Link>
                )}
              </Nav.Item>
              <Nav.Item>
                {isAuthenticated ? (
                  <Link href="/">
                    <a className={(asPath === "/logout") ? "nav-link active" : "nav-link inactive"} id="logout" onClick={removeUser}>Logout</a>
                  </Link>
                ) : (
                  <Link href="/login">
                    <a className={(asPath === "/login/") ? "nav-link active" : "nav-link inactive"} id="login" onClick={handleClose}>Sign In</a>
                  </Link>
                )}
              </Nav.Item>
            </Nav>
            {(context.windowWidth >= 768 && isAuthenticated) ? (
              <>
              {/* <SocialIcon url="https://linkedin.com/in/pamela-archer-671b471" bgColor="#7ADFFF" style={{marginTop: "24px", marginLeft: "10px", marginRight: "12px", marginTop: "8px", height: 30, width: 30}}/> */}
              <SocialIcon url="https://github.com/pamelaarcher/fineeats" bgColor="#ffb600" style={{marginLeft: "5px", marginRight: "5px", marginTop: "12px", height: 30, width: 30}} target="_blank"/>
              <CartButton suppressHydrationWarning={true} onClick={openCart}>
                <CartCenter>
                  <img src='./images/cart.svg' fill="white"></img>
                </CartCenter>
                {cart ? (
                  <h4>{cart.totalitems}</h4>
                  ):(<h4>0</h4>)
                  }
              </CartButton>
              {cartvisible ? (<Cart> </Cart>):null}
              {ordervis ? (
                <Elements stripe={stripePromise}>
                  <CheckoutForm
                    cart={cart}
                    ordervis={ordervis}
                  />
                </Elements>
              ):null}
              </>
            ):null}
         </Offcanvas.Body>
      </StyledOffCanvas>
    </StyledNavBar>
    </>
  );
}

import React, { useState, useContext } from "react";
import { FormGroup, Label, Input} from "reactstrap";
import fetch from "isomorphic-fetch";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import CardSection from "../cardSection";
import CardSection from "../CardSection/CardSection";
import AppContext from "../context";
import Cookies from "js-cookie";

import { 
  CancelButton,
  StyledCheckout,
  StyledCard,
  StyledCardBody,
  StyledModal,
  StyledModalHeader,
  StyledModalBody
 } from "./CheckoutForm.styles"; 

function CheckoutForm() {
  const [data, setData] = useState({
    address: "",
    city: "",
    state: "",
    stripe_id: "",
  });
  const stripe = useStripe();
  const elements = useElements();
  //const appContext = useContext(AppContext);
  const {cart, setCart, ordervis,  setOrderVis} = useContext(AppContext)
  const [ordershow, setCheckout] = useState(ordervis);
  const [error, setError] = useState("");
  const [cardinput, setCard] = useState("");
  const [curModal, setModal] = useState(false);
  
  const togglemodal = () => setModal(!curModal);

  const setCardInput = (value) =>{
     setCard({value})
}
  
  const checkoutClose = () => {
    setOrderVis(false)
    setCheckout(false)
  };

  const checkoutSuccess = () => {
    togglemodal()
    setOrderVis(false)
    setCheckout(false)
  }

  function onChange(e) {
    // set the key = to the name property equal to the value typed
    const updateItem = (data[e.target.name] = e.target.value);
    // update the state data object
    setData({ ...data, updateItem });
  }

  async function submitOrder() {
    // event.preventDefault();

    // // Use elements.getElement to get a reference to the mounted Element.
    const cardElement = elements.getElement(CardElement);

    // // Pass the Element directly to other Stripe.js methods:
    // // e.g. createToken - https://stripe.com/docs/js/tokens_sources/create_token?type=cardElement
    // get token back from stripe to process credit card
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://164.92.99.205:1337";

    const token = await stripe.createToken(cardElement);
    const userToken = Cookies.get("token");
    const response = await fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: userToken && { Authorization: `Bearer ${userToken}` },
      body: JSON.stringify({
        amount: Number(Math.round(cart.total + "e2") + "e-2"),
        dishes: cart.items,
        address: data.address,
        city: data.city,
        state: data.state,
        token: token.token.id,
      }),
    });

    if (!response.ok) {
      setError(response.statusText);
      console.log(response.statusText)
    }
    else {
      setModal(true)
      // setOrderVis(false);
      // setCheckout(false)
      var newCart = {
        items: [],
        totalitems: 0,
        total: 0,
      }
      setCart(newCart)
      console.log("SUCCESS")
    }
  
  }

  return (
    <StyledCheckout>
      <StyledCard>
        <CancelButton onClick={checkoutClose}>X</CancelButton>
        <StyledCardBody>
          <h3>Cart Checkout</h3>
          <h4>Your Total Is: ${Math.round(cart.total * 100)/100}</h4>
          <hr />
          <FormGroup style={{ display: "flex" }}>
            <div style={{ flex: "0.90", marginRight: 10 }}>
              <Label>Address</Label>
              <Input name="address" onChange={onChange} />
            </div>
          </FormGroup>
          <FormGroup style={{ display: "flex" }}>
            <div style={{ flex: "0.65", marginRight: "6%" }}>
              <Label>City</Label>
              <Input name="city" onChange={onChange} />
            </div>
            <div style={{ flex: "0.25", marginRight: 0 }}>
              <Label>State</Label>
              <Input name="state" onChange={onChange} />
            </div>
          </FormGroup>

          <CardSection data={data} stripeError={error} submitOrder={submitOrder} cardInput={setCardInput}/>
        </StyledCardBody>
      </StyledCard>
      <StyledModal 
        isOpen={curModal} 
        toggle={togglemodal}
      >
        <StyledModalHeader>
          <h5>Payment Success</h5>
          <CancelButton onClick={checkoutSuccess}>X</CancelButton>
        </StyledModalHeader>
        <StyledModalBody>You have successfully submitted your payment</StyledModalBody>
      </StyledModal>

    </StyledCheckout>
  );
}
export default CheckoutForm;
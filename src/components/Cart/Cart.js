import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { Button, Card, CardBody, CardTitle, Badge } from "reactstrap";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
import AppContext from "../context"
// import {CheckoutForm} from '../CheckoutForm/CheckoutForm'
// import CheckoutForm from "../checkoutForm";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

import Link from "next/link"
import {
  StyledCart,
  StyledItem,
  StyledCard,
  StyledCardBody,
  OrderButton,
  AddItemButton,
  RemoveItemButton,
  CancelButton,
  StyledTotal
} from "./Cart.styles"

function Cart() {
  let isAuthenticated = true;
  let {cart,addItem,removeItem , cartvisible, setCartVisible, ordervis, setOrderVis} = useContext(AppContext);
  const router = useRouter();
    
  const [showCart, setShowCart] = useState(cartvisible);
  const [showCheckout, setCheckout] = useState(ordervis);

  setOrderVis(false)

  const cartCancel = () => {
    setShowCart(false);
    setCartVisible(false);
  };

  function closeCart() {
    setShowCart(false);
    setCartVisible(false);
    setOrderVis(true);
    setCheckout(true)
  }

  const renderItems = ()=>{
  let {items} = cart;
    if(items && items.length){
      var itemList = cart.items.map((item) => {
          if (item.quantity > 0) {
            return (
              <StyledItem
                key={item.id}
              >
                {/* <div> */}
                  <span id="item-price">&nbsp; ${item.price}</span>
                  <span id="item-name">&nbsp; {item.name}</span>
                {/* </div> */}
                {/* <div> */}
                  <AddItemButton
                    onClick={() => addItem(item)}
                    color="link"
                  >
                    +
                  </AddItemButton>
                  <RemoveItemButton
                    onClick={() => removeItem(item)}
                    color="link"
                  >
                    -
                  </RemoveItemButton>
                  <span style={{ marginLeft: 5 }} id="item-quantity">
                    ({item.quantity})
                  </span>
              </StyledItem>
            );
          }
        })
        return itemList;
      }
    else {
        return (<div></div>)
    }
  }
const checkoutItems = ()=>{
  return (
    <StyledTotal>
      <Badge>
        <h4>Total: ${Math.round(cart.total * 100)/100}</h4>
      </Badge>
          {/* <Link href="/checkout/"> */}
            <OrderButton onClick={closeCart}>
              <a>Order</a>
            </OrderButton>
          {/* </Link> */}
    </StyledTotal>
  )}

// return Cart
  return (

    <StyledCart>
      <CancelButton onClick={cartCancel}>X</CancelButton>
      <h3> Cart Dishes</h3>
      <StyledCard>
        <StyledCardBody>
          <div>
            {renderItems()}
          </div>
          <div>
            {checkoutItems()}
          </div>
        </StyledCardBody>
      </StyledCard>
    </StyledCart>
  );
}
export default Cart;

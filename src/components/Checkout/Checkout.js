import React, { useContext } from "react";
import { Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "../components/CheckoutForm/CheckoutForm";
import CheckoutForm from "../checkoutForm";
import AppContext from "../context";

import {
  DividerContent
} from '../../lib/GlobalStyles'

export function Checkout() {
  // get app context
  const {isAuthenticated} = useContext(AppContext);
  
  // load stripe to inject into elements components
  const stripePromise = loadStripe(
    "pk_test_51Ma3heKx9DdhcSyIQJj9VWDQHQ7uNLIx65sdyulywkzySfnbNxRbkwpp4Y1IJN7W4sDMNoQWkgukk35jnrpsrcbK00JnrDaRFh"
  );

  return (
    <Row>
      <Modal
        isOpen={true} 
        toggle={true}
        centered
        backdrop="static"
        keyboard={false}
       >
       <ModalHeader>Cart Checkout</ModalHeader>
       <ModalBody style={{ paddingLeft: 5 }} sm={{ size: 6, order: 2 }}>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
       </ModalBody>
      </Modal>
    </Row>
  );
  // }
}

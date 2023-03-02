import React, {useState} from "react";
import {Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter, Button} from 'reactstrap'

import { CardElement } from "@stripe/react-stripe-js";
import {
  CheckoutButton,
  CancelButton,
  StyledModal
} from "../CheckoutForm/CheckoutForm.styles"


function CardSection({data, stripeError, submitOrder}) {

  const [curCard, setCard] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = async (event) => {
      console.log("postalcode")
      console.log(event.value.postalCode)
      console.log(data)
      setCard(event.value.postalCode)
  };

  const toggleLoading = () => {
    setLoading(!loading)
  }

  function handleCheckout() {
    toggleLoading()
    submitOrder()

};

  return (
    <div>
      <div>
        <label htmlFor="card-element">Credit or debit card</label>

        <div>
          <fieldset style={{ border: "none" }}>
            <div className="form-row">
              <div id="card-element" style={{ width: "100%" }}>
                <CardElement
                  options={{
                    style: { width: "100%", base: { fontSize: "18px" } },
                  }}
                  onChange={handleChange}
                />
              </div>
              <br />
              <CheckoutButton 
                disabled={data.address.length<1 || data.city.length<1 || data.state.length<1 || curCard.length<1 || loading} 
                onClick={handleCheckout}>
                   {loading ? "Loading... " : "Checkout"}
              </CheckoutButton>
              {stripeError ? (
                <div>{stripeError.toString()}</div>
              ) : (null)

              }
              <div id="card-errors" role="alert" />
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
export default CardSection;

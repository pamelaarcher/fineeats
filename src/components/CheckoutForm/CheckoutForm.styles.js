import styled from 'styled-components'
import {Button, Card, CardBody, FormGroup, Label, Input, Modal, ModalHeader, ModalFooter, ModalBody} from "reactstrap";

export const StyledCheckout=styled.div`
 position: fixed;
 width: 500px;
 top: 60px;
 right: 10px;
 
 /* inset: 60px auto auto auto; */
 visibility: visible;
 opacity: 1;
 transform: translateY(0);
 border: none;
 border-radius: 12px;
 margin-top: 8px;
 box-shadow: 0 0 0 1px rgb(67 41 163 / 20%), 0 1px 12px 0 rgb(67 41 163 / 20%);
 z-index: 1040;
 background: var(--bs-gray-400);
 transition: .25s ease-out;
 transition-property: opacity,transform,visibility;

 &:before {
    content: "";
    position: absolute;
    top: -6px;
    right: 2.9em;
    z-index: -1;
    width: 14px;
    height: 14px;
    transform: rotate(45deg);
    background: rgb(248, 247, 242);
    box-shadow: rgb(61 90 113 / 40%) -4px -4px 4px;
}

  h1 {
  color: var(--bs-primary);
  margin-bottom: 20px;
  }

  h3 {
    color: var(--bs-primary);
    font-size: 1.5em;
    margin-bottom: 20px;
    text-align: center;
  }

  h4 {
  color: var(--bs-accent-2);
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 20px;
}

  label {
    color: var(--bs-primary);
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 1.2em;
  }


  /* .form-half {
    flex: 0.5;
  }
  * {
    box-sizing: border-box;
  }

  .Checkout {
    margin: 0 auto;
    max-width: 800px;
    box-sizing: border-box;
    padding: 0 5px;
  } */
  form {
    margin-bottom: 40px;
    padding-bottom: 40px;
    border-bottom: 3px solid #e6ebf1;
  }
  input,
  .StripeElement {
    display: block;
    background-color: #f8f9fa !important;
    margin-top: 0;
    margin-bottom: 10px;
    max-width: 500px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 10px;
    font-size: 1em;
    font-family: "Source Code Pro", monospace;
    box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
      rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
    border: 0;
    outline: 0;
    border-radius: 4px;
    background: white;
  }
  input::placeholder {
    color: #aab7c4;
  }
  input:focus,
  .StripeElement--focus {
    box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px,
      rgba(0, 0, 0, 0.0784314) 0px 1px 3px;
    -webkit-transition: all 150ms ease;
    transition: all 150ms ease;
  }
  .StripeElement.IdealBankElement,
  .StripeElement.PaymentRequestButton {
    padding: 0;
  }
`;

export const StyledCard=styled(Card)`
  background: var(--bs-secondary);
  border-radius: 12px;
  border-radius: 0;
  margin-top: 0;
  border-radius: 12px;
`;

export const StyledCardBody=styled(CardBody)`
  background: var(--bs-secondary);
  border-radius: 12px;
`;

export const CheckoutButton=styled(Button)`
  /* position: absolute;
  top: 5px;
  right: 20px; */
  /* display: block; */
  float: right;
  background: linear-gradient(0deg, rgba(192,145,26,1) 0%, rgba(255,182,0,1) 100%);
  width: 110px;
  height: 35px;
  color: #fff;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 16px;
  padding: 0px;
  cursor: pointer;
  transition: all 0.3s ease;

  
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  border-color: rgba(108,117,125,.1);

&:hover {
  background: linear-gradient(0deg, rgba(79,110,118,1) 0%, rgba(96,145,158,1) 100%);
}

&.disabled {
  background: linear-gradient(0deg, rgba(108,117,125,1) 0%, rgba(108,117,125,1) 100%);
}
`;

export const CancelButton=styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
  background: linear-gradient(0deg, rgba(79,110,118,1) 0%, rgba(96,145,158,1) 100%);
  width: 50px;
  height: 35px;
  color: #fff;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 24px;
  padding: 0px;
  cursor: pointer;
  transition: all 0.3s ease;

  
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  border-color: rgba(108,117,125,.1);

&:hover {
  background: linear-gradient(0deg, rgba(192,145,26,1) 0%, rgba(255,182,0,1) 100%);
}
`;

export const StyledModal=styled(Modal)`
  position: absolute;
  width: 400px;
  top: 40px;
  right: 20px;
//  background: var(--bs-gray-200);
  border-radius: 12px;
`;

export const StyledModalBody=styled(ModalBody)`
  font-size: 1em;
  font-family: "Monserrat", sans-serif;
//  background: var(--bs-gray-200);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding-left: 20px;
`;

export const StyledModalHeader=styled(ModalHeader)`
//  background: var(--bs-gray-200);
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 0;
  border-bottom-color: var(--bs-accent-2);

  h5 {
    color: var(--bs-primary);
    font-size: 1.2em;
    margin: 0;
    padding: 0;
  }
`;
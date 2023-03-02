import styled from "styled-components"
import {Form, Button} from 'react-bootstrap';

export const StyledForm = styled(Form)`
    width: 100%;
    margin: 0px;

    .form-control {
      width: 75% !important;
    }

    /* .mb-3 {
      width: 200px;
      margin-left: 10px;
      margin-right: 10px;
    } */
`;

export const StyledLabel = styled(Form.Label)`

    color: #D1A22B !important;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 2px;
`;

export const StyledButton = styled(Button)`
  background: linear-gradient(0deg, rgba(209,162,43,1) 0%, rgba(255,182,0,1) 100%);
  border: none;
  width: 110px;
  height: 35px;
  color: #fff;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
  right: 10px;
  bottom: 10px;
`;
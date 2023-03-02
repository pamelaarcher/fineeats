import styled from 'styled-components';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

export const StyledHeader=styled.div`
  position: absolute;
  top: .5vw;
  left: 2em;
  width: 50%;
  height: 20vh;
  box-sizing: border-box;
  display: flex;
  font-size: 1em;
  text-align: start;
  z-index: 20;


h3 {
  color: var(--bs-gray-100);
  font-family: "Montserrat", sans-serif;
  margin-top: 1em;
  overflow-wrap: break-word;
  margin-bottom: .2em;
}

@media (max-width: 768px) {
    h3 {
      padding-top: 1vw;
      font-size: 4vw;
    }
  }

@media (min-width: 768px) {
    h3 {
      padding-top: 3vw;
      font-size: 3.2vw;
    }
  }
`;


export const StyledOrders=styled(Container)`
  position: relative;
  margin-top: 20px;

h2 {
  color: var(--bs-primary);
  margin-top: 28px;
  margin-bottom: 20px;
}

h3 {
  color: var(--bs-gray-100);
  font-family: "Montserrat", sans-serif;
  font-size: 3.2vw;
  margin-bottom: .2em;
}

h4 {
    font-size: 1em;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    padding-bottom: 0.5em;
    text-transform: uppercase;
    color: var(--navigation-active-color);
  }
`;
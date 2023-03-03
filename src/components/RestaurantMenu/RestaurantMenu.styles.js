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

export const StyledMenu=styled(Container)`
  position: relative;
  margin-top: 30px;

  h1 {
  text-transform: uppercase;
  font-size: 2vw;
  color: var(--bs-accent-2);
  padding-left: 0;
  margin-top: 35px;
  margin-bottom: 20px;
  }

  h2 {
  color: var(--bs-primary);
  margin-top: 28px;
  margin-bottom: 10px;
}

h3 {
  color: var(--bs-accent-2);
  margin-top: 28px;
  margin-bottom: 10px;
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
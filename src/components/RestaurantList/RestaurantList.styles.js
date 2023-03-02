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

export const StyledRestaurants=styled(Container)`
  position: relative;
  margin-top: 20px;

h2 {
  color: var(--bs-primary);
  margin-top: 28px;
  margin-bottom: 20px;
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
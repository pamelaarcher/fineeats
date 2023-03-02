import styled from "styled-components"
import {
  Container,
  Button
} from "reactstrap";

export const StyledContainer=styled(Container)`

  .paper {
    border: 1px solid lightgray;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14),
      0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    border-radius: 6px;
    margin-top: 90px;
  }
  .notification {
    color: #ab003c;
  }
  .header {
    width: 100%;
    height: 80px;
    background-color: var(--bs-accent-1);
    padding: 0;
    margin-bottom: 10px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  .wrapper {
    padding: 10px 30px 20px 30px !important;
  }
  a {
    color: blue !important;
  }

  img {
    float: left;
    margin-top: 1vw;
    margin-left: 1vw;
    padding: 0;
  }

  h2 {
    float: left;
    padding: 0;
    padding-top: 1.3vw;
    margin: 0;
    margin-left: 2vw;
    text-align: center;
    color: var(--bs-secondary);
  }

  label {
    color: var(--bs-primary);
    font-weight: 600;
    font-size: 1.6vw;
    padding: 0;
    padding-top: .5vw;
    padding-bottom: 0vw;
    margin: 0;
  }

input {
    color: var(--bs-gray-800);
    display: flex;
    font-weight: 600;
    font-size: 1.6vw;
    height: 100%;
    padding: 1vw;
    padding-top: .5vw;
    padding-bottom: .5vw;
    margin: 0;
  }

small {
  color: var(--bs-gray-800);
}

a {
  text-decoration-color: var(--bs-gray-800);
}
`;

export const StyledButton=styled(Button)`
`;
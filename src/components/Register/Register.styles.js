import styled from "styled-components"
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

export const StyledContainer=styled(Container)`

  .paper {
    border: 1px solid lightgray;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14),
      0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    border-radius: 6px;
    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;
    height: auto;

  }
  .notification {
    color: #ab003c;
  }
  .header {
    width: 100%;
    height: 80px;
    background-color: var(--bs-accent-1);
    padding: 0;
    margin-bottom: 0px;
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
    margin: 0;
    margin-left: 2vw;
    text-align: center;
    color: var(--bs-secondary);
  }

  h4 {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    margin-top: 5px;
    padding-bottom: 10px;
    margin-bottom: 0;
    text-transform: uppercase;
    color: var(--navigation-active-color);
  }

  label {
    color: var(--bs-primary);
    font-weight: 600;
    padding: 0;
    padding-top: .5vw;
    padding-bottom: 0vw;
    margin: 0;
  }

input {
    color: var(--bs-gray-800);
    display: flex;
    font-weight: 400;
    font-size: 1rem; 
    height: 100%;
    padding: 1vw;
    padding-top: .5vw;
    padding-bottom: .5vw;
    margin: 0;
  }

small {
  color: var(--bs-gray-800);
  font-weight: thin;
}

a {
  text-decoration-color: var(--bs-gray-800);
  text-decoration-line: underline;
  text-decoration-thickness: 1px;
}


@media (max-width: 768px) {
    .paper {
      width: 350px;
      font-size: 4vw;
    }
    h2 {
      padding-top: 2.2vw;
    }
    h4 {
      padding-top: 2.2vw;
      font-size: 4vw;
    }
    small {
      color: var(--bs-gray-800);
      font-size: .6em;
      font-weight: thin;
    }
  }

  @media (min-width: 768px) {
    .paper {
      width: 500px;
      font-size: 1.6vw;
    }
    h2 {
      padding-top: 1.4vw;
    }

    h4 {
      padding-top: 2.2vw;
      font-size: 1.2em;
    }

    font-size: 1.3vw;
    small {
      font-size: .8em;
    }
  }

  @media (min-width: 1080px) {
  h4 {
      padding-top: 1.5vw;
      font-size: 1em;
    }
  }
`;

export const StyledLabel=styled(Label)`
  font-family: "Monserrat", sans-serif;
  color: var(--bs-primary);
  font-size: 1.1rem;
`;

export const StyledInput=styled(Input)`
  height: 60px;
  background-color: #ffff;
  font-size: 1rem;
  font-weight: 400;
`;

export const StyledFormGroup=styled(FormGroup)`
  margin: 0;

`;




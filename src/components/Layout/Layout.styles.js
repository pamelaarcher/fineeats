import styled from "styled-components";
import { Container} from "react-bootstrap";

export const StyledLayout=styled(Container)`
  position: relative;
  z-index: 0;
  width: 100%;
  max-width: 100%;
  height: auto;
  margin: 0;
  margin-top: 64px;
  padding: 0;

  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Montserrat, Sans-Serif; 
  }

  a {
    color: white;
  }

  h5 {
    color: white;
    padding-top: 11px;
  }

`;
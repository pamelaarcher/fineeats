import styled from 'styled-components';
import {Row, Col, ListGroup} from "react-bootstrap"

export const Wrapper = styled.footer`
    position: relative;
    width: 100%;
    height: auto;
    margin: 0p;
    padding: 0;
    background-color: #1D252C;
  `;

export const StyledRow = styled(Row)`
      /* position: relative; */
      width: 100% !important;
      height: auto;
      margin: 0 !important;
      margin-right: 0;
      margin-left: 0;
      padding: 0;
      background-color: #1D252C;
  `;

export const StyledCol = styled(Col)`
  padding: 0;
  margin: 0;
`;

export const SignUpBox = styled.div`

margin-top: 20px;

  @media (max-width: 576px) {
    width: 98%;
    margin-left: 5px;
    margin-right: 5px;
    padding-left: 10px;
    padding-bottom: 20px;
    border-right: 0px solid #1D252C !important;
    border-bottom: 6px solid rgba(62, 127, 149, 0.75)
    }

  @media (max-width: 992px) and (min-width: 576px) {
    width: 98%;
    margin-left: 5px;
    margin-right: 0px;
    margin-bottom: 10px;
    padding-left: 10px;
    padding-bottom: 20px;
    border-right: 0px solid #1D252C !important;
    border-bottom: 6px solid rgba(62, 127, 149, 0.75)
    }

  @media (min-width: 992px) {
    margin-left: 20px;
    margin-bottom: 20px;
    padding-bottom: 30px;
    border-bottom: 0px solid #1D252C !important;
    border-right: 2px solid rgb(255,182,0, 85%) !important
  }

`;

export const SiteMap = styled.div`
  margin-top: 20px;

  h5 {
    font-size: 20px;
  }

  @media (max-width: 576px) {
    width: 98%;
    margin-left: 5px;
    margin-right: 5px;
    padding-bottom: 20px;
    border-right: 0px solid #1D252C !important;
    border-bottom: 6px solid rgba(62, 127, 149, 0.75);
    padding-left: 30px !important;
  }

  @media (max-width: 992px) and (min-width: 576px) {
    padding-left: 30px;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-right: 2px solid rgb(255,182,0, 85%) !important;
    border-bottom: 0px solid #1D252C !important;
  }

  @media (min-width: 992px) {
    margin-left: 0px !important;
    margin-right: 0px !important;
    margin-bottom: 0px;
    padding-bottom: 38px;
    padding-left: 20px;
    padding-right: 10px;
    border-right: 2px solid rgb(255,182,0, 85%) !important
    /* border-right: 0px solid #1D252C !important; */
    /* border-bottom: 0px solid #1D252C !important; */
  }

  a:hover {
    color: #ffb600;
    /* text-decoration: underline #ffb600;
    text-decoration-thickness: 3px; */
  }
`;

export const ContactUs = styled.div`
  width: 100%;
  height: 90%;
  padding-left: .25em;
  margin-top: 16px;
  margin-bottom: 10px;
  /* border-right: 2px solid rgb(255,182,0, 85%) !important; */

  @media (max-width: 576px) {
    margin-left: 5px;
    margin-right: 5px;
    padding-left: 30px;
    padding-bottom: 20px;
    border-right: 0px solid #1D252C !important;
  }

  @media (max-width: 992px) and (min-width: 576px) {
    width: 90%;
    padding-left: 20px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    padding-bottom: 20px;
    border-right: 0px solid #1D252C !important;
  }

h2 {
  padding-top: 10px;
  font-size: 18px;
  color: #D1A22B !important;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 2px;
}

p {
  font-family: "Open Sans" , sans-serif;
  font-size: .8em;
  color: #ffff;
  padding-left: .5em;
  margin-bottom: 0px;
}

ul {
  padding-left: 10px;
  margin-left: 0px;
}
`;

export const FooterHeader= styled.h1`
font-family: "Montserrat" , sans-serif;
font-size: 18px;
font-stretch: 100%;
text-transform: uppercase;
text-size-adjust: 100%;
color: #ffff;
display: block;
margin: 0;
padding: 0;
`;

export const FooterSubHeader= styled.h2`
font-family: "Montserrat" , sans-serif;
font-size: 14px;
color: #ffff;
display: block;
margin: 0;
padding: 0;
`;

  export const FooterText = styled.p`
  font-family: "Open Sans" , sans-serif;
  font-size: 14px;
  color: #ffff;
  margin: 0;
  padding-top: 8px;
  padding-bottom: 16px;
  text-align: center;
`;

export const FooterLink = styled.a`
display: block;
background-color:#1D252C;
/* line-height: 1.2em; */
font-family: "Monserrat" , sans-serif;
text-decoration: none;
font-size: 16px;
color: #ffff;
margin: 0;
padding: 0;
`;

export const StyledBrand = styled.div`
  position: relative;
  width: 20vw;
  height: 5vw;
  min-width:200px;
  min-height:50px;
  margin: 0;
  padding: 0;
`;

export const StyledList = styled(ListGroup)`
  position: relative;
  background-color: #1D252C;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;

  .list-group-item {
    background-color: #1D252C;
    padding-bottom: 0px;
    margin-top: 2px;
    color: #ffffff;
    /* font-family: "Monserrat" , sans-serif;
    font-size: 16px; */
  }

  li {
    list-style-type: none;
    padding-left: 8px;
    /* padding-top: 3px; */

  } 

  h1 {
    font-size: 40px;
  }
`;

export const SubListLink = styled.a`
  background-color: #1D252C;
  color: #ffffff;
  text-decoration: none;
`;

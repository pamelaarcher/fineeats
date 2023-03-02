import React from "react"
import {
  Wrapper, 
  StyledBrand, 
  FooterLink, 
  FooterHeader, 
  FooterSubHeader,
  FooterText, 
  StyledList, 
  SubListLink, 
  StyledRow,
  SignUpBox,
  SiteMap,
  ContactUs
} from "./Footer.styles"
import {Row, Col, ListGroup} from "react-bootstrap"
// import CopyrightImg from "../../assets/images/copyright.svg";
import {GlobalContext} from "../../lib/GlobalContextProvider";
import {SignUp} from "../SignUp/SignUp";
import { SocialIcon } from 'react-social-icons';

export function Footer() {

  const context = React.useContext(GlobalContext); 

  return (
  <Wrapper>
    <StyledRow>
      <Col sm={12} md={12} lg={5}>
        <SignUpBox>
        <StyledBrand href="#">
          <img src="./images/fineeatlogo.png" width="30%" alt="logo"/>
        </StyledBrand> 
        <SignUp />
        </SignUpBox>
      </Col>
      <Col sm={6} md={6} lg={3}>
        <SiteMap>
          <FooterHeader>Explore</FooterHeader>
          <StyledList variant="flush">
            <ListGroup.Item>
                <FooterLink id="home" href="/" >Restaurants</FooterLink>
            </ListGroup.Item>
            <ListGroup.Item>
                <FooterLink id="register" href="/register" >Sign Up</FooterLink>
            </ListGroup.Item>
            <ListGroup.Item>
              <FooterLink id="login" href="/login">Sign In</FooterLink>
            </ListGroup.Item> 
            {(context.windowWidth >= 992) ? (
              <>
                <h5></h5>
                <h5></h5>
                <h5></h5>
                <h5></h5>
                <h5></h5>
              </>
            ):null}
          </StyledList>   
        </SiteMap>
      </Col>
      <Col sm={6} md={6} lg={4}>
        <ContactUs>
        <FooterHeader>Connect</FooterHeader>
        <h2>Contact us at </h2>
        <p>info@fineeats.com</p>
        <ul>
          <li style={{ display: "inline" }}><SocialIcon url="https://linkedin.com/in/pamela-archer-671b471" bgColor="#7ADFFF" style={{ marginLeft: "0px", marginRight: "24px", marginTop: "16px", height: 30, width: 30}}/></li>
          <li style={{ display: "inline" }}><SocialIcon url="https://github.com/pamelaarcher" bgColor="#ffb600" style={{ marginTop: "16px", height: 30, width: 30}}/></li>
        </ul>
        </ContactUs>
      </Col>
    </StyledRow>
    <FooterText>www.fineeats.com</FooterText>
  </Wrapper>
  )
}
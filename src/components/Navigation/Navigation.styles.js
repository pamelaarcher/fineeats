import styled from 'styled-components';
import {Nav, Navbar, Offcanvas, OffcanvasHeader, OffcanvasBody} from "react-bootstrap";

export const HamburgerMenu = styled.button`
  position: relative;
  background: #3e7f95;
  height: 40px;
  width: 40px;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 6px;
  `;

export const HamburgerCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 5px;
  padding-right: 5px;
  transform: translate(-50%, -50%);
  background: #3e7f95;
  position: absolute;
  border: none;
  width: 100%; 
  height: 100%; 
  border-radius: 6px;

  &:before,
  &:after,
  & div {
    background: #fff;
    content: "";
    display: block;
    height: 6px;
    width: 28px;
    border-radius: 3px;
    margin: 7px 0;
    transition: 0.5s;
  }

  &:hover:before {
    transform: translateY(6px) rotate(135deg);
  }
  &:hover:after {
    transform: translateY(-7px) rotate(-135deg);
  }
  &:hover div {
    transform: scale(0);
  }
`;


export const StyledNavBar = styled(Navbar)`
  position: fixed;
  /* display: flex; */
  justify-content: right;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 64px;
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%);
  background-color: rgba(248, 247, 242, 1);

  transition: background-color 0.2s ease-in-out 0s;
  --bs-navbar-color: var(--dropdown-active-color);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-right: 1rem;

  .nav-link {
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.17;
    letter-spacing: 1px;
    text-transform: uppercase;
    position: relative;
    display: flex;
    justify-content: center;
    font-size: .9em;
    padding: 1.25em 0.5em;
  }

  .nav-link.active {
    color: var(--navigation-active-color);
    text-decoration: none;
  }

  .nav-link.inactive {
    color: var(--navigation-inactive-color);
    text-decoration: none;
  }
  .nav-link:hover {
    /* color: var(--navigation-active-color);
    text-align: left !important; */
    text-decoration: underline #ffb600;
    text-decoration-thickness: 3px;
  }

  h5 {
    position: relative;
    right: 0;
    font-size: .9em;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    padding: 1.25em 0.5em;
    margin-left: 20px; 
    margin-right: 20px;
    text-transform: uppercase;
    color: var(--bs-primary);
  }
`;

export const StyledOffCanvas=styled(Navbar.Offcanvas)`
  @media (max-width: 767px) { 
    .offcanvas-header {
      height: 64px;
      background-color: var(--bs-secondary) !important;
    }
    .offcanvas-body {
      background-color: var(--bs-accent-1) !important;
      padding: 0;
    }
 
    .nav-link {
    justify-content: left;
    margin-left: 1em;
    padding-left: 18px;
    box-shadow: 0px 10px 10px -15px #111;
  }
  /* .nav-link:hover {
    color: var(--bs-secondary) !important;
    text-decoration: underline #ffb600;
    text-decoration-thickness: 3px;
  } */
  
  .nav-link.inactive {
    color: var(--bs-secondary);
    text-align: left !important;
  }  

  p {
    padding-left: 2.5em;
    padding-right: 2.5em;
    font-size: 16px;
    line-height: 1.2em;
  }

  h5 {
        padding: 0;
        float: right;
      }
}
`;

export const StyledNavItem = styled(Nav.Item)`

  &:active {
      color: var(--navigation-active-color);
  }

  &:hover {
    color: var(--navigation-active-color);
  }
`;

export const StyledNavbarBrand = styled(Navbar.Brand)`

  position: absolute;
  /* display: flex; */
  top: 10px;
  left: 10px;
  height: 2vw;
  min-height:50px;
  margin-left: .5em;
  margin-right: 0;
  padding: 0;

  @media (max-width: 767px) { 
      left: 0;
      height: 1.5vw;
    }
    img {
      height: 35px;
    }
`;

export const CartContainer = styled.div`
  margin-left: 0px;
  margin-right: 40px;

`;

export const Cart = styled.span` 
  display: block;
  -webkit-box-flex: 1;
  flex-grow: 1;
  max-width: 100%;
  transition: opacity 0.15s ease-in-out 0s;
  opacity: 1;
  padding: 0px 12px;

inlineChildren {
  max-width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}

mainContent {
  -webkit-box-flex: 2;
    flex-grow: 2;
    min-width: 0px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
}

cartText {
  width: 100%;
  font-size: 14px;
  font-family: DD-TTNorms, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0ch;
  text-transform: none;
  text-align: center;
  margin: 0px;
  padding: 0px;
  display: block;
  font-variant-ligatures: no-common-ligatures;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
`;

export const CartButton = styled.button`
  position: relative;
  display: flex;
  /* justify-content: right; */
  background: var(--bs-primary);
  height: 35px;
  width: 60px;
  margin: 10px 10px;
  padding: 0;
  border: none;
  cursor: pointer;
  border-radius: 16px;

  
  h4 {
    position: absolute;
    top: 9px;
    left: 34px;
    font-size: .9em;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    padding: 0;
    margin: 0; 
    text-transform: uppercase;
    color: var(--bs-accent-2);
  }

  `;
  
export const CartCenter = styled.div`
position: absolute;
top: 3px;
left: 7px;
margin: 0;
padding: 0;
border: none;

img {
  margin: 0;
  padding: 0;
}
`;
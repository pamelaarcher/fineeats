import styled, {createGlobalStyle} from "styled-components";

import {Button, Modal, ModalHeader, ModalBody} from 'reactstrap'
 
 export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Montserrat, Sans-Serif; 
  }

  a {
    text-decoration: none;
    font-size: .9em;
    color: #000;
  }

  p {
    padding-left: 0;
    padding-right: 2.5em;
    font-family: "Open Sans", sans-serif;
    color: #1D252C;
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    white-space: pre-wrap;
    font-size: 18px;
    line-height: 1.67em;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px
  }
  @media (max-width: 768px) {
    p {
      padding-left: 2.5em;
    }
  }
`;

export const formatDate = (date) => new Date(date).toLocaleDateString();

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0px;
`;

export const TwoColWrapper = styled.div`
  display: block;

  /* @media (min-width: 992px) {
    display: flex;
  } */
`;

export const PageContent = styled.article`
  margin: 20px 0 0 0;

  .dot-divider {
    width: 100%;
    height: 5px;
    margin-bottom: 20px;
    border-bottom: 1px solid lightgrey;
  }
`;

export const StyledH2 = styled.h2`
  font-weight: 500;
  font-size: 1.8rem;
  :hover {
    color: #ee2562;
  }
`;

export const DividerContent=styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30px;
  margin-bottom: 1em;
  
`;

export const StyledButton1 = styled(Button)`
  position: relative;
  background: linear-gradient(0deg, rgba(79,110,118,1) 0%, rgba(96,145,158,1) 100%);
  border: none;
  width: 100px;
  height: 35px;
  color: #fff;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 15px;
  padding-left: 0px;
  padding-right: 0px;
  margin-bottom: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
  float: right;

&:hover {
  /* background: rgb(0,3,255); */
  background: linear-gradient(0deg, rgba(192,145,26,1) 0%, rgba(255,182,0,1) 100%);
}
`;

export const CancelButton=styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
  background: linear-gradient(0deg, rgba(79,110,118,1) 0%, rgba(96,145,158,1) 100%);
  width: 50px;
  height: 35px;
  color: #fff;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 24px;
  padding: 0px;
  cursor: pointer;
  transition: all 0.3s ease;

  
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  border-color: rgba(108,117,125,.1);

&:hover {
  background: linear-gradient(0deg, rgba(192,145,26,1) 0%, rgba(255,182,0,1) 100%);
}
`;


export const StyledModal=styled(Modal)`
//  background: var(--bs-gray-200);
  margin-top: 50px;
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  vertical-align: middle;
  border-radius: 12px;
  --bs-modal-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15)

  .modal-dialog { 
    display: inline-block;  
    text-align: left;   
    vertical-align: middle;
}
`;

export const StyledModalBody=styled(ModalBody)`
  font-size: 1em;
  font-family: "Monserrat", sans-serif;

//  background: var(--bs-gray-200);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding-left: 20px;
`;

export const StyledModalHeader=styled(ModalHeader)`
//  background: var(--bs-gray-200);
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 0;
  border-bottom-color: var(--bs-accent-2);

  h5 {
    color: var(--bs-primary);
    font-size: 1em;
    margin: 0;
    padding: 0;
  }
`;
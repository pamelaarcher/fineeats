/* /pages/login.js */

import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import {StyledContainer, StyledLabel, StyledInput} from "../components/Register/Register.styles"
import {StyledButton1, StyledModal, StyledModalBody, StyledModalHeader, CancelButton} from "../lib/GlobalStyles"
import { login } from "../components/auth";
import {loginFirebaseGoogle} from "../components/authFirebase"
import { registerUser } from "../components/auth";
import AppContext from "../components/context";

function Login(props) {
  const [data, updateData] = useState({ identifier: "", password: "" });
  const [loademail, setLoadEmail] = useState(false);
  const [loadgoogle, setLoadGoogle] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const [modaltitle, setModaltitle] = React.useState('');
  const [modaltext, setModaltext] = React.useState('');
  const [curModal, setModal] = React.useState(false);

  let {isAuthenticated, setUser, firebaseConfig} = useContext(AppContext);

  
  
  const errorClose = () => setModal(!curModal);


  useEffect(() => {
    if (isAuthenticated) {
      router.push("/"); // redirect if you're already logged in
    }
  }, []);

  function onChange(event) {
    updateData({ ...data, [event.target.name]: event.target.value });
  }

  function ErrorModal(props) {
    
    return(
      <StyledModal style={{marginTop: "220px"}}
      isOpen={curModal} 
      toggle={errorClose}
    >
      <StyledModalHeader>
        {props.errortitle}
        <CancelButton onClick={errorClose}>X</CancelButton>
      </StyledModalHeader>
      <StyledModalBody>{props.errortext}</StyledModalBody>
    </StyledModal>
)}

function validate(field, label){
  let errorText = "";
  setModaltitle('Invalid Input Value');

  if (!field || field.length<1) {   
    errorText = "Enter a correct value in the " + label + " field "
    setModaltext(errorText);
    setModal(true);
    return false;
  }
  else {
    if (label === 'password' && field.length < 8) {
        errorText = "Your password must be at least 8 characters. ";
        setModaltext(errorText);
        setModal(true);
        return false;
      }       
    }

  return true;
}

  function HandleCreate(){
    if (!validate(data.identifier, 'email')) return;
    if (!validate(data.password, 'password')) return;

    setLoadEmail(true);
    login(data.identifier, data.password)
      .then((res) => {
        setLoadEmail(false);
        setUser(res.data.user, true);
      })
      .catch((error) => {
   //     setError(error.response.data);
        console.log(`error in login: ${error}`)    
        setModaltitle('Login Failed');
        setModaltext('Your login failed.  Enter a different user name or password combination');
        setModal(true);
        setLoadEmail(false);
      });
  }

  function LoginGoogle(){
    // if (!validate(data.identifier, 'email')) return;
    // if (!validate(data.password, 'password')) return;

    const newuser={email: "", username: "", id: ""}  

    setLoadGoogle(true);
    loginFirebaseGoogle(firebaseConfig)
    .then((res) => {
        newuser.email = res.user.email
        newuser.username = res.user.displayName
        // newuser.id = res.user.uid
        // setUser(newuser, true);

        // Login to Strapi with google email and dummy password
        login(newuser.email, "Google123")
        .then((res) => {
          setUser(res.data.user, true);
        })
        .catch((error) => {
          registerUser(newuser.username, newuser.email, "Google123")
          .then((res) => {
            setUser(res.data.user, true);
          })
          .catch((error) => {
            console.log(`Ignore This Error: ${error}`)
            router.push("/")
          })
          setLoadGoogle(false);
        })
      })
      .catch((error) => {
        setLoadGoogle(false);
      });
  }
  
  return (
    <>
    <StyledContainer>
      <Row>
        <Col sm="12">
          <div className="paper">
            <div className="header">
              <img src="http://164.92.99.205:1337/uploads/48f9b5304bed46bf9210e82021dc68a1.png" />
              <h2>FINE EATS LOGIN</h2>
            </div>
            <section className="wrapper">
              {Object.entries(error).length !== 0 &&
                error.constructor === Object &&
                error.message.map((error) => {
                  return (
                    <div
                      key={error.messages[0].id}
                      style={{ marginBottom: 10 }}
                    >
                      <small style={{ color: "red" }}>
                        {error.messages[0].message}
                      </small>
                    </div>
                  );
                })}
              <Form>
                <fieldset>
                  <h4>Login with Email</h4>
                  <FormGroup>
                    <StyledLabel>Email:</StyledLabel>
                    <StyledInput
                      onChange={(event) => onChange(event)}
                      name="identifier"
                    />
                  </FormGroup>
                  <FormGroup style={{ marginTop: 5, marginBottom: 10 }}>
                    <StyledLabel>Password:</StyledLabel>
                    <StyledInput
                      onChange={(event) => onChange(event)}
                      type="password"
                      name="password"
                    />
                  </FormGroup>

                  <div style={{display: "block"}}>
                    {/* <span>
                      <a href="">
                        <small>Forgot Password?</small>
                      </a>
                    </span> */}
                    <StyledButton1
                      style={{float: "left", width: 95 }}
                      onClick={HandleCreate}
                      disabled={data.identifier.length<1 || data.password.length<1 || loademail}
                    >
                      {loademail ? "Loading... " : "Email Login"}
                    </StyledButton1>
                  </div>
                  </fieldset>
                  <div style={{display: "block"}}>
                    <hr style={{marginTop: 20, height: 3, background: "#ffb600"}}/>
                    <h4 style={{paddingTop: 5 ,paddingBottom: 10}}>Login with Google</h4>
                    <StyledButton1
                      style={{display: "block", float: "left", width: 95}}
                      onClick={LoginGoogle}
                      disabled={loadgoogle}
                    >
                      {loadgoogle ? "Loading... " : "Google Login"}
                    </StyledButton1>
                    <h4 style={{clear: "left"}}></h4>
                </div>
              </Form>
            </section>
          </div>
        </Col>
      </Row>
    </StyledContainer>
    <ErrorModal errortitle={modaltitle} errortext={modaltext}/>
  </>
  );
}

export default Login;

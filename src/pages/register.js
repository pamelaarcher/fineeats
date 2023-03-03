/* /pages/register.js */

import { useState, useContext } from "react";
import { useRouter } from "next/router";
import {StyledContainer, StyledLabel, StyledInput} from "../components/Register/Register.styles"
import {StyledButton1, StyledModal, StyledModalBody, StyledModalHeader, CancelButton} from "../lib/GlobalStyles"
import {loginFirebaseGoogle, registerFirebase} from "../components/authFirebase"

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { registerUser } from "../components/auth";
import AppContext from "../components/context";

const Register = () => {
  const [data, setData] = useState({ email: "", username: "", password: "" });
  // const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState({});
  const [modaltitle, setModaltitle] = useState('');
  const [modaltext, setModaltext] = useState('');
  const [curModal, setModal] = useState(false);
  const [loademail, setLoadEmail] = useState(false);
  const [loadgoogle, setLoadGoogle] = useState(false);
  const [successFlag, setSuccess] = useState(false)
  const modalClose = () => setModal(!curModal);

  let {isAuthenticated, setUser, firebaseConfig} = useContext(AppContext);

  function closeSuccess() {
    router.push("/")
  }

  function SetModal(props) {
    
    return(
      <StyledModal style={{width: 350, marginTop: "220px"}}
      isOpen={curModal} 
      toggle={modalClose}
      backdrop="static"
      keyboard={false}
    >
      <StyledModalHeader>
        {props.modaltitle}
        {successFlag ? 
        (<StyledButton1 style={{position: "absolute", top: "5px", right: "5px"}} onClick={closeSuccess}>Restaurants</StyledButton1>)
        :(<CancelButton onClick={modalClose}>X</CancelButton>)
        }
      </StyledModalHeader>
      <StyledModalBody>{props.modaltext}</StyledModalBody>
    </StyledModal>
  )}

  function validate(field, label){
    let modalText = "";
    setModaltitle('Invalid Input Value');

    if (!field || field.length<1) {   
      modalText = "Enter a correct value in the " + label + " field "
      setModaltext(modalText);
      setModal(true);
      return false;
    }
    else {
      if (label === 'password' && field.length < 8) {
          modalText = "Your password must be at least 8 characters. ";
          setModaltext(modalText);
          setModal(true);
          return false;
        }       
      }

    return true;
  }

  function HandleRegister(){
    if (!validate(data.username, 'username')) return;
    if (!validate(data.email, 'email')) return;
    if (!validate(data.password, 'password')) return;

    setLoading(true);
    registerUser(data.username, data.email, data.password)
      .then((res) => {
        // set authed user in global context object
      setLoading(false);
      setUser(res.data.user, true);
      return false;
      })
      .catch((error) => {
        console.log(`error in register: ${error}`)
        //setError(error.response.data);
        setModaltitle('Registration Failed');
        setModaltext('The account already exists or connection failed');
        setModal(true);
        setLoading(false);
      });
  }

  function RegisterGoogle(){
    setLoadGoogle(true);
    const newuser={email: "", username: "", id: ""};
    
    loginFirebaseGoogle(firebaseConfig)
    .then((res) => {
        setLoadGoogle(false);
        newuser.email = res.user.email
        newuser.username = res.user.displayName
        registerUser(newuser.username, newuser.email, "Google123")
        .then((res) => {
          // set authed user in global context object
          setSuccess(true);
          setUser(res.data.user, true);
          setModaltitle('Successful Registration');
          setModaltext('You have successfully registered.  Enjoy your dish orders');
          setModal(true);
          setLoadGoogle(false);
        })
        .catch((error) => {
          console.log(`error in register: ${error}`)
          //setError(error.response.data);
          setModaltitle('Registration Failed');
          setModaltext('The account already exists or connection failed');
          setModal(true);
          setLoadGoogle(false);
        });

      })
      .catch((error) => {
        console.log(error)
        setLoadGoogle(false);
      });
    }

  function HandleFirebase(){
    if (!validate(data.username, 'username')) return;
    if (!validate(data.email, 'email')) return;
    if (!validate(data.password, 'password')) return;

    setLoadEmail(true);
    registerFirebase(data.email, data.password, firebaseConfig)
      .then((res) => {
        if (res.code === "auth/email-already-in-use") {
          setModaltitle('Registration Failed');
          setModaltext('Your entered email has already been used');
          setModal(true);
          setLoadEmail(false);
        }
        else {
        registerUser(data.username, data.email, data.password)
          .then((res) => {
            // set authed user in global context object
            setSuccess(true);
            setUser(res.data.user, true);
            setModaltitle('Successful Registration');
            setModaltext('You have successfully registered.  Enjoy your dish orders');
            setModal(true);
            setLoadEmail(false);
          })
          .catch((error) => {
            console.log(`error in register: ${error}`)
            //setError(error.response.data);
            setModaltitle('Registration Failed');
            setModaltext('The account already exists or connection failed');
            setModal(true);
            setLoadEmail(false);
          });
        }
      })
    }

  return (
    <>
    <StyledContainer>
      <Row>
        <Col sm="12">
          <div className="paper">
            <div className="header">
              <img src="http://164.92.99.205:1337/uploads/f79de00961114a89857437f9d3a00af9.png" />
              <h2>FINE EATS Sign Up</h2>
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
                  <h4>Signup with Email</h4>
                  <h6>DO NOT USE YOUR GOOGLE EMAIL TO REGISTER BY EMAIL</h6>
                  <FormGroup>
                    <StyledLabel>Username:</StyledLabel>
                    <StyledInput
                      onChange={(e) =>
                        setData({ ...data, username: e.target.value })
                      }
                      value={data.username}
                      type="text"
                      name="username"
                    />
                  </FormGroup>
                  <FormGroup>
                    <StyledLabel>Email:</StyledLabel>
                    <StyledInput
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                      value={data.email}
                      type="email"
                      name="email"
                    />
                  </FormGroup>
                  <FormGroup style={{ marginTop: 5, marginBottom: 10 }}>
                    <StyledLabel>Password:</StyledLabel>
                    <StyledInput
                      onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                      }
                      value={data.password}
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
                      onClick={HandleFirebase}
                      disabled={data.username.length<1 || data.password.length<1 || data.password.length<1 || loademail}
                    >
                      {loademail ? "Loading... " : "With Email"}
                    </StyledButton1>
                  </div>
                  </fieldset>
                  <div style={{display: "block"}}>
                    <hr style={{marginTop: 20, height: 3, background: "#ffb600"}}/>
                    <h4 style={{paddingTop: 5 ,paddingBottom: 10}}>Signup with Google</h4>
                    <StyledButton1
                      style={{display: "block", float: "left", width: 95}}
                      onClick={RegisterGoogle}
                      disabled={loadgoogle}
                    >
                      {loadgoogle ? "Loading... " : "With Google"}
                    </StyledButton1>
                    <h4 style={{clear: "left"}}></h4>
                  </div>
              </Form>
            </section>
          </div>
        </Col>
      </Row>

    </StyledContainer>
    <SetModal modaltitle={modaltitle} modaltext={modaltext}/>
  </>
  );
};
export default Register;

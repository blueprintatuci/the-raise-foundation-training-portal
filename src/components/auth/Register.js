import React, { useState } from "react";
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Form, Button, Col } from "react-bootstrap";
import userPool from "./poolData";
import { Link, Redirect } from "react-router-dom";
import { CognitoUser, CognitoUserAttribute } from "amazon-cognito-identity-js";
import MainLogo from "../../assets/raise_logo_background.png";
import Stepper from "../standard/Stepper"

const Styles = styled.div`

    .form-control {
        border: none;
        border-radius: 12px;
        background: #f1f1f1;
        height: 45px;
        
    }

    .form-wrapper {
        font-family: 'Raleway', sans-serif;
        background: white;
        min-width: 350px;
        padding: 2rem;
        margin-top: 3rem;
        border-radius: 15px;
        width: 450px;
        
    }

    .logo:hover {
        cursor: pointer;
    }

    .form-title{
        text-align: center;
        font-weight: 900;
        font-size: 2rem;
        padding: 15px
    }

    .stepper{
        height: 50px;
        maxWidth: 400;
        flexGrow: 1;
        color: blue
    }


    .next-button {
        background: rgb(1,131,225);
        background: linear-gradient(90deg, rgba(1,131,225,1) 0%, rgba(90,184,253,1) 100%);
        border-radius: 12px;
        border: none;
        height: 50px;
        font-size: 1.3rem;
    }

    .back-button{
        color: black;
        background: #e3e3e3;
        border-radius: 12px;
        border: none;
        height: 50px;
        font-size: 1.3rem;
    }
    .authenticate {
        margin-top: 1rem;
    }

    .resend-button {
        padding-top: 5px;
        color: grey;
        text-align: center;
    }

    .resend-button:hover {
        color: #222222;
    }

    .reauth-message {
        text-align: center;
    }

    .reauth-buttons {
        display: flex;
        justify-content: center;
    }

    .reauth-button {
        margin: 5px;
        border-radius: 0;
    }
`;

  
const Register = () => {

    const steps = 3;
    const [currentStep, setCurrentStep] = useState(1);


    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");


    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");

    const [degreeLevel, setDegreeLevel] = useState("");
    const [degreeFocus, setDegreeFocus] = useState("");
    const [occupation, setOccupation] = useState("");
    const [licenseType, setLicenseType] = useState("");
    const [license, setLicense] = useState("");






    const [reAuth, setReAuth] = useState(false);
    const [registered, setRegistered] = useState(false);
    const [verified, setVerified] = useState(false);
    const [verificationCode, setVerificationCode] = useState("");

    const nextStep = () =>{
        let next_step = currentStep + 1
        setCurrentStep(next_step)
    }

    const previousStep = () => {
        let prev_step = currentStep - 1
        setCurrentStep(prev_step)
    }


    let attributeList = [];
    const userData = {
        Username: username,
        Pool: userPool,
    };

    let dataEmail = {
        Name: "email",
        Value: email,
    };


    let attributeEmail = new CognitoUserAttribute(dataEmail);

    attributeList.push(attributeEmail);
    const cognitoUser = new CognitoUser(userData);

    const onResend = (event) => {
        event.preventDefault();
        cognitoUser.resendConfirmationCode(function (err, result) {
            if (err) {
                alert(err.message || JSON.stringify(err));
                return;
            }
            console.log("call result: " + result);
        });
    };

    const onVerify = (event) => {
        event.preventDefault();

        cognitoUser.confirmRegistration(verificationCode, true, function (
            err,
            result
        ) {
            if (err) {
                // alert(err.message || JSON.stringify(err));
                console.error(err);
                return;
            }

            console.log("call result: " + result);
            setVerified(true);
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        userPool.signUp(username, password, attributeList, null, (err, data) => {
            if (err) {
                console.error(err);
                if (err.name === "UsernameExistsException") {
                    setReAuth(true);
                }
            } else {
                console.log("success");
                setRegistered(true);
            }
        });
    };

    if (verified) {
        return <Redirect to="/login"></Redirect>;
    }

    if (reAuth) {
        return (
            <Styles>
                <Container style={{ justifyContent: "center", display: "flex" }}>
                    <div className="form-wrapper">
                        <div className="reauth-message">
                            This email already exists. Please login or verify your account.
                        </div>
                        <div className="reauth-buttons">
                            <Link to="/login">
                                <Button className="reauth-button" variant="dark">
                                    Login
                                </Button>
                            </Link>
                            <Link to="/authenticate">
                                <Button className="reauth-button" variant="dark">
                                    Verify
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </Styles>
        );
    }

    if (registered) {
        return (
            <Styles>
                <Container style={{ justifyContent: "center", display: "flex" }}>
                    <div className="form-wrapper">
                        <Form onSubmit={onVerify}>
                            <Form.Group>
                                <Form.Control
                                    value={verificationCode}
                                    onChange={(event) => setVerificationCode(event.target.value)}
                                    placeholder="Verification Code"
                                />
                            </Form.Group>

                            <Button
                                className="signup-button"
                                variant="dark"
                                type="submit"
                                block
                            >
                                Verify
                            </Button>

                            <div
                                onClick={onResend}
                                className="resend-button"
                                variant="dark"
                                type="submit"
                            >
                                Resend Code
                            </div>
                        </Form>
                    </div>
                </Container>
            </Styles>
        );
    }

    return (
        <Styles>
            <div>
                <Container style={{ justifyContent: "center", display: "flex" }}>
                    <div className="form-wrapper">
                        {
                            currentStep === 1 && 
                            <Form>
                                <span className="logo"><img src={MainLogo} height="80px" ></img></span>

                                <div className="form-title">Sign Up</div>
                                <Form.Group>
                                    <Form.Row>
                                        <Col>
                                        <Form.Control
                                            value={firstName}
                                            onChange={(event) => setFirstName(event.target.value)}
                                            placeholder="First Name"
                                        />
                                        </Col>
                                        <Col>
                                        <Form.Control
                                            value={lastName}
                                            onChange={(event) => setLastName(event.target.value)}
                                            placeholder="Last Name"
                                        />
                                        </Col>
                                        <Form.Text className="text-muted"></Form.Text>
                                    </Form.Row>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control
                                        value={phone}
                                        onChange={(event) => setPhone(event.target.value)}
                                        placeholder="Phone"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        placeholder="Email"
                                    />
                                    <Form.Text className="text-muted"></Form.Text>
                                </Form.Group>

                                
                                <Form.Group>
                                    <Form.Control
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Group>

                                <Stepper steps={steps} activeStep={currentStep}/>
                                <Form.Row>
                                    <Col>
                                        <Button
                                            className="back-button"
                                            block
                                        >
                                            Back
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button
                                            className="next-button"
                                            onClick={nextStep}
                                            block
                                        >
                                            Next
                                        </Button>
                                    </Col>
                                </Form.Row>
                            </Form>
                        }

                        {
                            currentStep === 2 &&
                            <Form>
                                <span className="logo"><img src={MainLogo} height="80px" ></img></span>

                                <div className="form-title">Sign Up</div>
                                <Form.Group>
                                    <Form.Control
                                        value={city}
                                        onChange={(event) => setCity(event.target.value)}
                                        placeholder="City"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control
                                        value={state}
                                        onChange={(event) => setState(event.target.value)}
                                        placeholder="State"
                                    />
                                    <Form.Text className="text-muted"></Form.Text>
                                </Form.Group>

                                
                                <Form.Group>
                                    <Form.Control
                                        value={country}
                                        onChange={(event) => setCountry(event.target.value)}
                                        placeholder="Country"
                                    />
                                    <Form.Text className="text-muted"></Form.Text>
                                </Form.Group>
                                <Stepper steps={steps} activeStep={currentStep}/>
                                <Form.Row>
                                    <Col>
                                        <Button
                                            className="back-button"
                                            onClick={previousStep}
                                            block
                                        >
                                            Back
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button
                                            className="next-button"
                                            onClick={nextStep}
                                            block
                                        >
                                            Next
                                        </Button>
                                    </Col>
                                </Form.Row>
                            </Form>
                        }

{
                            currentStep === 3 &&
                            <Form>

                                <span className="logo"><img src={MainLogo} height="80px" ></img></span>

                                <div className="form-title">Sign Up</div>
                                <Form.Group>
                                    <Form.Control
                                        value={degreeLevel}
                                        onChange={(event) => setDegreeLevel(event.target.value)}
                                        placeholder="Level of Degree Attained"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control
                                        value={degreeFocus}
                                        onChange={(event) => setDegreeFocus(event.target.value)}
                                        placeholder="Degree Area of Focus"
                                    />
                                    <Form.Text className="text-muted"></Form.Text>
                                </Form.Group>

                                
                                <Form.Group>
                                    <Form.Control
                                        value={occupation}
                                        onChange={(event) => setOccupation(event.target.value)}
                                        placeholder="Occupation"
                                    />
                                    <Form.Text className="text-muted"></Form.Text>
                                </Form.Group>


                                <Form.Group>
                                    <Form.Row>
                                        <Col>
                                        <Form.Control
                                            value={licenseType}
                                            onChange={(event) => setLicenseType(event.target.value)}
                                            placeholder="License Type"
                                        />
                                        </Col>
                                        <Col>
                                        <Form.Control
                                            value={license}
                                            onChange={(event) => setLicense(event.target.value)}
                                            placeholder="License #"
                                        />
                                        </Col>
                                        <Form.Text className="text-muted"></Form.Text>
                                    </Form.Row>
                                </Form.Group>
                                <Stepper steps={steps} activeStep={currentStep}/>
                                <Form.Row>
                                    <Col>
                                        <Button
                                            className="back-button"
                                            onClick={previousStep}
                                            block
                                        >
                                            Back
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button
                                            className="next-button"
                                            onClick={nextStep}
                                            block
                                        >
                                            Next
                                        </Button>
                                    </Col>
                                </Form.Row>
                            </Form>
                        }
                    </div>
                </Container>
            </div>
        </Styles>
    );
};

export default Register;
import React, { useState } from "react";
import styled from "styled-components";
import { Container, Form, Button, Col } from "react-bootstrap";
import MainLogo from "../../assets/raise_logo_background.png";
import Pinwheel from "../../assets/pinwheel.png";
import Stepper from "../standard/Stepper"

const Styles = styled.div`

    .form-control {
        border: none;
        border-radius: 12px;
        background: #f1f1f1;
        height: 45px;
        
    }

    .form-container{
        justify-content: center; 
        display: flex 
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

    .form-success-wrapper{
        font-family: 'Raleway', sans-serif;
        background: white;
        min-width: 350px;
        padding: 2rem;
        padding-bottom: 0;
        margin-top: 3rem;
        border-radius: 15px;
        width: 450px;
    }

    .form-select{
        padding: 10
    }

    .logo{
        height: 80px
    }

    .logo:hover {
        cursor: pointer;
    }

    .pinwheel-wrapper{  
        display: flex;
        justify-content: center;
    }
    .pinwheel{
        height: 200px
    }

    .form-title{
        text-align: center;
        font-weight: 900;
        font-size: 2rem;
        padding: 15px
    }

    .form-success-title{
        text-align: center;
        font-weight: 900;
        font-size: 2rem;
        padding-top: 80px; 
        padding-bottom: 10px
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
        font-weight: 600;
    }

    .back-button{
        color: black;
        background: #e3e3e3;
        border-radius: 12px;
        border: none;
        height: 50px;
        font-size: 1.3rem;
        font-weight: 600;
    }
`;

  
const Register = () => {

    const steps = 3;
    const [currentStep, setCurrentStep] = useState(1);


    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");


    const [city, setCity] = useState("");
    const [state, setState] = useState("");

    const [degreeLevel, setDegreeLevel] = useState("");
    const [degreeFocus, setDegreeFocus] = useState("");
    const [occupation, setOccupation] = useState("");
    const [licenseType, setLicenseType] = useState("");
    const [license, setLicense] = useState("");


    const [submitted, setSubmitted] = useState(false);



    const nextStep = () =>{
        let next_step = currentStep + 1
        setCurrentStep(next_step)
    }

    const previousStep = () => {
        let prev_step = currentStep - 1
        setCurrentStep(prev_step)
    }

    const handleSubmit = () => {
        setSubmitted(true)
    }

    if (submitted){
        return (
            <Styles>
                <Container className="form-container">
                    <div className="form-success-wrapper">
                        <Form>
                            <img className="logo" alt="The Raise Foundation Logo" src={MainLogo}></img>
                            <div className="form-success-title">You're Set!</div>
                            <Form.Row>
                                <Button 
                                    className="next-button" 
                                    block>
                                        Go To Dashboard
                                </Button>
                            </Form.Row>
                            <div className="pinwheel-wrapper"><img className="pinwheel" alt="Pinwheel" src={Pinwheel}></img></div>
                        </Form>
                    </div>
                </Container>
            </Styles>
        )
    }
    return (
        <Styles>
            <div>
                <Container className="form-container">
                    <div className="form-wrapper">
                        {
                            currentStep === 1 && 
                            <Form>
                                <img className="logo" alt="The Raise Foundation Logo" src={MainLogo}></img>

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
                                <img className="logo" alt="The Raise Foundation Logo" src={MainLogo}></img>

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
                                        className="form-select"
                                        value={state}
                                        as="select"
                                        onChange={(event) => setState(event.target.value)}
                                    >
                                        <option value="">State</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AL">Alabama</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DC">District of Columbia</option>
                                        <option value="DE">Delaware</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="IA">Iowa</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MD">Maryland</option>
                                        <option value="ME">Maine</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MT">Montana</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NY">New York</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="PR">Puerto Rico</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VA">Virginia</option>
                                        <option value="VT">Vermont</option>
                                        <option value="WA">Washington</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WY">Wyoming</option>    
                                    </Form.Control>
                                    
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
                                <img className="logo" alt="The Raise Foundation Logo" src={MainLogo}></img>
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
                                            onClick={handleSubmit}
                                            block
                                        >
                                            Submit
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
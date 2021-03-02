import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import GradientButton from "../standard/GradientButton";
import { useHistory } from "react-router-dom";

const Styles = styled.div`
    .demographic-container {
        font-family: "Raleway", sans-serif;
        background: #f1f1f1;
        margin: 30px;
        margin-top: 0;
        border-radius: 15px;
        padding: 3rem;
        padding-bottom: 2rem;
    }
    .initials-avatar {
        margin: 1rem;
        width: 80px;
        height: 80px;
        background: white;
        font-size: 2.5rem;
        color: rgb(1, 131, 225);
        color: linear-gradient(
            90deg,
            rgba(1, 131, 225, 1) 0%,
            rgba(90, 184, 253, 1) 100%
        );
    }
    .demographic-info {
        padding-left: 1rem;
    }
    .fullname {
        height: 30px;
        font-weight: 800;
        font-size: 1.5rem;
    }
    .joined {
        font-size: 0.9rem;
        margin-bottom: 1rem;
        font-style: italic;
    }

    .email {
        font-size: 0.8rem;
    }

    .demographic-field {
        font-weight: 600;
    }

    .field-row {
        display: flex;
        align-items: center;
    }

    .button-container {
        display: flex;
        justify-content: center;
        padding-bottom: 1rem;
    }
`;

const EditDemographics = ({
    accountInfo,
    updateAccountInfo,
    updateEditSuccess,
    openToaster,
    toggleEdit,
}) => {
    const history = useHistory();
    const [accountInformation, setAccountInfo] = useState(accountInfo);

    const saveChanges = () => {
        // Note: add update endpoint here
        // history.push("/account");
        updateAccountInfo(accountInformation); // test function
        toggleEdit();
        openToaster();
        updateEditSuccess(true);
    };

    return (
        <Styles>
            <div className="demographic-container">
                <Row className="field-row">
                    <Col className="demographic-field">City</Col>
                    <Col>
                        <Form.Group>
                            <Form.Control
                                value={accountInformation.city}
                                onChange={(event) =>
                                    setAccountInfo({
                                        ...accountInformation,
                                        city: event.target.value,
                                    })
                                }
                            />
                            <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="field-row">
                    <Col className="demographic-field">State</Col>
                    <Col>
                        <Form.Group>
                            <Form.Control
                                className="form-select"
                                value={accountInformation.state}
                                as="select"
                                onChange={(event) =>
                                    setAccountInfo({
                                        ...accountInformation,
                                        state: event.target.value,
                                    })
                                }
                            >
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
                    </Col>
                </Row>

                <Row className="field-row">
                    <Col className="demographic-field">
                        Level of Degree Attained
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Control
                                className="form-select"
                                value={accountInformation.degree_level}
                                as="select"
                                onChange={(event) =>
                                    setAccountInfo({
                                        ...accountInformation,
                                        degree_level: event.target.value,
                                    })
                                }
                            >
                                <option value="">
                                    Level of Degree Attained
                                </option>
                                <option value="associate">
                                    Associate Degree (A.A. or A.S.)
                                </option>
                                <option value="bachelor">
                                    Bachelor's Degree (B.A. or B.S.)
                                </option>
                                <option value="master">
                                    Master's Degree (M.A. or M.S.)
                                </option>
                                <option value="md">MD</option>
                                <option value="jd">JD</option>
                                <option value="phd">Ph.D.</option>
                                <option value="other">Other</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="field-row">
                    <Col className="demographic-field">
                        Degree Area of Focus
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Control
                                className="form-select"
                                value={accountInformation.degree_focus}
                                as="select"
                                onChange={(event) =>
                                    setAccountInfo({
                                        ...accountInformation,
                                        degree_focus: event.target.value,
                                    })
                                }
                            >
                                <option value="">Degree Area of Focus</option>
                                <option value="medical_doctor">
                                    Medical Doctor
                                </option>
                                <option value="medical_nursing">
                                    Medical Nursing
                                </option>
                                <option value="psychology">Psychology</option>
                                <option value="counseling">Counseling</option>
                                <option value="social_work">Social Work</option>
                                <option value="education">Education</option>
                                <option value="other">Other</option>
                            </Form.Control>
                        </Form.Group>

                        {accountInfo.degree_focus === "other" && (
                            <Form.Group className="other-specification">
                                <Form.Control
                                    onChange={(event) =>
                                        setAccountInfo({
                                            ...accountInformation,
                                            degree_focus: event.target.value,
                                        })
                                    }
                                    placeholder="Please specify"
                                />
                                <Form.Text className="text-muted"></Form.Text>
                            </Form.Group>
                        )}
                    </Col>
                </Row>
                <Row className="field-row">
                    <Col className="demographic-field">Occupation</Col>
                    <Col>
                        <Form.Group>
                            <Form.Control
                                value={accountInformation.occupation}
                                onChange={(event) =>
                                    setAccountInfo({
                                        ...accountInformation,
                                        occupation: event.target.value,
                                    })
                                }
                                placeholder="Occupation"
                            />
                            <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="field-row">
                    <Col className="demographic-field">
                        License Type (optional)
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Row>
                                <Col>
                                    <Form.Control
                                        value={accountInformation.license_type}
                                        onChange={(event) =>
                                            setAccountInfo({
                                                ...accountInformation,
                                                license_type:
                                                    event.target.value,
                                            })
                                        }
                                        placeholder="License Type (optional)"
                                    />
                                </Col>
                                {accountInformation.license_type && (
                                    <Col>
                                        <Form.Control
                                            value={accountInformation.license}
                                            onChange={(event) =>
                                                setAccountInfo({
                                                    ...accountInformation,
                                                    license: event.target.value,
                                                })
                                            }
                                            placeholder="License #"
                                        />
                                    </Col>
                                )}
                                <Form.Text className="text-muted"></Form.Text>
                            </Form.Row>
                        </Form.Group>
                    </Col>
                </Row>
            </div>
            <div className="button-container">
                <GradientButton
                    width="390px"
                    onClick={saveChanges}
                    text="Save Changes"
                />
            </div>
        </Styles>
    );
};

export default EditDemographics;

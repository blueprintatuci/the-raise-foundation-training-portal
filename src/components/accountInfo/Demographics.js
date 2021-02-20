import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const Styles = styled.div`
    .demographic-container {
        font-family: "Raleway", sans-serif;
        background: #f1f1f1;
        margin: 30px;
        margin-top: 0;
        border-radius: 15px;
        padding: 3rem;
        // display: flex;
        // align-items: center;
        // justify-content: center;
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

    .row {
        padding-bottom: 15px;
    }
`;

const Demographics = () => {
    const [city, setCity] = useState("");
    const [state, setState] = useState("");

    const [degreeLevel, setDegreeLevel] = useState("");
    const [degreeFocus, setDegreeFocus] = useState("");
    const [occupation, setOccupation] = useState("");
    const [licenseType, setLicenseType] = useState("");
    const [license, setLicense] = useState("");
    return (
        <Styles>
            <div className="demographic-container">
                <Row>
                    <Col className="demographic-field">City</Col>
                    <Col>Irvine</Col>
                </Row>
                <Row>
                    <Col className="demographic-field">State</Col>
                    <Col>California</Col>
                </Row>

                <Row>
                    <Col className="demographic-field">
                        Level of Degree Attained
                    </Col>
                    <Col>Bachelor's</Col>
                </Row>
                <Row>
                    <Col className="demographic-field">
                        Degree Area of Focus
                    </Col>
                    <Col>Computer Science</Col>
                </Row>
                <Row>
                    <Col className="demographic-field">Occupation</Col>
                    <Col>Software Engineer</Col>
                </Row>
                <Row>
                    <Col className="demographic-field">License</Col>
                    <Col></Col>
                </Row>
            </div>
        </Styles>
    );
};

export default Demographics;

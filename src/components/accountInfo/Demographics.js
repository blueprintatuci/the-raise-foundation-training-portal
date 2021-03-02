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

const Demographics = ({ accountInfo }) => {
    return (
        <Styles>
            <div className="demographic-container">
                <Row>
                    <Col className="demographic-field">City</Col>
                    <Col>{accountInfo.city}</Col>
                </Row>
                <Row>
                    <Col className="demographic-field">State</Col>
                    <Col>{accountInfo.state}</Col>
                </Row>

                <Row>
                    <Col className="demographic-field">
                        Level of Degree Attained
                    </Col>
                    <Col>{accountInfo.degree_level}</Col>
                </Row>
                <Row>
                    <Col className="demographic-field">
                        Degree Area of Focus
                    </Col>
                    <Col>{accountInfo.degree_focus}</Col>
                </Row>
                <Row>
                    <Col className="demographic-field">Occupation</Col>
                    <Col>{accountInfo.occupation}</Col>
                </Row>
                <Row>
                    <Col className="demographic-field">
                        {accountInfo.license}
                    </Col>
                    <Col></Col>
                </Row>
            </div>
        </Styles>
    );
};

export default Demographics;

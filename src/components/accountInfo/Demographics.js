import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import User from "../../api/User";
import { formatMs } from "@material-ui/core";

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
    const getDegreeLevel = (degree) => {
        let degreeLevels = {
            associate: "Associate Degree (A.A. or A.S.)",
            bachelor: "Bachelor's Degree (B.A. or B.S.)",
            master: "Master's Degree (M.A. or M.S.)",
            md: "MD",
            jd: "JD",
            phd: "Ph.D.",
        };
        if (!(degree in degreeLevels)) {
            return "Other";
        }

        return degreeLevels[degree];
    };

    const getDegreeFocus = (focus) => {
        let focuses = {
            medical_doctor: "Medical Doctor",
            medical_nursing: "Medical Nursing",
            psychology: "Psychology",
            counseling: "Counseling",
            social_work: "Social Work",
            education: "Education",
        };
        if (!(focus in focuses)) {
            return "Other";
        }

        return focuses[focus];
    };

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
                    <Col>{getDegreeLevel(accountInfo.degree_level)}</Col>
                </Row>
                <Row>
                    <Col className="demographic-field">
                        Degree Area of Focus
                    </Col>
                    <Col>{getDegreeFocus(accountInfo.degree_focus)}</Col>
                </Row>

                <Row>
                    <Col className="demographic-field">Occupation</Col>
                    <Col>{accountInfo.occupation}</Col>
                </Row>
                {accountInfo.license && (
                    <Row>
                        <Col className="demographic-field">License Type</Col>
                        <Col>
                            <div>
                                {accountInfo.license_type} :{" "}
                                {accountInfo.license}
                            </div>
                        </Col>
                    </Row>
                )}
            </div>
        </Styles>
    );
};

export default Demographics;

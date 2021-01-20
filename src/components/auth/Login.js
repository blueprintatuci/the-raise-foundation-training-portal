import React, { useState } from "react";
import styled from "styled-components";
import userPool from "./poolData";
import { CognitoUser, CognitoUserAttribute } from "amazon-cognito-identity-js";
import { Container, Form, Button, Col } from "react-bootstrap";
import MainLogo from "../../assets/raise_logo_background.png";
import GradientButton from "../standard/GradientButton";

const Styles = styled.div`
    .form-control {
        border: none;
        border-radius: 12px;
        background: #f1f1f1;
        height: 45px;
    }

    .form-container {
        justify-content: center;
        display: flex;
    }

    .form-wrapper {
        font-family: "Raleway", sans-serif;
        background: white;
        min-width: 350px;
        padding: 2rem;
        margin-top: 3rem;
        border-radius: 15px;
        width: 450px;
    }

    .logo {
        height: 80px;
    }

    .logo:hover {
        cursor: pointer;
    }

    .form-title {
        text-align: center;
        font-weight: 900;
        font-size: 2rem;
        padding: 15px;
    }

    .actions {
        padding-top: 1.2rem;
        display: flex;
        justify-content: space-between;
    }

    .actions > a {
        color: rgb(1, 131, 225);
    }
    .actions > a:hover {
        text-decoration: none;
        color: rgb(1, 131, 190);
    }
`;

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Styles>
            <div>
                <Container className="form-container">
                    <div className="form-wrapper">
                        <Form>
                            <img
                                className="logo"
                                alt="The Raise Foundation Logo"
                                src={MainLogo}
                            ></img>

                            <div className="form-title">Training Portal</div>

                            <Form.Group>
                                <Form.Control
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                    placeholder="Email"
                                />
                                <Form.Text className="text-muted"></Form.Text>
                            </Form.Group>

                            <Form.Group>
                                <Form.Control
                                    value={password}
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Group>

                            <GradientButton text="Login" />
                            <div className="actions">
                                <a href="/">Continue as Guest</a>
                                <a href="/signup">Sign Up</a>
                            </div>
                        </Form>
                    </div>
                </Container>
            </div>
        </Styles>
    );
};

export default Login;

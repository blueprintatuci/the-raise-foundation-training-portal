import React, { useState, useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { AccountContext } from "./Accounts";
import { Container, Form } from "react-bootstrap";
import MainLogo from "../../assets/logos/raise_logo_background.png";
import GradientButton from "../standard/GradientButton";
import { Redirect } from "react-router-dom";

const Styles = styled.div`
    height: auto;
    background: #f1f1f1;

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
        margin-bottom: 5rem;
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
    let myRef = useRef();
    useEffect(() => myRef.current && myRef.current.focus());

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const { authenticate } = useContext(AccountContext);

    const onSubmit = (event) => {
        event.preventDefault();
        authenticate(email, password)
            .then(() => {
                setLoggedIn(true);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    if (loggedIn) {
        return <Redirect to="/"></Redirect>;
    }

    return (
        <Styles>
            <div>
                <Container id="tester" className="form-container">
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

                            <GradientButton
                                block="true"
                                text="Login"
                                onClick={onSubmit}
                            />
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

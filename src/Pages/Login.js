import React from "react";
import styled from "styled-components";
import Login from "../components/auth/Login";
import { Account } from "../components/auth/Accounts";

const Styles = styled.div``;

const SignUp = () => {
    return (
        <Styles>
            <Account>
                <Login />
            </Account>
        </Styles>
    );
};

export default SignUp;

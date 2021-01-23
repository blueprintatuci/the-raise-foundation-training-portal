import React from "react";
import styled from "styled-components";
import Register from "../components/auth/Register";

const Styles = styled.div`
    min-height: 100vh;
    background: #f1f1f1;
`;

const SignUp = () => {
    return (
        <Styles>
            <Register />
        </Styles>
    );
};

export default SignUp;
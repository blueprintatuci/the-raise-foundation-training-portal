import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Account, AccountContext } from "./auth/Accounts";

const Styles = styled.div``;

const Test = () => {
    const { getSession } = useContext(AccountContext);
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        getSession()
            .then(() => {
                setLoggedIn(true);
            })
            .catch((err) => {
                console.error(err);
            });
    });

    if (loggedIn) {
        return (
            <Styles>
                <h1>HELLO</h1>
            </Styles>
        );
    }
    return (
        <Styles>
            <h1>HELLO LOGGED OUT</h1>
        </Styles>
    );
};

export default Test;

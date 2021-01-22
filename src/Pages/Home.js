import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Account, AccountContext } from "../components/auth/Accounts";
import Test from "../components/Test";

const Styles = styled.div``;

const Home = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <Styles>
            <Account>
                <Test />
            </Account>
        </Styles>
    );
};

export default Home;

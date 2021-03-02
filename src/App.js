import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import HomePage from "./pages/HomePage.js";
import MainNavbar from "./components/standard/Navigation.js";
import Footer from "./components/standard/Footer";
import SignUp from "./pages/SignUp";
import AccountInfo from "./pages/AccountInfo";
import Login from "./pages/Login";
import "./App.css";
import styled from "styled-components";
import { Account, getSession } from "./components/auth/Accounts";

const Styles = styled.div`
    min-height: 75vh;
`;

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    getSession()
        .then(() => {
            setIsLoggedIn(true);
        })
        .catch((err) => {
            console.error(err);
        });

    return (
        <Account>
            <Router>
                <Styles>
                    <MainNavbar />

                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/login" component={Login} />
                        <Route path="/signup" component={SignUp} />
                        <Route exact path="/account" component={AccountInfo} />
                    </Switch>
                </Styles>
                <Footer />
            </Router>
        </Account>
    );
}

export default App;

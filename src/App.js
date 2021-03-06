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
import { Account } from "./components/auth/Accounts";
import ProtectedRoute from "./components/standard/ProtectedRoute";
import Videos from "./pages/VideoLibrary";
import Video from "./pages/Video";

const Styles = styled.div`
    min-height: 75vh;
`;

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    const updateLoggedIn = () => {
        setLoggedIn(!loggedIn);
    };
    return (
        <Account>
            <Styles>
                <MainNavbar loggedIn={loggedIn} />

                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route
                        exact
                        path="/login"
                        render={() => {
                            return <Login updateLoggedIn={updateLoggedIn} />;
                        }}
                    />
                    <Route path="/signup" component={SignUp} />
                    <ProtectedRoute
                        exact
                        path="/account"
                        component={AccountInfo}
                    />
                    <ProtectedRoute exact path="/videos" component={Videos} />
                    <ProtectedRoute
                        exact
                        path="/videos/watch/:videoId"
                        component={Video}
                    />
                </Switch>
            </Styles>
            <Footer />
        </Account>
    );
}

export default App;

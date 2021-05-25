import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import HomePage from "./pages/HomePage.js";
import MainNavbar from "./components/standard/Navigation.js";
import Footer from "./components/standard/Footer";
import SignUp from "./pages/SignUp";
import AccountInfo from "./pages/AccountInfo";
import Quiz from "./pages/Quiz";
import Login from "./pages/Login";
import "./App.css";
import styled from "styled-components";
import { Account } from "./components/auth/Accounts";
import ProtectedRoute from "./components/standard/ProtectedRoute";
import Videos from "./pages/Videos";
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
            <Router>
                <Styles>
                    <MainNavbar loggedIn={loggedIn} />

                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route
                            exact
                            path="/login"
                            render={() => {
                                return (
                                    <Login updateLoggedIn={updateLoggedIn} />
                                );
                                // NOTE: Update login component to update this prop
                            }}
                        />

                        <Route path="/tester" component={Quiz}></Route>
                        <Route path="/signup" component={SignUp} />
                        <ProtectedRoute
                            exact
                            path="/account"
                            component={AccountInfo}
                        />
                        <Route exact path="/videos/" component={Videos} />
                        <Route
                            exact
                            path="/videos/:videoId"
                            component={Video}
                        />
                    </Switch>
                </Styles>
                <Footer />
            </Router>
        </Account>
    );
}

export default App;

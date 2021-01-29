import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainNavbar from "./components/standard/Navigation.js";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Account } from "./components/auth/Accounts";

import "./App.css";
import styled from "styled-components";

const Styles = styled.div`
    min-height: 100vh;
    background: #f1f1f1;
`;

function App() {
    return (
        <Account>
            <Router>
                <Styles>
                    <MainNavbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/login" component={Login} />
                    </Switch>
                </Styles>
            </Router>
        </Account>
    );
}

export default App;

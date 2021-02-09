import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import MainNavbar from "./components/standard/Navigation.js";
import Footer from "./components/standard/Footer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import "./App.css";
import styled from "styled-components";
import { Account } from "./components/auth/Accounts";

const Styles = styled.div`
    min-height: 75vh;
`;

function App() {
    return (
        <Account>
            <Router>
                <Styles>
                    <MainNavbar />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/login" component={Login} />
                    </Switch>
                </Styles>
                <Footer />
            </Router>
        </Account>
    );
}

export default App;

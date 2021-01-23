import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from "./pages/HomePage.js"
import MainNavbar from "./components/standard/Navigation.js";
import Footer from "./components/standard/Footer";
import SignUp  from "./pages/SignUp"
import './App.css';
import styled from "styled-components";

const Styles = styled.div``;

function App() {
    return (
        <Router>
            <Styles>
                <MainNavbar />
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/signup" component={SignUp}/>
                </Switch>
                <Footer />
            </Styles>
        </Router>
    );
}

export default App;

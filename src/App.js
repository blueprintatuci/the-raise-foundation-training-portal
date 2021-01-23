import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from "./pages/HomePage.js"
import MainNavbar from "./components/standard/Navigation.js";
import SignUp  from "./pages/SignUp"
import './App.css';
import styled from "styled-components";

const Styles = styled.div`
  min-height: 100vh;
  background: #f1f1f1;
`;

function App() {
    return (
        <Router>
            <Styles>
                <MainNavbar />
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/signup" component={SignUp}/>
                </Switch>
            </Styles>
        </Router>
    );
}

export default App;

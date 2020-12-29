import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
                    <Route exact path="/"/>
                    <Route exact path="/signup" component={SignUp}/>
                </Switch>
            </Styles>
        </Router>
    );
}

export default App;

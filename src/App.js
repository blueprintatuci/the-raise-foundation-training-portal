import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainNavbar from "./components/standard/Navigation.js";
import SignUp  from "./Pages/SignUp"

import './App.css';

function App() {
  return (
    <Router>
      <div style={{minHeight: '100vh', background: "#f1f1f1"}}>
        <MainNavbar />

        <Switch>
        <Route exact path="/"/>
        <Route exact path="/signup" component={SignUp}/>

        </Switch>
        
      </div>
    </Router>
  );
}

export default App;

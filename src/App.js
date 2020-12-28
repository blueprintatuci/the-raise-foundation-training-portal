import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainNavbar from "./components/standard/Navigation.js";

import './App.css';

function App() {
  return (
    <Router>
      <div>
      <MainNavbar />

        <Switch>
        <Route exact path="/"/>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;

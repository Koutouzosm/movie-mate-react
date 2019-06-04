import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Home from './pages/Home'
// import Navbar from './components/Navbar'
// import Card from './components/Card'


function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          {/* <Route exact path="/saved" component={Saved} /> */}
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;

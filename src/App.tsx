import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Button from "./pages/Button";
import Tooltip from "./pages/Tooltip";
import Home from "./pages/Home";
import Dropdown from "./pages/dropdown";
import Typography from "./pages/Typography";
import Radio from "./pages/radio";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/button">
            <Button />
          </Route>
          <Route path="/tooltip">
            <Tooltip />
          </Route>
          <Route path="/dropdown">
            <Dropdown />
          </Route>
          <Route path="/typography">
            <Typography />
          </Route>
          <Route path="/radio">
            <Radio />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

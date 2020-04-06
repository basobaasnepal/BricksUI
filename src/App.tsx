import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Button from "./pages/Button";
import Tooltip from "./pages/Tooltip";
import Home from "./pages/Home";
import Dropdown from "./pages/dropdown";
import Typography from "./pages/Typography";
import Toast from "./pages/Toast";
import Skeleton from "./pages/Skeleton";

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
          <Route path="/toast">
            <Toast />
          </Route>
          <Route path="/skeleton">
            <Skeleton />
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

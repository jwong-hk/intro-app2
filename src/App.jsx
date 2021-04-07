import React from "react";
import {
  Container,
  Jumbotron,
  Navbar,
  Form,
  Nav,
  FormControl,
  Button,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';





//Pages
import MainPage from "./pages";
import NoPageFound from "./pages/404";
import UserSubmit from "./pages/usersubmit"
import ListPage from "./pages/list"
import ThankYouPage from "./pages/thankyou"
import Dota2Page from "./pages/dota2page"

// library.add(faCheckSquare, faCoffee)


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/404" component={NoPageFound} />
        <Route exact path="/UserSubmit" component={UserSubmit} />
        <Route exact path="/ListPage" component={ListPage} />
        <Route exact path="/ThankYou" component={ThankYouPage} />
        <Route exact path="/dota2" component={Dota2Page} />
        <Redirect to="/404"/>
      </Switch>
    </Router>
  );
}

export default App;

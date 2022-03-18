import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Header from "./header";
import HomePage from "./homepage";
import BlackTeasIndex from "./teas/blackteas_index";
import GreenTeasIndex from "./teas/greenteas_index";
import HerbalTeasIndex from "./teas/herbalteas_index"
import TeasIndex from "./teas/teas_index";
import MenuShow from "./menu_show";
import LoginFormContainer from "../components/account/login_form_container";
import SignupFormContainer from "../components/account/signup_form_container";
import AccountShow from "./account/account_show";

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/teas/black" component={BlackTeasIndex} />
      <Route path="/teas/green" component={GreenTeasIndex} />
      <Route path="/teas/herbal" component={HerbalTeasIndex} />
      <Route exact path="/teas" component={TeasIndex} />
      <Route path="/menu" component={MenuShow} />
      <AuthRoute exact path="/account/login" component={LoginFormContainer} />
      <AuthRoute exact path="/account/register" component={SignupFormContainer} />
      <ProtectedRoute exact path="/account" component={AccountShow} />
      <Route exact path="/" component={HomePage} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
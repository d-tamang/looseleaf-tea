import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HeaderContainer from "./header/header_container";
import HomePage from "./homepage";
import BlackTeasIndex from "./teas/blackteas_index";
import GreenTeasIndex from "./teas/greenteas_index";
import HerbalTeasIndex from "./teas/herbalteas_index"
import TeasIndex from "./teas/teas_index";
import MenuShow from "./menu_show";
import AccountShowContainer from "./account/account_show_container";
import LoginFormContainer from "../components/account/login_form_container";
import SignupFormContainer from "../components/account/signup_form_container";
import Footer from "./footer";

const App = () => (
  <div className="app">
    <HeaderContainer />
    <Switch>
      <Route exact path="/teas/black" component={BlackTeasIndex} />
      <Route exact path="/teas/green" component={GreenTeasIndex} />
      <Route exact path="/teas/herbal" component={HerbalTeasIndex} />
      <Route exact path="/teas" component={TeasIndex} />
      <Route exact path="/menu" component={MenuShow} />
      <ProtectedRoute exact path="/account" component={AccountShowContainer} />
      <AuthRoute exact path="/account/login" component={LoginFormContainer} />
      <AuthRoute exact path="/account/register" component={SignupFormContainer} />
      <Route exact path="/" component={HomePage} />
      <Redirect to="/" />
    </Switch>
    <Footer />
  </div>
);

export default App;
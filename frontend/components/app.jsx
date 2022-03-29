import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HeaderContainer from "./header/header_container";
import BlackTeasContainer from "./teas/black/blackteas_container";
import GreenTeasContainer from "./teas/green/greenteas_container";
import HerbalTeasContainer from "./teas/herbal/herbalteas_container"
import TeaShowContainer from "./teas/tea_show_container";
import TeasIndexContainer from "./teas/all_teas/teas_index_container";
import MenuShow from "./menu_show";
import AccountShowContainer from "./account/account_show_container";
import LoginFormContainer from "../components/account/login_form_container";
import SignupFormContainer from "../components/account/signup_form_container";
import HomePage from "./homepage";
import Footer from "./footer";
import EditReviewContainer from '../components/reviews/edit_review_container';

const App = () => (
  <div className="app">
    <HeaderContainer />
    <Switch>
      <Route exact path="/teas/black" component={BlackTeasContainer} />
      <Route exact path="/teas/green" component={GreenTeasContainer} />
      <Route exact path="/teas/herbal" component={HerbalTeasContainer} />
      <Route exact path="/teas/:teaId" component={TeaShowContainer} />
      <ProtectedRoute path="/teas/:id/reviews/:reviewId/edit" component={EditReviewContainer} />
      <Route exact path="/teas" component={TeasIndexContainer} />
      <Route exact path="/menu" render={MenuShow} />
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
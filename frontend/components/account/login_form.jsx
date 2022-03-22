import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.props.login(this.state);
  }

  renderErrors() {
    return (
      <div>
        {this.props.errors.map((error, i) => (
          <p key={i}>{error}</p>
        ))}
      </div>
    );
  }

  clearErrors() {
    this.props.clearErrors();
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.login({ first_name: "Demo", last_name: "User", email: "demouser@demo.com", password: "password" })
  }

  render() {
    return (
      <div className="session-form">
        <div>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.email} onChange={this.update("email")} placeholder="Email"></input>
            <br />
            <input type="password" value={this.state.password} onChange={this.update("password")} placeholder="Password"></input>
            <br />
            <button id="session-button">SIGN IN</button>
          </form>
        </div>
        <div><button id="demo-button" onClick={this.demoLogin}>DEMO LOGIN</button></div>
        <div className="session-errors">{this.renderErrors()}</div>
        <div className="session-question">Don't have an account?</div>
        <div><Link to="/account/register" onClick={this.clearErrors}>Create Account</Link></div>
      </div>
    )
  }
}

export default LoginForm;
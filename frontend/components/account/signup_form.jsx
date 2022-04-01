import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.props.signup(this.state);
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

  render() {
    return (
      <div className="session-form">
        <div>
          <form className="signup-form" onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.first_name} onChange={this.update('first_name')} placeholder="First Name"></input>
            <br />
            <input type="text" value={this.state.last_name} onChange={this.update('last_name')} placeholder="Last Name"></input>
            <br />
            <input type="text" value={this.state.email} onChange={this.update('email')} placeholder="Email*"></input>
            <br />
            <input type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password*"></input>
            <br />
            <button id="session-button">REGISTER</button>
          </form>
        </div>
        <div id="session-text">*Required Fields</div>
        <div className="session-errors">{this.renderErrors()}</div>
        <div className="session-question">Already have an account?</div>
        <div className="form-switch"><Link to="/account/login" onClick={this.clearErrors}>Sign In</Link></div>
      </div>
    )
  }
}

export default SignupForm;
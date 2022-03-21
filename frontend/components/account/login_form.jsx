import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  renderErrors() {
    return(
      <div>
        {this.props.errors.map((error, i) => (
          <p key={i}>{error}</p>
        ))}
      </div>
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Email
          <input type="text" value={this.state.email} onChange={this.update("email")}></input>
        </label>
        <br />
        <label>Password
          <input type="password" value={this.state.password} onChange={this.update("password")}></input>
        </label>
        <br />
        <button>Sign In</button>
        {this.renderErrors()}
        <p>Don't have an account?</p>
        <Link to="/account/register">Create Account</Link>
      </form>
    )
  }
}

export default LoginForm;
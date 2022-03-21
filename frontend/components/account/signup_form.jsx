import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
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
    this.props.signup(this.state);
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
        <label>First Name
          <input type="text" value={this.state.first_name} onChange={this.update('first_name')}></input>
        </label>
        <br />
        <label>Last Name
          <input type="text" value={this.state.last_name} onChange={this.update('last_name')}></input>
        </label>
        <br />
        <label>Email*
          <input type="text" value={this.state.email} onChange={this.update('email')}></input>
        </label>
        <br />
        <label>Password*
          <input type="password" value={this.state.password} onChange={this.update('password')}></input>
        </label>
        <br />
        <button>Register</button>
        {this.renderErrors()}
        <p>*Required Fields</p>
        <p>Already have an account?</p>
        <Link to="/account/login">Sign In</Link>
      </form>
    )
  }
}

export default SignupForm;
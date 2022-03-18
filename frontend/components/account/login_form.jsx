import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Email
          <input type="text" value={this.state.email}></input>
        </label>
        <br />
        <label>Password
          <input type="password" value={this.state.password}></input>
        </label>
        <br />
        <button>Sign In</button>
        <br />
        {this.props.navLink}
      </form>
    )
  }
}

export default LoginForm;
import React from 'react';

class SignupForm extends React.Component {
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
          <input type="text"></input>
        </label>
        <br />
        <label>Password
          <input type="password"></input>
        </label>
        <br />
        <button>Register</button>
        <br />
        {this.props.navLink}
      </form>
    )
  }
}

export default SignupForm;
import React from "react";

class AccountShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="account-container">
        <div id="account-header">My Account</div>
        <div className="account-show">
          <div>
            <div className="account-title">Order History</div>
            <br />
            <div>You haven't placed any orders yet.</div>
          </div>
          <div>
            <div className="account-title">Account Details</div>
            <br />
            <div>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</div>
            <button id="logout-button" onClick={this.props.logout}>LOG OUT</button>
          </div>
        </div>
      </div>
    )
  }
}

export default AccountShow;
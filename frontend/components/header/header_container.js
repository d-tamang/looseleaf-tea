import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    teas: Object.values(state.entities.teas),
    cartItems: Object.values(state.entities.cartItems)
  };
};

export default connect(mapStateToProps, null)(Header);
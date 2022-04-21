import { connect } from 'react-redux';
import { fetchTeas } from '../../util/tea_api_util';
import Header from './header';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    teas: Object.values(state.entities.teas),
    cartItems: Object.values(state.entities.cartItems)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTeas: () => dispatch(fetchTeas())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
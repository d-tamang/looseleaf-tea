import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    testState: state
  };
};

export default connect(mapStateToProps, null)(Header);